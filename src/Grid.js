const d3 = require('d3');

class Grid {
  /**
   * Grid - constructs grids lines for the plot
   *
   * @param {object} axes - the axes to determine xScale, yScale
   * @param {object} plot - the plot to append the axis
   * @param {object} options - the properties for the axis
   * @returns {object} this
   */
  constructor(axes, plot, options) {
    this.plot = plot;
    this.options = options || {};
    this.axes = axes;
    this.init();
    return this;
  }

  /**
   * init - initialize the x,y grid lines for a plot
   *
   */
  init() {
    this.xGrid = d3.axisBottom().scale(this.axes.xScale).tickFormat('').tickSize((this.plot.getHeight()) * -1, 0, 0);
    this.xGroup = this.plot.container.insert('g', ':first-child').attr('class', 'd3cf-grid').attr('transform', `translate(${this.plot.margins.left}, ${this.plot.getHeight()})`).attr('opacity', null).call(this.xGrid);
    this.yGrid = d3.axisLeft().scale(this.axes.yScale).tickFormat('').tickSize((this.plot.getWidth()) * -1, 0, 0);
    this.yGroup = this.plot.container.insert('g', ':first-child').attr('class', 'd3cf-grid').attr('transform', `translate(${this.plot.margins.left}, 0)`).attr('opacity', null).call(this.yGrid);
  }

  /**
   * remove - removed the grid lines from the plot
   *
   */
  remove() {
    this.xGroup.remove();
    this.yGroup.remove();
  }
}

module.exports = Grid;
