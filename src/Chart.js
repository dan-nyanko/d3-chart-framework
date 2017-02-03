const d3 = require('d3');
const _ = require('underscore');

import Axes from './Axes';
import Tooltip from './Tooltip';
import Zoom from './Zoom';
import Group from './groups/Group';
import { InvalidGroupError } from './Errors';


const MINIMUM_CHART_HEIGHT = 300;

class Chart {
  /*
  * Chart - creates a new instance of a chart
  * @param {object} options, the options to create a chart
  * @param {string} containerID, the id of the container div
  * @param {string} svgcontainerClass, the desired class of the constructed svg element
  * @param {object} tooltip,
  * @param {number} tooltip.opacity, the background opacity for the tooltip
  * @param {object} tooltip.template, the compiled template
  * @param {boolean} scale, scale the svg on window resize @default false
  * @param {boolean} resize, resize the svg on window resize @default true
  * @returns {object} this, returns self
  */
  constructor(options) {
    this.options = options;
    this.drawn = false;
    this.filters = options.filters || {};
    this.groups_ = {};
    return this;
  }

  /*
  * init - method to initialize the chart, allows the chart to be re-initialized
  *  on resize while keeping the current chart data in memory
  * @returns {object} this
  */
  init() {
    this.setDimensions();
    const scale = this.options.scale || false;
    if (scale) {
      this.root = d3.select(`#${this.options.containerID}`).append('svg').attr('viewBox', `0 0 ${this.viewBoxWidth} ${this.viewBoxHeight}`).attr('preserveAspectRatio', 'xMinYMin meet');
    } else {
      this.root = d3.select(`#${this.options.containerID}`).append('svg').attr('width', this.viewBoxWidth).attr('height', this.viewBoxHeight);
    }
    this.container = this.root.append('g').attr('class', this.options.svgContainerClass).attr('width', this.getWidth()).attr('height', this.getHeight()).attr('transform', `translate(${this.margins.left}, ${this.margins.top})`);
    this.axes = new Axes(this, this.options.axes);
    this.tooltip = new Tooltip(this, this.options);
    const zoomEnabled = this.options.zoom || false;
    if (zoomEnabled) {
      this.zoom = new Zoom(this, this.options);
    }
    this.groups = this.container.append('g').attr('class', 'd3cf-groups').attr('transform', `translate(${this.margins.left}, 0)`);
    // this.update([]);
    return this;
  }

  /*
  * setDimensions - method to set the dimensions of the chart based on the current window
  */
  setDimensions() {
    this.margins = this.options.margins || {
      left: 40,
      right: 20,
      top: 20,
      bottom: 40,
    };
    this.width = this.options.width || document.getElementById(this.options.containerID).offsetWidth - (this.margins.left + this.margins.right);
    this.height = this.options.height;
    if (this.height < MINIMUM_CHART_HEIGHT) {
      this.height = MINIMUM_CHART_HEIGHT;
    }
    this.viewBoxWidth = this.width + this.margins.left + this.margins.right;
    this.viewBoxHeight = this.height + this.margins.top + this.margins.bottom;
    return this;
  }

  /*
  * update - update the width and height attributes of the root and container
  *  elements. then call update on the chart axes
  * @param {array} nodes, an array of {object} for each node
  * @returns {object} this
  */
  update(nodes) {
    this.setDimensions();
    this.root.attr('width', this.viewBoxWidth).attr('height', this.viewBoxHeight);
    this.container.attr('width', this.width).attr('height', this.height).attr('transform', `translate(${this.margins.left}, ${this.margins.top})`);
    if (typeof nodes === 'undefined') {
      this.axes.update(this.getGroupsNodes(), false);
    } else {
      if (nodes instanceof Array) {
        this.axes.update(nodes, true);
        if (this.axes.initialized === true) {
          this.axes.setInitialMinMax(this.axes.currentMinMax);
        }
      } else {
        const shouldSetInitialMinMax = this.mergeGroups(nodes);
        this.axes.update(this.getGroupsNodes(false), true);
        if (shouldSetInitialMinMax) {
          this.axes.setInitialMinMax(this.axes.currentMinMax);
        }
      }
    }
    return this;
  }

  /*
  * draw - draws the markers on the chart
  * @note this will automatically show/hide a warning message if the data
  * is empty. Do not call super() to override this behavior.
  * @param {array} nodes, an array of {object} for each marker
  */
  draw(nodes) {
    if (!this.drawn) {
      this.drawn = true;
      this.root.transition().style('opacity', 1);
    }
    if (typeof nodes === 'undefined') {
      if (this.getGroupsSize() <= 0) {
        this.showWarn();
        return;
      }
    } else {
      if (nodes instanceof Array) {
        const group = this.defaultGroup(nodes);
        if (group.size() <= 0) {
          this.showWarn();
          return;
        }
      } else {
        if (this.getGroupsSize() <= 0) {
          this.showWarn();
          return;
        }
      }
    }
    this.removeWarn();
  }

  /*
  * defaultGroup - creates a default group if an array is passed to the draw method
  * @param {array} nodes, an array of Node's
  */
  defaultGroup() {
    throw new Error('defaultGroup must be implemented.');
  }

  /*
  * applyFilters - apply any filters from the chart
  * @param {object} filters, an array of filters to apply
  * @returns {array} filtered, the filtered data
  */
  applyFilters(nodes, filters) {
    const filters_ = filters || this.filters;
    let filtered = [];
    if (nodes) {
      filtered = nodes.filter((d) => {
        let valid = true;
        const keys = Object.keys(filters_);
        let i = 0;
        const keysLen = keys.length;
        while (i < keysLen) {
          const key = keys[i++];
          const f = filters_[key](d);
          if (typeof f === 'undefined') {
            valid = false;
            break;
          }
        }
        if (valid) {
          return d;
        }
      });
    }
    return filtered;
  }

  /*
  * getWidth
  * @return {number} width (excluding margins) for the root svg
  */
  getWidth() {
    return this.width - (this.margins.left + this.margins.right);
  }

  /*
  * getHeigth
  * @return {number} width (excluding margins) for the root svg
  */
  getHeight() {
    return this.height - (this.margins.top + this.margins.bottom);
  }

  /*
  * showWarn - shows a warning message in the center of the chart
  * @param {string} m, the message to display
  * @return {object} this
  */
  showWarn(m) {
    const message = m || 'No data to display';
    if (this.warn) {
      this.removeWarn();
    }
    this.warn = this.container.append('g').style('opacity', 0).attr('class', 'd3cf-warn');
    this.warn.append('text').attr('text-anchor', 'middle').attr('x', this.width / 2).attr('y', this.getHeight() / 2).text(message);
    this.warn.transition().style('opacity', 1);
    return this;
  }

  /*
  * removeWarn - removes the warning message from the chart
  * @return {object} this
  */
  removeWarn() {
    if (this.warn) {
      this.warn.remove();
    }
    return this;
  }

  /*
  * remove - removes the chart from the DOM and any event listeners
  * @return {object} this
  */
  remove() {
    this.zoom.remove();
    this.tooltip.remove();
    this.axes.remove();
    this.container.remove();
    this.root.remove();
  }

  /*
  * destroy - destroys the chart and any associated elements
  */
  destroy() {
    this.remove();
    this.zoom = null;
    this.tooltip = null;
    this.axes = null;
    this.container = null;
    this.root = null;
    this.resizeHandler = null;
  }

  /*
  * addGroup
  * @param {object} group, add a group to the chart
  * @throws {InvalidGroupError} error
  * @return {Chart} this
  */
  addGroup(group) {
    if (group instanceof Group === false) {
      throw new InvalidGroupError();
    }
    this.groups_[group.id] = group;
    return this;
  }

  /*
  * removeGroup
  * @param {string} id, the group to remove
  * @return {Chart} this
  */
  removeGroup(id) {
    if (this.groups_.hasOwnProperty(id)) {
      delete this.groups_[id];
    }
    return this;
  }

  /*
  * getGroups - returns the groups associated with this chart
  * @return {array} groups, the groups associated with this chart
  */
  getGroups() {
    return Object.values(this.groups_);
  }

  /*
  * getGroups - returns the size of all the groups
  * @param {boolean} shouldFilter, should the nodes be filtered by domain
  * @return {Number} size, the size of all the groups
  */
  getGroupsSize(shouldFilter) {
    return this.getGroups().reduce((prev, nextObj) => {
      if (shouldFilter) {
        return prev + this.applyFilters(nextObj.getNodes()).length;
      }
      const filters = Object.assign({}, this.filters);
      if (filters.hasOwnProperty('_domain')) {
        delete filters._domain;
      }
      return prev + this.applyFilters(nextObj.getNodes(), filters).length;
    }, 0);
  }

  /*
  * getGroupsNodes - returns all the nodes for each group
  * @param {boolean} shouldFilter, should the nodes be filtered by domain
  * @return {array} nodes, an array of nodes
  */
  getGroupsNodes(shouldFilter) {
    return this.getGroups().reduce((prevArr, nextObj) => {
      if (shouldFilter) {
        return prevArr.concat(this.applyFilters(nextObj.getNodes()));
      }
      const filters = Object.assign({}, this.filters);
      if (filters.hasOwnProperty('_domain')) {
        delete filters._domain;
      }
      return prevArr.concat(this.applyFilters(nextObj.getNodes(), filters));
    }, []);
  }

  /*
  * mergeGroups - merge groups from data passed directly to the draw method
  * @param {object} nodes, a grouping of nodes
  * @return {boolean} shouldReset, should the axes domain be reset to currentMinMax
  */
  mergeGroups() {
    throw new Error('mergeGroups must be implemented.');
  }

  /*
  * addFilter - add a filter to the chart
  * @param {string} name, the name of the filter
  * @param {function} fn, the function to be applied to the data
  * @return {object} this
  */
  addFilter(name, fn) {
    this.filters[name] = _.bind(fn, this);
    return this;
  }

  /*
  * removeFilter - removes a filter from the chart
  * @param {string} name, the name of the filter
  * @return {object} this
  */
  removeFilter(name) {
    if (this.filters[name] !== 'undefined') {
      delete this.filters[name];
    }
    return this;
  }

  /*
  * resetZoom - resets the zoom of the axes
  */
  resetZoom() {
    if (this.zoom) {
      return this.zoom.reset();
    }
  }
}


module.exports = Chart;
