const d3 = require('d3');

import Node from './Node';


const MINIMUM_MARKER_WIDTH = 10;
const MINIMUM_MARKER_HEIGHT = 10;

class RectNode extends Node {
  /**
   * RectNode - a rectangular node
   *
   * @param {object} plot - an instance of a plot
   * @param {object} options - the options used to construct the plot
   * @param {number} options.x1 - the value for x1 position
   * @param {number} options.x2 - the value for x2 position
   * @param {number} options.y1 - the value for y1 position
   * @param {number} options.height - the value for the height
   * @param {string} options.fill - the fill of the marker
   * @param {number} options.opacity - the opacity of the marker
   * @param {object} options.meta - the optional meta data associated with the marker (e.g. used in the Tooltip)
   * @return {object} this
   */
  constructor(plot, options) {
    super(options);
    this.plot = plot;
    this.x1 = options.x1;
    this.x2 = options.x2;
    this.y1 = options.y1;
    this.height = options.height || 10;
    this.fill = options.fill || '#345e7e';
    this.opacity = options.opacity || 0.4;
    this.style = options.style || 'd3cf-node';
    return this;
  }

  /**
  * update - updates one or more elements within the RectNode SVG group
  *
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
      let height = this.height;
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
      let height = this.height;
      if (height < MINIMUM_MARKER_HEIGHT) {
        height = MINIMUM_MARKER_HEIGHT;
      }
      return height;
    }).style('fill', () => {
      return this.fill;
    }).style('opacity', () => {
      return this.opacity;
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
      let height = this.height;
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
      let height = this.height;
      if (height < MINIMUM_MARKER_HEIGHT) {
        height = MINIMUM_MARKER_HEIGHT;
      }
      return height;
    });

    // remove
    rect.exit().remove();
    return this;
  }
}


module.exports = RectNode;
