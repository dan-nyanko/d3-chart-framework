const d3 = require('d3');

import Node from './Node';


class BarNode extends Node {
  /**
   * BarNode - a data point for a path/line generator
   *
   * @param {object} chart - an instance of a chart
   * @param {object} options - the options used to construct the chart
   * @param {string} options.x1 - the category for x1 position
   * @param {number} options.y1 - the value for y1 position
   * @param {string} options.fill - the fill of the bar
   * @param {number} options.opacity - the opacity of the bar
   * @param {object=} options.meta - the optional meta data associated with the circle (e.g. used in the Tooltip)
   * @return {object} this
   */
  constructor(chart, options) {
    super(options);
    this.chart = chart;
    this.x1 = options.x1;
    this.y1 = options.y1;
    this.fill = options.fill || '#345e7e';
    this.opacity = options.opacity || 0;
    this.style = options.style || 'd3cf-node';
    this.meta = options.meta || {};
    return this;
  }

  getFill(type) {
    let fill = '#33B5E5';
    switch (type) {
      case 'info':
        fill = '#33B5E5';
        break;
      case 'success':
        fill = '#00C851';
        break;
      case 'muted':
        fill = '#636c72';
        break;
      case 'primary':
        fill = '#0275d8';
        break;
      case 'warning':
        fill = '#FFBB33';
        break;
      case 'danger':
        fill = '#d9534f';
        break;
      default:
        break;
    }
    return fill;
  }

  /**
  * update - updates one or more elements
  * @returns {object} this
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
      return this.chart.axes.xScale(this.x1);
    }).attr('y', () => {
      return this.chart.axes.yScale(this.y1);
    }).attr('width', () => {
      return this.chart.axes.xScale.bandwidth();
    }).attr('height', () => {
      return this.chart.getHeight() - this.chart.axes.yScale(this.y1);
    }).style('fill', () => {
      return this.getFill(this.x1);
    }).style('opacity', () => {
      return this.opacity;
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
    rect.attr('x', () => {
      return this.chart.axes.xScale(this.x1);
    }).attr('y', () => {
      return this.chart.axes.yScale(this.y1);
    }).attr('width', () => {
      return this.chart.axes.xScale.bandwidth();
    }).attr('height', () => {
      return this.chart.getHeight() - this.chart.axes.yScale(this.y1);
    });
    // remove
    rect.exit().remove();
    return this;
  }
}


module.exports = BarNode;
