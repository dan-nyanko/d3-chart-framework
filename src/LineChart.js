const _ = require('underscore');

import Chart from './Chart';
import LineGroup from './groups/LineGroup';


class LineChart extends Chart {
  /**
  * LineChart - constructs the root SVG element to contain the LineChart
  * @param {object} options, the options to create a LineChart
  * @param {string} containerID, the id of the LineChart container div
  * @param {string} svgcontainerClass, the desired class of the constructed svg element
  * @param {object} tooltip,
  * @param {number} tooltip.opacity, the background opacity for the tooltip
  * @param {object} tooltip.template, the compiled template
  * @param {boolean} scale, scale the svg on window resize @default false
  * @param {boolean} resize, resize the svg on window resize @default true
  * @returns {object} this, returns self
  */
  constructor(options) {
    super(options);
    this.init();
    return this;
  }

  /**
  * init - method to set/re-set the resizeHandler
  * @returns {object} this
  */
  init() {
    super.init();
    const resizeEnabled = this.options.resize || true;
    if (resizeEnabled) {
      this.resizeHandler = _.debounce(_.bind(this.resize, this), 500);
      return window.addEventListener('resize', this.resizeHandler);
    }
  }

  /**
  * draw - draw using d3 select.data.enter workflow
  * @param {array} data, an array of {object} for each marker
  * @returns {object} this
  */
  draw(data) {
    super.draw(data);
    const groups = this.groups.selectAll('.group').data(this.getGroups(), (d) => {
      return d.id;
    });
    groups.enter().append((group) => {
      return group.detached();
    });
    groups.each((group) => {
      return group.update();
    });
    groups.exit().remove();
    return this;
  }

  /**
  * defaultGroup - creates a default group if an array is passed to the draw method
  * @param {array} nodes, an array of Node's
  */
  defaultGroup(nodes) {
    let group = this.getGroups().find((g) => {
      return g.id === 'default_';
    });
    if (typeof group === 'undefined') {
      if (this.options.group && this.options.group.onEnter) {
        group = new LineGroup(this, {id: 'default_', onEnter: this.options.group.onEnter});
      } else {
        group = new LineGroup(this, {id: 'default_'});
      }
    }
    nodes.forEach((d) => {
      return group.addNode(d);
    });
    return group;
  }

  /**
  * mergeGroups - merge groups from data passed directly to the draw method
  * @override
  * @param {object} groups, a set of Groups
  * @return {boolean} hasChanged
  */
  mergeGroups(groups) {
    const notMerged = Object.keys(this.groups_);
    let addedNewGroup = false;
    Object.keys(groups).forEach((k) => {
      let idx = -1;
      let group = this.groups_[k];
      if (typeof group === 'undefined') {
        addedNewGroup = true;
        if (groups[k] instanceof LineGroup) {
          group = groups[k];
          this.addGroup(group);
        } else {
          // TODO: allow the user to pass in an object with `data` array
          throw new Error('Must be instance of a d3cf Group.');
        }
      } else {
        idx = notMerged.indexOf(k);
        if (idx >= 0) {
          notMerged.splice(idx, 1);
          // merge new group data into the existing group
          groups[k].getNodes().forEach((n) => {
            group.addNode(n);
          });
        }
      }
    });
    // remove the groups that have not been sliced
    if (notMerged.length > 0) {
      notMerged.forEach((k) => {
        this.removeGroup(k);
      });
      // if we have removed an existing group
      return true;
    }
    // if we have merged in new groups
    if (addedNewGroup) {
      return true;
    }
    // otherwise no change
    return false;
  }

  /**
  * update the dimensions of the chart (axes, gridlines, then redraw)
  * @param {array} data, an array of {object} for each marker
  * @returns {object} this
  */
  update(data) {
    super.update(data);
    this.draw(data);
    return this;
  }

  /**
  * remove - removes the chart from the DOM and any event listeners
  * @return {object} this
  */
  remove() {
    super.remove();
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
    return this;
  }

  /**
  * resize - re-renders the chart
  * @return {object} this
  */
  resize() {
    this.update();
    return this;
  }
}


module.exports = LineChart;
