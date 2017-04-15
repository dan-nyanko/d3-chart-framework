const d3 = require('d3');

import Node from './Node';


class LineNode extends Node {
  /*
  * LineNode - a data point for a path/line generator
  * @param {object} chart, an instance of a chart
  * @param {object} options, the options used to construct the plot
  * @param {number} options.x1, the value for x1 position
  * @param {number} options.y1, the value for y1 position
  * @param {string} options.r, the radius of the circle
  * @param {number} options.o, the opacity of the cirle
  * @param {object} options.meta, the optional meta data associated with the circle (e.g. used in the Tooltip)
  * @return {object} this
  */
  constructor(chart, options) {
    super(options);
    this.chart = chart;
    this.x1 = options.x1;
    this.y1 = options.y1;
    this.r = options.r || 3;
    this.o = options.o || 0;
    this.style = options.style || 'd3cf-node';
    this.meta = options.meta || {};
    return this;
  }

  getFill(type) {
    let fill = '#33B5E';
    switch (type) {
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
    return fill;
  }

  /*
  * update - updates one or more elements
  */
  update() {
    if (typeof this.group === 'undefined') {
      this.group = d3.select(`#${this.id}`);
    }
    /*
    * Each node of the line's `path` (see LineGroup) is a transparent circle in
    * order to have a mouseover event.
    * @see https://groups.google.com/forum/#!topic/d3-js/gHzOj91X2NA
    */
    // select
    const circle = this.group.selectAll('circle').data([this], (d) => {
      return d.id;
    });
    // create
    circle.enter().append('circle')
      .attr('class', this.style)
      .attr('cx', () => {
        return this.chart.axes.xScale(this.x1);
      }).attr('cy', () => {
        return this.chart.axes.yScale(this.y1);
      }).attr('r', () => {
        return this.r;
      }).attr('opacity', () => {
        return this.o;
      }).on('mouseover', () => {
        if (this.chart.tooltip) {
          return this.chart.tooltip.mouseover(this, d3.event.pageX, d3.event.pageY);
        }
      }).on('mouseout', () => {
        if (this.chart.tooltip) {
          return this.chart.tooltip.mouseout();
        }
      });
    // update
    circle.attr('cx', () => {
      return this.chart.axes.xScale(this.x1);
    }).attr('cy', () => {
      return this.chart.axes.yScale(this.y1);
    }).attr('r', () => {
      return this.r;
    }).attr('opacity', () => {
      return this.o;
    });
    // remove
    circle.exit().remove();
    return this;
  }

}


module.exports = LineNode;
