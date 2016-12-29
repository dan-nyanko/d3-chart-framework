const d3 = require('d3');
const _ = require('underscore');
const moment = require('moment');

import Grid from './Grid';

/*
* getDatetimeUnit - determine the unit of time for padding the axis
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
  /*
  * Axes
  * constructs 2d cartesian axes, appends to the container SVG element of the plot
  * @param {object} plot, the plot to append the axis
  * @param {object} options, the properties for the axis
  * @param {boolean} grid, should the grid be displayed?
  * X axis properties
  * @param {object} options.axes.x, the properties for x axis
  * @param {string} options.axes.x.title, the title of the x axis
  * @param {string} options.axes.x.type, the datatype of the x axis {numeric, datetime}
  * Y axis properties
  * @param {object} options.axes.y, the properties for y axis
  * @param {string} options.axes.y.title, the title of the y axis
  * @param {string} options.axes.y.type, the datatype of the y axis {numeric, datetime}
  * @returns {object} this, returns self
  * example usage:
  *  with an instance of a plot:
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
  constructor(plot, options) {
    this.plot = plot;
    this.options = options || {x: {title: 'x', type: 'numeric'}, y: {title: 'y', type: 'numeric'}, grid: true, filter: true};
    this.initialized = false;
    this.initialMinMax = [[0, 0], [0, 0]];
    this.currentMinMax = [[0, 0], [0, 0]];
    this.init();
  }

  /*
  * init - initialize the plot x,y axes
  * @param {array} xDomain, the zoom xDomain or undefined
  * @param {array} yDomain, the zoom yDomain or undefined
  */
  init(xDomain, yDomain) {
    if (this.options.x.type === 'datetime') {
      if (xDomain) {
        this.xScale = d3.scaleTime().domain(xDomain).range([0, this.plot.getWidth()]).nice();
      } else {
        this.xScale = d3.scaleTime().domain(this.currentMinMax[0]).range([0, this.plot.getWidth()]).nice();
      }
    } else {
      if (xDomain) {
        this.xScale = d3.scaleLinear().domain(xDomain).range([0, this.plot.getWidth()]);
      } else {
        this.xScale = d3.scaleLinear().domain(this.currentMinMax[0]).range([0, this.plot.getWidth()]);
      }
    }
    if (this.options.x.type === 'datetime') {
      this.xAxis = d3.axisBottom().scale(this.xScale).ticks(10).tickFormat(d3.timeFormat(this.formatDate()));
    } else {
      this.xAxis = d3.axisBottom().scale(this.xScale).ticks(10);
    }
    if (this.options.x.type === 'datetime') {
      this.xGroup = this.plot.container.append('g').attr('class', 'x d3cf-axis').attr('transform', `translate(${this.plot.margins.left}, ${this.plot.getHeight()})`).call(this.xAxis);
      this.xGroup.selectAll('text').style('text-anchor', 'end').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', () => {
        return 'rotate(-65)';
      });
      this.xGroup.append('text').attr('class', 'd3cf-axis-label').attr('dx', (this.plot.width / 2) - ((this.plot.margins.right + this.plot.margins.left) / 2)).attr('dy', this.plot.margins.bottom + 30).style('text-anchor', 'middle').text(this.options.x.title);
    } else {
      this.xGroup = this.plot.container.append('g').attr('class', 'd3cf-axis').attr('transform', `translate(${this.plot.margins.left}, ${this.plot.getHeight()})`).call(this.xAxis);
      this.xGroup.append('text').attr('dx', (this.plot.width / 2) - ((this.plot.margins.right + this.plot.margins.left) / 2)).attr('dy', this.plot.margins.bottom).attr('class', 'd3cf-axis-label').style('text-anchor', 'middle').text(this.options.x.title);
    }
    if (yDomain) {
      this.yScale = d3.scaleLinear().domain(yDomain).range([this.plot.getHeight(), 0]);
    } else {
      this.yScale = d3.scaleLinear().domain(this.currentMinMax[1]).range([this.plot.getHeight(), 0]);
    }
    this.yAxis = d3.axisLeft().scale(this.yScale);
    this.yGroup = this.plot.container.append('g').attr('class', 'y d3cf-axis').attr('transform', `translate(${this.plot.margins.left}, 0)`).call(this.yAxis);
    this.yGroup.append('text').attr('transform', 'rotate(-90)').attr('dx', -(this.plot.height / 2) + ((this.plot.margins.top + this.plot.margins.bottom) / 2)).attr('dy', -this.plot.margins.left).attr('class', 'd3cf-axis-label').style('text-anchor', 'middle').text(this.options.y.title);
    if (this.options.grid) {
       this.grid = new Grid(this, this.plot);
    }
  }

  /*
  * setDomain - sets the x, y domains based on the passed in data
  * @param {array} data, an array of {object} for each marker
  */
  setDomain(data) {
    let xMin = 0;
    let xMax = 0;
    if (this.options.x.type === 'datetime') {
      xMin = Axes.minDatetime(_.pluck(data, 'x1'));
      const x2 = _.pluck(data, 'x2');
      if (x2.length > 0) {
        xMax = Axes.maxDatetime(_.pluck(data, 'x2'));
      } else {
        xMax = Axes.maxDatetime(_.pluck(data, 'x1'));
      }
    } else {
      const x2 = _.pluck(data, 'x2');
      if (x2.length > 0) {
        xMax = Axes.maxNumeric(_.pluck(data, 'x2'));
      } else {
        xMax = Axes.maxNumeric(_.pluck(data, 'x1'));
      }
    }
    const yMin = 0;
    const yMax = Axes.maxNumeric(_.pluck(data, 'y1'));
    this.xScale.domain([xMin, xMax]);
    this.yScale.domain([yMin, yMax]);
    if (this.initialized === false) {
      this.initialMinMax = [[xMin, xMax], [yMin, yMax]];
      if (this.options.filter) {
        this.plot.addFilter('_domain', (d) => {
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
            if ((d.x1 >= x1 && d.x2 <= x2) && (d.y1 >= y1 && d.y1 <= y2)) {
              return d;
            }
          } else {
            if ((d.x1 >= x1 && d.x2 <= x2) && (d.y1 >= y1 && d.y1 <= y2)) {
              return d;
            }
          }
        });
      }
    } else {
      this.currentMinMax = [[xMin, xMax], [yMin, yMax]];
    }
    this.initialized = true;
  }

  /*
  * setDomain - sets the x, y domains based on the passed in data
  * @note this will overwrite the original x,y minMax options to the plot
  * @param {array} data, an array of {object} for each marker
  */
  setInitialMinMax(newMinMax) {
    this.initialMinMax = newMinMax;
  }

  /*
  * update - update the x,y axes using the zoom domain
  * @param {array} data, an array of {object} for each marker
  */
  update(data) {
    this.remove();
    if (data) {
      this.setDomain(data);
    }
    this.init(this.xScale.domain(), this.yScale.domain());
    return this;
  }

  /*
  * reset - resets the x,y axes back to the original domain
  */
  reset() {
    this.remove();
    this.init(this.initialMinMax[0], this.initialMinMax[1]);
    return this;
  }

  /*
  * zoom - zooms the x,y axes based on the zoomArea object
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
    const trans = this.plot.container.transition().duration(750);
    this.xGroup.transition(trans).call(this.xAxis);
    this.xGroup.selectAll('g').selectAll('text').style('text-anchor', 'end').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', 'rotate(-65)');
    this.yGroup.transition(trans).call(this.yAxis);
    if (this.grid) {
      this.grid.remove();
      this.grid = new Grid(this, this.plot);
    }
    return this;
  }

  /*
  * remove - removes the x,y axis groups from the plot
  */
  remove() {
    this.xGroup.remove();
    this.yGroup.remove();
    if (this.grid) {
      return this.grid.remove();
    }
  }

  /*
  * formatDate - a method that formats the axis date label
  */
  formatDate() {
    const xDomain = this.xScale.domain();
    const duration = moment.duration(moment(xDomain[1]).diff(xDomain[0])).asDays();
    if (duration <= 7) {
      return '%b %d - %H:%M';
    }
    return '%b %d, %Y';
  }

  /*
  * maxNumeric - determine the maximum value with padding. Padding is determined
  * by the number of digits ^ 10 / 10, unless number of digets == 10 then return
  * 10
  * @param {array} data, an array of positive integers
  * @return {number} max
  */
  static maxNumeric(data) {
    const m = _.max(data);
    const l = String(m).split('').length;
    if (l === 1) {
      return 10;
    }
    const p = (Math.pow(10, l)) / 10;
    return m + p;
  }

  /*
  * minNumeric - determine the minimum value with padding. Padding is determined
  * by the number of digits ^ 10 / 10, unless number of digets == 10 then return
  * 10
  * @param {array} data, an array of positive integers
  * @return {number} max
  */
  static minNumeric(data) {
    const m = _.min(data);
    const l = String(m).split('').length;
    if (l === 1) {
      return 10;
    }
    const p = (Math.pow(10, l)) / 10;
    return m + p;
  }

  /*
  * maxDatetime - determine the maximum value with padding
  * @param {array} data, an array of timestamps in milliseconds
  * @return {number} max, maximum datetime value
  */
  static maxDatetime(data) {
    const min = moment(_.min(data));
    const max = moment(_.max(data));
    const unit = getDatetimeUnit(min, max);
    return moment(max).add(1, unit).valueOf();
  }

  /*
  * minDatetime - determine the minimum value with padding
  * @param {array} data, an array of timestamps in milliseconds
  * @return {number} min, minimum datetime value
  */
  static minDatetime(data) {
    const min = moment(_.min(data));
    const max = moment(_.max(data));
    const unit = getDatetimeUnit(min, max);
    return moment(min).subtract(1, unit).valueOf();
  }
}


module.exports = Axes;
