const d3 = require('d3');
const _ = require('underscore');

class Tooltip {
  /*
  * Tooltip - allows for an HTML div to be faded in/out on mouseover of a marker
  * @param {object} plot, the plot append the tooltip
  * @param {object} options, the options for the plot
  * @param {object} options.tooltip, the options for the tooltip
  * @param {number} options.opacity, the opacity of the tooltip
  * @param {object} options.template, an underscore compiled template
  * @return {object} this
  */
  constructor(plot, options) {
    this.tooltipOpts = options.tooltip || {
      'opacity': 1,
      'template': _.template('<span style="font-weight: bold;"><%= obj.id %></span><p>x1: <%= obj.x1 %> x2: <%= obj.x2 %> y: <%= obj.y1 %></p>'),
    };
    this.template = this.tooltipOpts.template || _.template('<span style="font-weight: bold;"><%= obj.id %></span><p>x1: <%= obj.x1 %> x2: <%= obj.x2 %> y: <%= obj.y1 %></p>');
    this.opacity = this.tooltipOpts.opacity || 1;
    this.element = d3.select('body').append('div').attr('class', 'd3cf-tooltip').style('opacity', 0).html(this.template({}));
    return this;
  }

  /*
  * mouseover - unbound method for mouseover event
  * @param {object} d, the data
  * @param {number} x, the x coordinate
  * @param {number} y, the y coordinate
  * @return {object} this
  */
  mouseover(d, x, y) {
    const box = this.element.node().getBoundingClientRect();
    if ((x + box.width) >= (window.innerWidth - 20)) {
      this.element.html(this.template(d)).style('left', `${((x - 10) - Math.floor(box.width))}px`).style('top', `${y}px`);
    } else {
      this.element.html(this.template(d)).style('left', `${(x + 10)}px`).style('top', `${y}px`);
    }
    this.element.transition().duration(200).style('opacity', this.opacity);
    return this;
  }

  /*
  * mouseout - unbound method for mouseout event
  * @return {object} this
  */
  mouseout() {
    this.element.transition().duration(500).style('opacity', 0);
    return this;
  }

  /*
  * remove - removes the element from the DOM
  */
  remove() {
    return this.element.remove();
  }
}

module.exports = Tooltip;
