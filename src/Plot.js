const d3 = require('d3');
const _ = require('underscore');

import Axes from './Axes';
import Tooltip from './Tooltip';
import Zoom from './Zoom';
import Group from './Group';
import { InvalidGroupError } from './Errors';


const MINIMUM_PLOT_HEIGHT = 300;

class Plot {
  /*
  * Plot - creates a new instance of a plot
  * @param {object} options, the options to create a ScatterPlot
  * @param {string} containerID, the id of the ScatterPlot container div
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
  * init - method to initialize the plot, allows the plot to be re-initialized
  *  on resize while keeping the current plot data in memory
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
    return this;
  }

  /*
  * setDimensions - method to set the dimensions of the plot based on the current window
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
    if (this.height < MINIMUM_PLOT_HEIGHT) {
      this.height = MINIMUM_PLOT_HEIGHT;
    }
    this.viewBoxWidth = this.width + this.margins.left + this.margins.right;
    this.viewBoxHeight = this.height + this.margins.top + this.margins.bottom;
    return this;
  }

  /*
  * update - update the width and height attributes of the root and container
  *  elements. then call update on the plot axes
  * @param {array} nodes, an array of {object} for each node
  * @returns {object} this
  */
  update(nodes) {
    this.setDimensions();
    this.root.attr('width', this.viewBoxWidth).attr('height', this.viewBoxHeight);
    this.container.attr('width', this.width).attr('height', this.height).attr('transform', `translate(${this.margins.left}, ${this.margins.top})`);
    if (typeof nodes === 'undefined') {
      this.axes.update(this.getGroupsNodes());
    } else {
      if (nodes instanceof Array) {
        this.axes.update(nodes);
        if (this.axes.initialized === true) {
          this.axes.setInitialMinMax(this.axes.currentMinMax);
        }
      } else {
        const shouldSetInitialMinMax = this.mergeGroups(nodes);
        this.axes.update(this.getGroupsNodes(false));
        if (shouldSetInitialMinMax) {
          this.axes.setInitialMinMax(this.axes.currentMinMax);
        }
      }
    }
    return this;
  }

  /*
  * draw - draws the markers on the plot
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
  defaultGroup(nodes) {
    let group = this.getGroups().find((g) => {
      return g.id === 'default_';
    });
    if (typeof group === 'undefined') {
      if (this.options.group && this.options.group.onEnter) {
        group = new Group(this, {id: 'default_', onEnter: this.options.group.onEnter});
      } else {
        group = new Group(this, {id: 'default_'});
      }
    }
    nodes.forEach((d) => {
      return group.addNode(d);
    });
    return group;
  }

  /*
  * mergeGroups - merge groups from data passed directly to the draw method
  * @param {object} nodes, a grouping of nodes
  * @return {boolean} shouldReset, should the axes domain be reset to currentMinMax
  */
  mergeGroups(groups) {
    const notMerged = Object.keys(this.groups_);
    let hasNewGroup = false;
    Object.keys(groups).forEach((k) => {
      let idx = -1;
      let group = this.groups_[k];
      if (typeof group === 'undefined') {
        hasNewGroup = true;
        group = new Group(this, {id: k, onEnter: this.options.group.onEnter});
      } else {
        idx = notMerged.indexOf(k);
        if (idx >= 0) {
          notMerged.splice(idx, 1);
        }
      }
      groups[k].forEach((m) => {
        group.addNode(m);
      });
    });
    if (notMerged.length > 0) {
      notMerged.forEach((k) => {
        this.removeGroup(k);
      });
      return true;
    }
    if (hasNewGroup && this.axes.initialized === true) {
      return true;
    }
    return false;
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
  * showWarn - shows a warning message in the center of the plot
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
  * removeWarn - removes the warning message from the plot
  * @return {object} this
  */
  removeWarn() {
    if (this.warn) {
      this.warn.remove();
    }
    return this;
  }

  /*
  * remove - removes the plot from the DOM and any event listeners
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
  * destroy - destroys the plot and any associated elements
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
  * @param {object} group, add a group to the plot
  * @throws {InvalidGroupError} error
  * @return {Plot} this
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
  */
  removeGroup(id) {
    if (this.groups_.hasOwnProperty(id)) {
      delete this.groups_[id];
    }
  }

  /*
  * getGroups - returns the groups associated with this plot
  * @return {array} groups, the groups associated with this plot
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
    this.getGroups().reduce((prev, nextObj) => {
      if (shouldFilter) {
        return prev + nextObj.applyFilters().length;
      }
      const filters = Object.assign({}, this.filters);
      if (filters.hasOwnProperty('_domain')) {
        delete filters._domain;
      }
      return prev + nextObj.applyFilters(filters).length;
    }, 0);
  }

  /*
  * getGroupsNodes - returns all the nodes for each group
  * @param {boolean} shouldFilter, should the nodes be filtered by domain
  * @return {array} nodes, an array of nodes
  */
  getGroupsNodes(shouldFilter) {
    this.getGroups().reduce((prevArr, nextObj) => {
      if (shouldFilter) {
        return prevArr.concat(nextObj.applyFilters());
      }
      const filters = Object.assign({}, this.filters);
      if (filters.hasOwnProperty('_domain')) {
        delete filters._domain;
      }
      return prevArr.concat(nextObj.applyFilters(filters));
    }, []);
  }

  /*
  * addFilter - add a filter to the plot
  * @param {string} name, the name of the filter
  * @param {function} fn, the function to be applied to the data
  * @return {object} this
  */
  addFilter(name, fn) {
    this.filters[name] = _.bind(fn, this);
    return this;
  }

  /*
  * removeFilter - removes a filter from the plot
  * @param {string} name, the name of the filter
  * @return {object} this
  */
  removeFilter(name) {
    if (this.filters[name] !== 'undefined') {
      delete this.filters[name];
    }
    return this;
  }
}


module.exports = Plot;
