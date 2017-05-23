const d3 = require('d3');
const _ = require('underscore');
const moment = require('moment');

import Grid from './Grid';

/**
* getDatetimeUnit - determine the unit of time for padding the axis
*
* @param {object} min, the min moment datetime object
* @param {object} max, the max moment datetime object
* @return {string} the datetime unit {day, week, month}
*/
function getDatetimeUnit(min, max) {
  const diff = max.diff(min, 'days');
  let unit = 'month';
  if (diff <= 14) {
    unit = 'day';
  } else if (diff > 14 && diff <= 183) {
    unit = 'week';
  }
  return unit;
}

class Axes {
  /**
  * Axes
  * constructs 2d cartesian axes, appends to the container SVG element of the chart
  *
  * @param {object} chart - the chart to append the axis
  * @param {object} options - the properties for the axis
  * @param {boolean} grid - should the grid be displayed?
  * X axis properties
  * @param {object} options.axes.x - the properties for x axis
  * @param {string} options.axes.x.title - the title of the x axis
  * @param {string} options.axes.x.type - the datatype of the x axis {numeric, datetime}
  * Y axis properties
  * @param {object} options.axes.y - the properties for y axis
  * @param {string} options.axes.y.title - the title of the y axis
  * @param {string} options.axes.y.type - the datatype of the y axis {numeric, datetime}
  * @returns {object} this - returns self
  * @example usage:
  *  with an instance of a chart:
  ```
  axes = new Axes(plot, {
    axes: {
      grid: true,
      x: {
        title: 'Time',
        type: 'datetime',
        minMax: [1443371126, 1474993537]
      },
      y: {
        title: 'Incidents',
        type: 'numeric',
        minMax: [0, 100]
      },
    }
  })
  ```
  */
  constructor(chart, options) {
    this.chart = chart;
    this.options = options || {x: {title: 'x', type: 'numeric'}, y: {title: 'y', type: 'numeric'}, grid: true, filter: true};
    this.useAutoPadding = options.useAutoPadding || false;
    this.defaultMinMax = [[0, 0], [0, 0]];
    this.draw();
  }

  /**
  * init - initialize the plot x,y axes
  *
  * @param {array=} xDomain - the zoom xDomain or undefined
  * @param {array=} yDomain - the zoom yDomain or undefined
  */
  draw(xDomain, yDomain) {
    if (this.options.x.type === 'datetime') {
      if (xDomain) {
        this.xScale = d3.scaleTime().domain(xDomain).range([0, this.chart.getWidth()]).nice();
      } else {
        this.xScale = d3.scaleTime().domain(this.defaultMinMax[0]).range([0, this.chart.getWidth()]).nice();
      }
    } else if (this.options.x.type === 'band') {
      if (xDomain) {
        this.xScale = d3.scaleBand().domain(['info', 'success', 'muted', 'primary', 'warning', 'danger']).rangeRound([0, this.chart.getWidth()]).padding(0.1);
      } else {
        this.xScale = d3.scaleBand().rangeRound([0, this.chart.getWidth()]).padding(0.1);
      }
    } else {
      if (xDomain) {
        this.xScale = d3.scaleLinear().domain(xDomain).range([0, this.chart.getWidth()]);
      } else {
        this.xScale = d3.scaleLinear().domain(this.defaultMinMax[0]).range([0, this.chart.getWidth()]);
      }
    }
    if (this.options.x.type === 'datetime') {
      this.xAxis = d3.axisBottom().scale(this.xScale).ticks(10).tickFormat(d3.timeFormat(this.formatDate()));
    } else if (this.options.x.type === 'band') {
      this.xAxis = d3.axisBottom().scale(this.xScale);
    } else {
      this.xAxis = d3.axisBottom().scale(this.xScale).ticks(10);
    }
    if (this.options.x.type === 'datetime') {
      this.xGroup = this.chart.container.append('g').attr('class', 'x d3cf-axis').attr('transform', `translate(${this.chart.margins.left}, ${this.chart.getHeight()})`).call(this.xAxis);
      this.xGroup.selectAll('text').style('text-anchor', 'end').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', () => {
        return 'rotate(-65)';
      });
    } else {
      this.xGroup = this.chart.container.append('g').attr('class', 'x d3cf-axis').attr('transform', `translate(${this.chart.margins.left}, ${this.chart.getHeight()})`).call(this.xAxis);
    }

    if (yDomain) {
      this.yScale = d3.scaleLinear().domain(yDomain).range([this.chart.getHeight(), 0]);
    } else {
      this.yScale = d3.scaleLinear().domain(this.defaultMinMax[1]).range([this.chart.getHeight(), 0]);
    }
    this.yAxis = d3.axisLeft().scale(this.yScale);
    this.yGroup = this.chart.container.append('g').attr('class', 'y d3cf-axis').attr('transform', `translate(${this.chart.margins.left}, 0)`).call(this.yAxis);
    if (this.options.grid) {
       this.grid = new Grid(this, this.chart);
    }

    let padding = 0;
    if (this.options.x.type === 'datetime') {
      padding = 45;
    }

    if (this.xLabel) {
      // update
      this.xLabel
        .attr('dx', (this.chart.width / 2) - ((this.chart.margins.right + this.chart.margins.left) / 2))
        .attr('dy', this.chart.margins.bottom);
    } else {
      // add
      this.xLabel = this.chart.container
        .append('g')
          .attr('class', 'x d3cf-axis-label')
          .attr('transform', `translate(${this.chart.margins.left}, ${this.chart.getHeight() + padding})`)
        .append('text')
          .attr('dx', (this.chart.width / 2) - ((this.chart.margins.right + this.chart.margins.left) / 2))
          .attr('dy', this.chart.margins.bottom)
          .attr('class', 'd3cf-axis-label')
          .style('text-anchor', 'middle')
          .text(() => {
            return this.options.x.title || '';
          });
    }
    if (this.yLabel) {
      // update
      this.yLabel
        .attr('dx', -(this.chart.height / 2) + ((this.chart.margins.top + this.chart.margins.bottom) / 2))
        .attr('dy', -this.chart.margins.left);
    } else {
      // add
      this.yLabel = this.chart.container
        .append('g')
          .attr('class', 'y d3cf-axis-label')
          .attr('transform', `translate(${this.chart.margins.left}, 0)`)
        .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('dx', -(this.chart.height / 2) + ((this.chart.margins.top + this.chart.margins.bottom) / 2))
          .attr('dy', -this.chart.margins.left)
          .attr('class', 'd3cf-axis-label')
          .style('text-anchor', 'middle')
          .text(() => {
            return this.options.y.title;
          });
    }
  }

  /**
  * setDomain - sets the x, y domains based on the current chart data
  *
  */
  setDomain() {
    const minMax = this.calcMinMax(false);
    this.xScale.domain(minMax[0]);
    this.yScale.domain(minMax[1]);
    if (this.options.filter) {
      this.chart.removeFilter('_domain').addFilter('_domain', (d) => {
        // TODO: should this scope be the Plot or the Axes?
        let x1 = this.xScale.domain()[0];
        if (x1 instanceof Date) {
          x1 = x1.getTime();
        }
        let x2 = this.xScale.domain()[1];
        if (x2 instanceof Date) {
          x2 = x2.getTime();
        }
        const y1 = this.yScale.domain()[0];
        const y2 = this.yScale.domain()[1];
        if (d.hasOwnProperty('x2')) {
          if ((Math.floor(d.x1) >= x1 && Math.floor(d.x2) <= x2) && (Math.floor(d.y1) >= y1 && Math.floor(d.y1) <= y2)) {
            return d;
          }
        } else {
          if ((Math.floor(d.x1) >= x1) && (Math.floor(d.y1) >= y1 && Math.floor(d.y1) <= y2)) {
            return d;
          }
        }
      });
    }
  }

  /**
  * update - update the x,y axes using the zoom domain
  *
  * @param {array} data - an array of {object} for each marker
  * @param {boolean} shouldSetDomain - should the domain be set to data bounds
  * @return {object} this
  */
  update(data, shouldSetDomain) {
    this.remove();
    if (data && shouldSetDomain) {
      this.setDomain(data);
    }
    this.draw(this.xScale.domain(), this.yScale.domain());
    return this;
  }

  /**
  * the minMax for all nodes without the domain filters
  *
  * @param {boolean} shouldFilterDomain
  * @return {array} minMax
  */
  calcMinMax(shouldFilterDomain) {
      const data = this.chart.getGroupsNodes(shouldFilterDomain);
      if (data.length === 0) {
          return [[0, 0], [0, 0]];
      }
      let xMin = 0;
      let xMax = 0;
      if (this.options.x.type === 'datetime') {
        const x1 = _.pluck(data, 'x1');
        const x2 = _.pluck(data, 'x2');
        xMin = Axes.minDatetime(x1, this.useAutoPadding);
        xMax = xMin;
        if (x2.length > 0) {
          xMax = Axes.maxDatetime(x2, this.useAutoPadding);
        }
        if (isNaN(xMax)) {
          xMax = Axes.maxDatetime(x1, this.useAutoPadding);
        }
      } else {
        const x1 = _.pluck(data, 'x1');
        const x2 = _.pluck(data, 'x2');
        xMin = Axes.minNumeric(x1, this.useAutoPadding);
        xMax = xMin;
        if (x2.length > 0) {
          xMax = Axes.maxNumeric(x2, this.useAutoPadding);
        }
        if (isNaN(xMax)) {
          xMax = Axes.maxNumeric(x1, this.useAutoPadding);
        }
      }
      const yMin = 0;
      const yMax = Axes.maxNumeric(_.pluck(data, 'y1'), this.useAutoPadding);
      return [[xMin, xMax], [yMin, yMax]];
  }

  /**
  * reset - resets the x,y axes back to the original domain
  *
  */
  reset() {
    const minMax = this.calcMinMax(false);
    if (minMax[0][0] === 0 && minMax[0][1] === 0 && minMax[1][0] === 0 && minMax[1][1] === 0) {
        return;
    }
    this.remove();
    this.draw(minMax[0], minMax[1]);
    return this;
  }

  /**
  * zoom - zooms the x, y axes based on the zoomArea object
  *
  * @param {object} zoomArea, an object containing a bounding box of x,y coordinates
  */
  zoom(zoomArea) {
    if (zoomArea.x1 > zoomArea.x2) {
      this.xScale.domain([zoomArea.x2, zoomArea.x1]);
    } else {
      this.xScale.domain([zoomArea.x1, zoomArea.x2]);
    }
    if (this.options.x.type === 'datetime') {
      this.xAxis.tickFormat(d3.timeFormat(this.formatDate()));
    }
    if (zoomArea.y1 > zoomArea.y2) {
      this.yScale.domain([zoomArea.y2, zoomArea.y1]);
    } else {
      this.yScale.domain([zoomArea.y1, zoomArea.y2]);
    }
    const trans = this.chart.container.transition().duration(750);
    this.xGroup.transition(trans).call(this.xAxis);
    this.xGroup.selectAll('g').selectAll('text').style('text-anchor', 'end').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', 'rotate(-65)');
    this.yGroup.transition(trans).call(this.yAxis);
    if (this.grid) {
      this.grid.remove();
      this.grid = new Grid(this, this.chart);
    }
    return this;
  }

  /**
  * remove - removes the x,y axis groups from the plot
  *
  */
  remove() {
    this.xGroup.remove();
    this.yGroup.remove();
    if (this.grid) {
      return this.grid.remove();
    }
  }

  /**
  * formatDate - a method that formats the axis date label
  *
  */
  formatDate() {
    const xDomain = this.xScale.domain();
    const duration = moment.duration(moment(xDomain[1]).diff(xDomain[0])).asDays();
    if (duration <= 7) {
      return '%b %d - %H:%M';
    }
    return '%b %d, %Y';
  }

  /**
  * maxNumeric - determine the maximum value with padding. Padding is determined
  * by the number of digits ^ 10 / 10, unless number of digets == 10 then return
  * 10
  *
  * @param {array} data - an array of positive integers
  * @return {number} max
  */
  static maxNumeric(data, useAutoPadding) {
    const m = Math.floor(_.max(data));
    if (useAutoPadding) {
      const l = String(m).split('').length;
      if (l === 1) {
        return 10;
      }
      const p = (Math.pow(10, l)) / 10;
      return m + p;
    }
    return Math.ceil(m);
  }

  /**
  * minNumeric - determine the minimum value with padding. Padding is determined
  * by the number of digits ^ 10 / 10, unless number of digets == 10 then return
  * 10
  *
  * @param {array} data - an array of positive integers
  * @return {number} max
  */
  static minNumeric(data, useAutoPadding) {
    const m = Math.floor(_.min(data));
    if (useAutoPadding) {
      const l = String(m).split('').length;
      if (l === 1) {
        return 10;
      }
      const p = (Math.pow(10, l)) / 10;
      return m + p;
    }
    return Math.ceil(m);
  }

  /**
  * maxDatetime - determine the maximum value with padding
  *
  * @param {array} data - an array of timestamps in milliseconds
  * @return {number} max - maximum datetime value
  */
  static maxDatetime(data, useAutoPadding) {
    const max = moment(_.max(data));
    if (useAutoPadding) {
      const min = moment(_.min(data));
      const unit = getDatetimeUnit(min, max);
      return moment(max).add(1, unit).valueOf();
    }
    return max.valueOf();
  }

  /**
  * minDatetime - determine the minimum value with padding
  *
  * @param {array} data - an array of timestamps in milliseconds
  * @return {number} min - minimum datetime value
  */
  static minDatetime(data, useAutoPadding) {
    const min = moment(_.min(data));
    if (useAutoPadding) {
      const max = moment(_.max(data));
      const unit = getDatetimeUnit(min, max);
      return moment(min).subtract(1, unit).valueOf();
    }
    return min.valueOf();
  }
}


module.exports = Axes;
