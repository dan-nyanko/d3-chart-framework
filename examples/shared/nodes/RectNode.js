const d3 = require('d3');

import { Node } from '../../lib/d3-chart-framework';


const MINIMUM_MARKER_WIDTH = 10;
const MINIMUM_MARKER_HEIGHT = 10;

class RectNode extends Node {
  /*
  * RectNode - a rectangular node
  * @param {object} plot, an instance of a plot
  * @param {object} options, the options used to construct the plot
  * @param {number} options.x1, the value for x1 position
  * @param {number} options.x2, the value for x2 position
  * @param {number} options.y1, the value for y1 position
  * @param {number} options.h, the value for the height
  * @param {string} options.f, the fill of the marker
  * @param {number} options.o, the opacity of the marker
  * @param {object} options.meta, the optional meta data associated with the marker (e.g. used in the Tooltip)
  * @return {object} this
  */
  constructor(plot, options) {
    super(options);
    this.plot = plot;
    this.x1 = options.x1;
    this.x2 = options.x2;
    this.y1 = options.y1;
    this.h = options.h || 10;
    this.f = options.f || '#345e7e';
    this.o = options.o || 0.4;
    this.style = options.style || 'd3cf-node';
    return this;
  }

  /*
  * update - updates one or more elements within the RectNode SVG group
  */
  update() {
    if (typeof this.group === 'undefined') {
      this.group = d3.select(`#${this.id}`);
    }
    // select
    const rect = this.group.selectAll('rect').data([this], (d) => {
      return d.id;
    });
    // create
    rect.enter().append('rect').attr('class', this.style).attr('x', () => {
      return this.plot.axes.xScale(this.x1);
    }).attr('y', () => {
      let height = this.h;
      if (height < MINIMUM_MARKER_HEIGHT) {
        height = MINIMUM_MARKER_HEIGHT;
      }
      return this.plot.axes.yScale(this.y1) - height / 2;
    }).attr('width', () => {
      let width = this.plot.axes.xScale(this.x2) - this.plot.axes.xScale(this.x1);
      if (width < MINIMUM_MARKER_WIDTH) {
        width = MINIMUM_MARKER_WIDTH;
      }
      return width;
    }).attr('height', () => {
      let height = this.h;
      if (height < MINIMUM_MARKER_HEIGHT) {
        height = MINIMUM_MARKER_HEIGHT;
      }
      return height;
    }).style('fill', () => {
      return this.f;
    }).style('opacity', () => {
      return this.o;
    }).on('mouseover', () => {
      if (this.plot.tooltip) {
        return this.plot.tooltip.mouseover(this, d3.event.pageX, d3.event.pageY);
      }
    }).on('mouseout', () => {
      if (this.plot.tooltip) {
        return this.plot.tooltip.mouseout();
      }
    });

    // update
    rect.attr('x', () => {
      return this.plot.axes.xScale(this.x1);
    }).attr('y', () => {
      let height = this.h;
      if (height < MINIMUM_MARKER_HEIGHT) {
        height = MINIMUM_MARKER_HEIGHT;
      }
      return this.plot.axes.yScale(this.y1) - height / 2;
    }).attr('width', () => {
      let width = this.plot.axes.xScale(this.x2) - this.plot.axes.xScale(this.x1);
      if (width < MINIMUM_MARKER_WIDTH) {
        width = MINIMUM_MARKER_WIDTH;
      }
      return width;
    }).attr('height', () => {
      let height = this.h;
      if (height < MINIMUM_MARKER_HEIGHT) {
        height = MINIMUM_MARKER_HEIGHT;
      }
      return height;
    });

    // remove
    rect.exit().remove();
    return this;
  }

  /*
  * static method to created an RectNode object from a database record
  *
  * @param {object} plot, an instance of the plot
  * @param {object} incident, a database record to convert into a RectNode
  * @return {object} rectNode, an instance of RectNode
  */
  static createFromIncident(plot, incident) {
    let fill;
    switch(incident.type) {
      case 'warning':
        fill = '#FFBB33';
        break;
      case 'success':
        fill = '#00C851';
        break;
      case 'info':
        fill = '#33B5E5';
        break;
      default:
        break;
    }
    const opts = {
      // DOM id should always begin with a letter, so we add a prefix
      id: `node-${incident._id}`,
      x1: incident.x1,
      x2: incident.x2,
      y1: incident.y1,
      f: fill,
      o: 0.5,
      meta: {
        // this could be any extra metadata from your database...
        type: incident.type
      },
    };
    return new RectNode(plot, opts);
  }

}


module.exports = RectNode;
