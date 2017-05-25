(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"), require("underscore"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define("d3-chart-framework", ["d3", "underscore", "moment"], factory);
	else if(typeof exports === 'object')
		exports["d3-chart-framework"] = factory(require("d3"), require("underscore"), require("moment"));
	else
		root["d3-chart-framework"] = factory(root["d3"], root["underscore"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Axes = __webpack_require__(1);
	
	Object.defineProperty(exports, 'Axes', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Axes).default;
	  }
	});
	
	var _Errors = __webpack_require__(6);
	
	Object.defineProperty(exports, 'InvalidNodeError', {
	  enumerable: true,
	  get: function get() {
	    return _Errors.InvalidNodeError;
	  }
	});
	Object.defineProperty(exports, 'InvalidGroupError', {
	  enumerable: true,
	  get: function get() {
	    return _Errors.InvalidGroupError;
	  }
	});
	
	var _Grid = __webpack_require__(2);
	
	Object.defineProperty(exports, 'Grid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Grid).default;
	  }
	});
	
	var _Group = __webpack_require__(7);
	
	Object.defineProperty(exports, 'Group', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Group).default;
	  }
	});
	
	var _BarGroup = __webpack_require__(9);
	
	Object.defineProperty(exports, 'BarGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BarGroup).default;
	  }
	});
	
	var _LineGroup = __webpack_require__(10);
	
	Object.defineProperty(exports, 'LineGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LineGroup).default;
	  }
	});
	
	var _NodeGroup = __webpack_require__(11);
	
	Object.defineProperty(exports, 'NodeGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_NodeGroup).default;
	  }
	});
	
	var _Node = __webpack_require__(8);
	
	Object.defineProperty(exports, 'Node', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Node).default;
	  }
	});
	
	var _BarNode = __webpack_require__(12);
	
	Object.defineProperty(exports, 'BarNode', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BarNode).default;
	  }
	});
	
	var _LineNode = __webpack_require__(13);
	
	Object.defineProperty(exports, 'LineNode', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LineNode).default;
	  }
	});
	
	var _RectNode = __webpack_require__(14);
	
	Object.defineProperty(exports, 'RectNode', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_RectNode).default;
	  }
	});
	
	var _SegmentNode = __webpack_require__(15);
	
	Object.defineProperty(exports, 'SegmentNode', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SegmentNode).default;
	  }
	});
	
	var _Chart = __webpack_require__(16);
	
	Object.defineProperty(exports, 'Chart', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Chart).default;
	  }
	});
	
	var _BarChart = __webpack_require__(19);
	
	Object.defineProperty(exports, 'BarChart', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_BarChart).default;
	  }
	});
	
	var _ScatterPlot = __webpack_require__(20);
	
	Object.defineProperty(exports, 'ScatterPlot', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ScatterPlot).default;
	  }
	});
	
	var _LineChart = __webpack_require__(21);
	
	Object.defineProperty(exports, 'LineChart', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_LineChart).default;
	  }
	});
	
	var _Tooltip = __webpack_require__(17);
	
	Object.defineProperty(exports, 'Tooltip', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Tooltip).default;
	  }
	});
	
	var _Zoom = __webpack_require__(18);
	
	Object.defineProperty(exports, 'Zoom', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Zoom).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Grid = __webpack_require__(2);
	
	var _Grid2 = _interopRequireDefault(_Grid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	var _ = __webpack_require__(4);
	var moment = __webpack_require__(5);
	
	/**
	* getDatetimeUnit - determine the unit of time for padding the axis
	*
	* @param {object} min, the min moment datetime object
	* @param {object} max, the max moment datetime object
	* @return {string} the datetime unit {day, week, month}
	*/
	function getDatetimeUnit(min, max) {
	  var diff = max.diff(min, 'days');
	  var unit = 'month';
	  if (diff <= 14) {
	    unit = 'day';
	  } else if (diff > 14 && diff <= 183) {
	    unit = 'week';
	  }
	  return unit;
	}
	
	var Axes = function () {
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
	  function Axes(chart, options) {
	    _classCallCheck(this, Axes);
	
	    this.chart = chart;
	    this.options = options || { x: { title: 'x', type: 'numeric' }, y: { title: 'y', type: 'numeric' }, grid: true, filter: true };
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
	
	
	  _createClass(Axes, [{
	    key: 'draw',
	    value: function draw(xDomain, yDomain) {
	      var _this = this;
	
	      if (this.options.x.type === 'datetime') {
	        if (xDomain) {
	          this.xScale = d3.scaleTime().domain(xDomain).range([0, this.chart.getWidth()]).nice();
	        } else {
	          this.xScale = d3.scaleTime().domain(this.defaultMinMax[0]).range([0, this.chart.getWidth()]).nice();
	        }
	      } else if (this.options.x.type === 'band') {
	        if (xDomain) {
	          this.xScale = d3.scaleBand().domain(xDomain).rangeRound([0, this.chart.getWidth()]).padding(0.1);
	        } else {
	          this.xScale = d3.scaleBand().domain(['']).rangeRound([0, this.chart.getWidth()]).padding(0.1);
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
	        this.xGroup = this.chart.container.append('g').attr('class', 'x d3cf-axis').attr('transform', 'translate(' + this.chart.margins.left + ', ' + this.chart.getHeight() + ')').call(this.xAxis);
	        this.xGroup.selectAll('text').style('text-anchor', 'end').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', function () {
	          return 'rotate(-65)';
	        });
	      } else {
	        this.xGroup = this.chart.container.append('g').attr('class', 'x d3cf-axis').attr('transform', 'translate(' + this.chart.margins.left + ', ' + this.chart.getHeight() + ')').call(this.xAxis);
	      }
	
	      if (yDomain) {
	        this.yScale = d3.scaleLinear().domain(yDomain).range([this.chart.getHeight(), 0]);
	      } else {
	        this.yScale = d3.scaleLinear().domain(this.defaultMinMax[1]).range([this.chart.getHeight(), 0]);
	      }
	      this.yAxis = d3.axisLeft().scale(this.yScale);
	      this.yGroup = this.chart.container.append('g').attr('class', 'y d3cf-axis').attr('transform', 'translate(' + this.chart.margins.left + ', 0)').call(this.yAxis);
	      if (this.options.grid) {
	        this.grid = new _Grid2.default(this, this.chart);
	      }
	
	      var padding = 0;
	      if (this.options.x.type === 'datetime') {
	        padding = 45;
	      }
	
	      if (this.xLabel) {
	        // update
	        this.xLabel.attr('dx', this.chart.width / 2 - (this.chart.margins.right + this.chart.margins.left) / 2).attr('dy', this.chart.margins.bottom);
	      } else {
	        // add
	        this.xLabel = this.chart.container.append('g').attr('class', 'x d3cf-axis-label').attr('transform', 'translate(' + this.chart.margins.left + ', ' + (this.chart.getHeight() + padding) + ')').append('text').attr('dx', this.chart.width / 2 - (this.chart.margins.right + this.chart.margins.left) / 2).attr('dy', this.chart.margins.bottom).attr('class', 'd3cf-axis-label').style('text-anchor', 'middle').text(function () {
	          return _this.options.x.title || '';
	        });
	      }
	      if (this.yLabel) {
	        // update
	        this.yLabel.attr('dx', -(this.chart.height / 2) + (this.chart.margins.top + this.chart.margins.bottom) / 2).attr('dy', -this.chart.margins.left);
	      } else {
	        // add
	        this.yLabel = this.chart.container.append('g').attr('class', 'y d3cf-axis-label').attr('transform', 'translate(' + this.chart.margins.left + ', 0)').append('text').attr('transform', 'rotate(-90)').attr('dx', -(this.chart.height / 2) + (this.chart.margins.top + this.chart.margins.bottom) / 2).attr('dy', -this.chart.margins.left).attr('class', 'd3cf-axis-label').style('text-anchor', 'middle').text(function () {
	          return _this.options.y.title;
	        });
	      }
	    }
	
	    /**
	    * setDomain - sets the x, y domains based on the current chart data
	    *
	    */
	
	  }, {
	    key: 'setDomain',
	    value: function setDomain() {
	      var _this2 = this;
	
	      var minMax = this.calcMinMax(false);
	      this.xScale.domain(minMax[0]);
	      this.yScale.domain(minMax[1]);
	      if (this.options.filter) {
	        this.chart.removeFilter('_domain').addFilter('_domain', function (d) {
	          if (_this2.options.x.type === 'band') return d;
	          // TODO: should this scope be the Chart/Plot or the Axes?
	          var x1 = _this2.xScale.domain()[0];
	          if (x1 instanceof Date) {
	            x1 = x1.getTime();
	          }
	          var x2 = _this2.xScale.domain()[1];
	          if (x2 instanceof Date) {
	            x2 = x2.getTime();
	          }
	          var y1 = _this2.yScale.domain()[0];
	          var y2 = _this2.yScale.domain()[1];
	          if (d.hasOwnProperty('x2')) {
	            if (Math.floor(d.x1) >= x1 && Math.floor(d.x2) <= x2 && Math.floor(d.y1) >= y1 && Math.floor(d.y1) <= y2) {
	              return d;
	            }
	          } else {
	            if (Math.floor(d.x1) >= x1 && Math.floor(d.y1) >= y1 && Math.floor(d.y1) <= y2) {
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
	
	  }, {
	    key: 'update',
	    value: function update(data, shouldSetDomain) {
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
	
	  }, {
	    key: 'calcMinMax',
	    value: function calcMinMax(shouldFilterDomain) {
	      var data = this.chart.getGroupsNodes(shouldFilterDomain);
	      if (data.length === 0) {
	        if (this.options.x.type === 'band') {
	          return [[''], [0, 0]];
	        }
	        return [[0, 0], [0, 0]];
	      }
	      var xMin = 0;
	      var xMax = 0;
	      if (this.options.x.type === 'datetime') {
	        var x1 = _.pluck(data, 'x1');
	        var x2 = _.pluck(data, 'x2');
	        xMin = Axes.minDatetime(x1, this.useAutoPadding);
	        xMax = xMin;
	        if (x2.length > 0) {
	          xMax = Axes.maxDatetime(x2, this.useAutoPadding);
	        }
	        if (isNaN(xMax)) {
	          xMax = Axes.maxDatetime(x1, this.useAutoPadding);
	        }
	      } else if (this.options.x.type === 'band') {
	        xMin = _.pluck(data, 'x1');
	      } else {
	        var _x = _.pluck(data, 'x1');
	        var _x2 = _.pluck(data, 'x2');
	        xMin = Axes.minNumeric(_x, this.useAutoPadding);
	        xMax = xMin;
	        if (_x2.length > 0) {
	          xMax = Axes.maxNumeric(_x2, this.useAutoPadding);
	        }
	        if (isNaN(xMax)) {
	          xMax = Axes.maxNumeric(_x, this.useAutoPadding);
	        }
	      }
	      var yMin = 0;
	      var yMax = Axes.maxNumeric(_.pluck(data, 'y1'), this.useAutoPadding);
	      if (this.options.x.type === 'band') {
	        return [xMin, [yMin, yMax]];
	      }
	      return [[xMin, xMax], [yMin, yMax]];
	    }
	
	    /**
	    * reset - resets the x,y axes back to the original domain
	    *
	    */
	
	  }, {
	    key: 'reset',
	    value: function reset() {
	      var minMax = this.calcMinMax(false);
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
	
	  }, {
	    key: 'zoom',
	    value: function zoom(zoomArea) {
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
	      var trans = this.chart.container.transition().duration(750);
	      this.xGroup.transition(trans).call(this.xAxis);
	      this.xGroup.selectAll('g').selectAll('text').style('text-anchor', 'end').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', 'rotate(-65)');
	      this.yGroup.transition(trans).call(this.yAxis);
	      if (this.grid) {
	        this.grid.remove();
	        this.grid = new _Grid2.default(this, this.chart);
	      }
	      return this;
	    }
	
	    /**
	    * remove - removes the x,y axis groups from the plot
	    *
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
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
	
	  }, {
	    key: 'formatDate',
	    value: function formatDate() {
	      var xDomain = this.xScale.domain();
	      var duration = moment.duration(moment(xDomain[1]).diff(xDomain[0])).asDays();
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
	
	  }], [{
	    key: 'maxNumeric',
	    value: function maxNumeric(data, useAutoPadding) {
	      var m = Math.floor(_.max(data));
	      if (useAutoPadding) {
	        var l = String(m).split('').length;
	        if (l === 1) {
	          return 10;
	        }
	        var p = Math.pow(10, l) / 10;
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
	
	  }, {
	    key: 'minNumeric',
	    value: function minNumeric(data, useAutoPadding) {
	      var m = Math.floor(_.min(data));
	      if (useAutoPadding) {
	        var l = String(m).split('').length;
	        if (l === 1) {
	          return 10;
	        }
	        var p = Math.pow(10, l) / 10;
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
	
	  }, {
	    key: 'maxDatetime',
	    value: function maxDatetime(data, useAutoPadding) {
	      var max = moment(_.max(data));
	      if (useAutoPadding) {
	        var min = moment(_.min(data));
	        var unit = getDatetimeUnit(min, max);
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
	
	  }, {
	    key: 'minDatetime',
	    value: function minDatetime(data, useAutoPadding) {
	      var min = moment(_.min(data));
	      if (useAutoPadding) {
	        var max = moment(_.max(data));
	        var unit = getDatetimeUnit(min, max);
	        return moment(min).subtract(1, unit).valueOf();
	      }
	      return min.valueOf();
	    }
	  }]);
	
	  return Axes;
	}();
	
	module.exports = Axes;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	
	var Grid = function () {
	  /**
	  * Grid - constructs grids lines for the plot
	  *
	  * @param {object} axes - the axes to determine xScale, yScale
	  * @param {object} plot - the plot to append the axis
	  * @param {object} options - the properties for the axis
	  * @returns {object} this
	  */
	  function Grid(axes, plot, options) {
	    _classCallCheck(this, Grid);
	
	    this.plot = plot;
	    this.options = options || {};
	    this.axes = axes;
	    this.init();
	    return this;
	  }
	
	  /*
	  * init - initialize the x,y grid lines for a plot
	  *
	  */
	
	
	  _createClass(Grid, [{
	    key: 'init',
	    value: function init() {
	      this.xGrid = d3.axisBottom().scale(this.axes.xScale).tickFormat('').tickSize(this.plot.getHeight() * -1, 0, 0);
	      this.xGroup = this.plot.container.insert('g', ':first-child').attr('class', 'd3cf-grid').attr('transform', 'translate(' + this.plot.margins.left + ', ' + this.plot.getHeight() + ')').attr('opacity', null).call(this.xGrid);
	      this.yGrid = d3.axisLeft().scale(this.axes.yScale).tickFormat('').tickSize(this.plot.getWidth() * -1, 0, 0);
	      this.yGroup = this.plot.container.insert('g', ':first-child').attr('class', 'd3cf-grid').attr('transform', 'translate(' + this.plot.margins.left + ', 0)').attr('opacity', null).call(this.yGrid);
	    }
	
	    /*
	    * remove - removed the grid lines from the plot
	    *
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.xGroup.remove();
	      this.yGroup.remove();
	    }
	  }]);
	
	  return Grid;
	}();
	
	module.exports = Grid;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	* InvalidNodeError - error thrown when an object is not instanceof Node
	*
	* @param {string} [message] - (optional) the message to the user
	*/
	var InvalidNodeError = exports.InvalidNodeError = function (_Error) {
	  _inherits(InvalidNodeError, _Error);
	
	  function InvalidNodeError(message) {
	    _classCallCheck(this, InvalidNodeError);
	
	    var message_ = message || 'Is not instanceof Node.';
	    return _possibleConstructorReturn(this, (InvalidNodeError.__proto__ || Object.getPrototypeOf(InvalidNodeError)).call(this, message_));
	  }
	
	  return InvalidNodeError;
	}(Error);
	
	/**
	* InvalidGroupError - error thrown when an object is not instanceof Group
	*
	* @param {string} [message] - (optional) the message to the user
	*/
	
	
	var InvalidGroupError = exports.InvalidGroupError = function (_Error2) {
	  _inherits(InvalidGroupError, _Error2);
	
	  function InvalidGroupError(message) {
	    _classCallCheck(this, InvalidGroupError);
	
	    var message_ = message || 'Is not instanceof Group.';
	    return _possibleConstructorReturn(this, (InvalidGroupError.__proto__ || Object.getPrototypeOf(InvalidGroupError)).call(this, message_));
	  }
	
	  return InvalidGroupError;
	}(Error);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Node = __webpack_require__(8);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Errors = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	var _ = __webpack_require__(4);
	
	function genId() {
	  var length = 9;
	  var prefix = 'group-';
	  return prefix + Math.random().toString(36).substr(2, length);
	}
	
	var Group = function () {
	  function Group(chart, options) {
	    _classCallCheck(this, Group);
	
	    this.options = options || {};
	    this.id = this.options.id || genId();
	    var onEnter = this.options.onEnter || Group.onEnter;
	    this.onEnter = _.bind(onEnter, this);
	    var onUpdate = this.options.onUpdate || Group.onUpdate;
	    this.onUpdate = _.bind(onUpdate, this);
	    var onExit = this.options.onExit || Group.onExit;
	    this.onExit = _.bind(onExit, this);
	    this.nodes_ = {};
	    this.chart = chart;
	    return this;
	  }
	
	  /**
	  * size - returns the size of the Group's nodes
	  *
	  * @return {number} size - the size of the group
	  */
	
	
	  _createClass(Group, [{
	    key: 'size',
	    value: function size() {
	      return Object.values(this.nodes_).length;
	    }
	
	    /**
	    * addNode - adds a node to this group
	    *
	    * @param {object} node - the node to add
	    * @throws {InvalidGroupError} error
	    * @return {Group} this
	    */
	
	  }, {
	    key: 'addNode',
	    value: function addNode(node) {
	      if (typeof node === 'undefined' || !node instanceof _Node2.default) {
	        throw new _Errors.InvalidNodeError();
	      }
	      this.nodes_[node.id] = node;
	      return this;
	    }
	
	    /**
	    * removeNode - removes a node from this group
	    *
	    * @param {string} id - the id to remove
	    * @return {object} this
	    */
	
	  }, {
	    key: 'removeNode',
	    value: function removeNode(id) {
	      if (this.nodes_.hasOwnProperty(id)) {
	        delete this.nodes_[id];
	      }
	      return this;
	    }
	
	    /**
	    * getNodes - returns the nodes associated with this group
	    *
	    * @return {array} nodes - the nodes associated with this group
	    */
	
	  }, {
	    key: 'getNodes',
	    value: function getNodes() {
	      return Object.values(this.nodes_);
	    }
	
	    /**
	    * update - handles updating the marker
	    *
	    * @return {object} this
	    */
	
	  }, {
	    key: 'update',
	    value: function update() {
	      throw new Error('Update must be implemented.');
	    }
	
	    /**
	    * detached - builds a detached svg group and returns the node
	    *
	    * @return {object} node - the SVG node to append to the parent during .call()
	    */
	
	  }, {
	    key: 'detached',
	    value: function detached() {
	      this.remove();
	      this.group = d3.select(document.createElementNS(d3.namespaces.svg, 'g')).attr('id', this.id).attr('class', 'd3cf-group').remove();
	      this.update();
	      return this.group.node();
	    }
	
	    /**
	    * remove - removes the group from the DOM
	    *
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      if (this.group) {
	        this.group.remove();
	      }
	    }
	
	    /**
	    * destroy - destroys the group and any associated elements
	    *
	    */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.remove();
	      this.chart.removeLayer(this.id);
	      this.nodes = null;
	      this.chart = null;
	      this.group = null;
	    }
	
	    /**
	    * onEnter - the default event handler for a group. This may be overridden or
	    *   a new event handler passed into the constructor as `options.onEnter`
	    *
	    * @param {object} selections - the d3 selection object containing the children for this group
	    */
	
	  }], [{
	    key: 'onEnter',
	    value: function onEnter() {}
	
	    /**
	    * onUpdate - the default event handler for a group. This may be overridden or
	    *   a new event handler passed into the constructor as `options.onUpdate`
	    *
	    * @param {object} selections - the d3 selection object for this group
	    */
	
	  }, {
	    key: 'onUpdate',
	    value: function onUpdate() {}
	
	    /**
	    * onExit - the default event handler for a group. This may be overridden or
	    *   a new event handler passed into the constructor as `options.onExit`
	    *
	    * @param {object} selections - the d3 selection object for this group
	    */
	
	  }, {
	    key: 'onExit',
	    value: function onExit() {}
	  }]);
	
	  return Group;
	}();
	
	module.exports = Group;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	
	function genId() {
	  var length = 9;
	  var prefix = 'node-';
	  return prefix + Math.random().toString(36).substr(2, length);
	}
	
	var Node = function () {
	  /**
	  * Node - base class
	  *
	  * @param {object} options - the options used to construct the SegmentMarker
	  * @param {object} options.meta - the optional meta data associated with the node (e.g. used in the Tooltip)
	  * @return {object} this
	  */
	  function Node(options) {
	    _classCallCheck(this, Node);
	
	    this.id = options.id || genId();
	    this.meta = options.meta || {};
	    this.group = null;
	    return this;
	  }
	
	  /**
	  * remove - removes the marker from the DOM
	  *
	  */
	
	
	  _createClass(Node, [{
	    key: 'remove',
	    value: function remove() {
	      if (this.group) {
	        return this.group.remove();
	      }
	    }
	
	    /**
	    * update - updates one or more elements within the RectNode SVG group
	    *
	    */
	
	  }, {
	    key: 'update',
	    value: function update() {
	      return this;
	    }
	
	    /**
	    * detached - builds a detached svg group and returns the node
	    *
	    * @return {object} node - the SVG node to append to the parent during .call()
	    */
	
	  }, {
	    key: 'detached',
	    value: function detached() {
	      this.remove();
	      this.group = d3.select(document.createElementNS(d3.namespaces.svg, 'g')).attr('id', this.id).attr('class', 'd3cf-node').attr('opacity', this.o).remove();
	      this.update();
	      return this.group.node();
	    }
	  }]);
	
	  return Node;
	}();
	
	module.exports = Node;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Group2 = __webpack_require__(7);
	
	var _Group3 = _interopRequireDefault(_Group2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BarGroup = function (_Group) {
	  _inherits(BarGroup, _Group);
	
	  function BarGroup(chart, options) {
	    var _ret;
	
	    _classCallCheck(this, BarGroup);
	
	    var _this = _possibleConstructorReturn(this, (BarGroup.__proto__ || Object.getPrototypeOf(BarGroup)).call(this, chart, options));
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	  * update - handles updating the marker
	  *
	  * @return {object} this
	  */
	
	
	  _createClass(BarGroup, [{
	    key: 'update',
	    value: function update() {
	      var filtered = this.chart.applyFilters(this.getNodes());
	      this.group.attr('numNodes', filtered.length);
	      var nodes = this.group.selectAll('.d3cf-node').data(filtered, function (d) {
	        return d.id;
	      });
	      nodes.enter().append(function (node) {
	        return node.detached();
	      }).call(this.onEnter);
	      nodes.each(function (node) {
	        return node.update();
	      }).call(this.onUpdate);
	      nodes.exit().remove().call(this.onExit);
	    }
	  }]);
	
	  return BarGroup;
	}(_Group3.default);
	
	module.exports = BarGroup;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Group2 = __webpack_require__(7);
	
	var _Group3 = _interopRequireDefault(_Group2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var d3 = __webpack_require__(3);
	
	var LineGroup = function (_Group) {
	  _inherits(LineGroup, _Group);
	
	  function LineGroup(chart, options) {
	    var _ret;
	
	    _classCallCheck(this, LineGroup);
	
	    var _this = _possibleConstructorReturn(this, (LineGroup.__proto__ || Object.getPrototypeOf(LineGroup)).call(this, chart, options));
	
	    _this.s = options.s || 'steelblue';
	    _this.w = options.w || 1.5;
	    _this.meta = options.meta || {};
	    var defaultGenerator = d3.line().x(function (d) {
	      return _this.chart.axes.xScale(d.x1);
	    }).y(function (d) {
	      return _this.chart.axes.yScale(d.y1);
	    });
	    _this.generator = options.generator || defaultGenerator;
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	  * update - handles updating the marker
	  *
	  * @return {object} this
	  */
	
	
	  _createClass(LineGroup, [{
	    key: 'update',
	    value: function update() {
	      var _this2 = this;
	
	      if (typeof this.group === 'undefined') {
	        return;
	      }
	      /**
	      * comparator function for sorting by x1 ascending
	      *
	      * @param {object} a - LineNode object
	      * @param {object} b - LineNode object
	      * @return {number}
	      */
	      function cmp(a, b) {
	        return a.x1 - b.x1;
	      }
	      var filtered = this.chart.applyFilters(this.getNodes()).sort(cmp);
	      this.group.attr('numNodes', filtered.length);
	      // select
	      var path = this.group.select('.d3cf-line');
	      if (path.empty()) {
	        // enter
	        this.group.append('path').datum(filtered, function (d) {
	          return d.id;
	        }).attr('fill', 'transparent').attr('stroke', this.s).attr('stroke-linejoin', 'round').attr('stroke-linecap', 'round').attr('stroke-width', this.w).attr('class', 'd3cf-line').attr('d', function (d) {
	          return _this2.generator(d);
	        }).call(this.onEnter);
	      }
	      // update
	      path.attr('stroke', this.s).attr('stroke-width', this.w).attr('d', function (d) {
	        return _this2.generator(d);
	      }).call(this.onUpdate);
	      // exit
	      path.exit().remove().call(this.onExit);
	      var nodes = this.group.selectAll('.node').data(filtered, function (d) {
	        return d.id;
	      });
	      nodes.enter().append(function (node) {
	        return node.detached();
	      }).call(this.onEnter);
	      nodes.each(function (node) {
	        return node.update();
	      }).call(this.onUpdate);
	      nodes.exit().remove().call(this.onExit);
	    }
	  }]);
	
	  return LineGroup;
	}(_Group3.default);
	
	module.exports = LineGroup;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Group2 = __webpack_require__(7);
	
	var _Group3 = _interopRequireDefault(_Group2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NodeGroup = function (_Group) {
	  _inherits(NodeGroup, _Group);
	
	  function NodeGroup(chart, options) {
	    var _ret;
	
	    _classCallCheck(this, NodeGroup);
	
	    var _this = _possibleConstructorReturn(this, (NodeGroup.__proto__ || Object.getPrototypeOf(NodeGroup)).call(this, chart, options));
	
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	  * update - handles updating the marker
	  * @override
	  *
	  * @return {object} this
	  */
	
	
	  _createClass(NodeGroup, [{
	    key: 'update',
	    value: function update() {
	      if (typeof this.group === 'undefined') {
	        return;
	      }
	      var filtered = this.chart.applyFilters(this.getNodes());
	      this.group.attr('numNodes', filtered.length);
	      var nodes = this.group.selectAll('.node').data(filtered, function (d) {
	        return d.id;
	      });
	      nodes.enter().append(function (node) {
	        return node.detached();
	      }).call(this.onEnter);
	      nodes.each(function (node) {
	        return node.update();
	      }).call(this.onUpdate);
	      nodes.exit().remove().call(this.onExit);
	    }
	  }]);
	
	  return NodeGroup;
	}(_Group3.default);
	
	module.exports = NodeGroup;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Node2 = __webpack_require__(8);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var d3 = __webpack_require__(3);
	
	var BarNode = function (_Node) {
	  _inherits(BarNode, _Node);
	
	  /**
	  * BarNode - a data point for a path/line generator
	  *
	  * @param {object} chart - an instance of a chart
	  * @param {object} options - the options used to construct the chart
	  * @param {string} options.x1 - the category for x1 position
	  * @param {number} options.y1 - the value for y1 position
	  * @param {string} options.f - the fill of the bar
	  * @param {number} options.o - the opacity of the bar
	  * @param {object=} options.meta - the optional meta data associated with the circle (e.g. used in the Tooltip)
	  * @return {object} this
	  */
	  function BarNode(chart, options) {
	    var _ret;
	
	    _classCallCheck(this, BarNode);
	
	    var _this = _possibleConstructorReturn(this, (BarNode.__proto__ || Object.getPrototypeOf(BarNode)).call(this, options));
	
	    _this.chart = chart;
	    _this.x1 = options.x1;
	    _this.y1 = options.y1;
	    _this.f = options.r || '#345e7e';
	    _this.o = options.o || 0;
	    _this.style = options.style || 'd3cf-node';
	    _this.meta = options.meta || {};
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(BarNode, [{
	    key: 'getFill',
	    value: function getFill(type) {
	      var fill = '#33B5E5';
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
	
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this2 = this;
	
	      if (typeof this.group === 'undefined') {
	        this.group = d3.select('#' + this.id);
	      }
	      // select
	      var rect = this.group.selectAll('rect').data([this], function (d) {
	        return d.id;
	      });
	      // create
	      rect.enter().append('rect').attr('class', this.style).attr('x', function () {
	        return _this2.chart.axes.xScale(_this2.x1);
	      }).attr('y', function () {
	        return _this2.chart.axes.yScale(_this2.y1);
	      }).attr('width', function () {
	        return _this2.chart.axes.xScale.bandwidth();
	      }).attr('height', function () {
	        return _this2.chart.getHeight() - _this2.chart.axes.yScale(_this2.y1);
	      }).style('fill', function () {
	        return _this2.getFill(_this2.x1);
	      }).style('opacity', function () {
	        return _this2.o;
	      }).on('mouseover', function () {
	        if (_this2.chart.tooltip) {
	          return _this2.chart.tooltip.mouseover(_this2, d3.event.pageX, d3.event.pageY);
	        }
	      }).on('mouseout', function () {
	        if (_this2.chart.tooltip) {
	          return _this2.chart.tooltip.mouseout();
	        }
	      });
	      // update
	      rect.attr('x', function () {
	        return _this2.chart.axes.xScale(_this2.x1);
	      }).attr('y', function () {
	        return _this2.chart.axes.yScale(_this2.y1);
	      }).attr('width', function () {
	        return _this2.chart.axes.xScale.bandwidth();
	      }).attr('height', function () {
	        return _this2.chart.getHeight() - _this2.chart.axes.yScale(_this2.y1);
	      });
	      // remove
	      rect.exit().remove();
	      return this;
	    }
	  }]);
	
	  return BarNode;
	}(_Node3.default);
	
	module.exports = BarNode;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Node2 = __webpack_require__(8);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var d3 = __webpack_require__(3);
	
	var LineNode = function (_Node) {
	  _inherits(LineNode, _Node);
	
	  /**
	  * LineNode - a data point for a path/line generator
	  *
	  * @param {object} chart - an instance of a chart
	  * @param {object} options - the options used to construct the plot
	  * @param {number} options.x1 - the value for x1 position
	  * @param {number} options.y1 - the value for y1 position
	  * @param {string} options.r - the radius of the circle
	  * @param {number} options.o - the opacity of the cirle
	  * @param {object} options.meta - the optional meta data associated with the circle (e.g. used in the Tooltip)
	  * @return {object} this
	  */
	  function LineNode(chart, options) {
	    var _ret;
	
	    _classCallCheck(this, LineNode);
	
	    var _this = _possibleConstructorReturn(this, (LineNode.__proto__ || Object.getPrototypeOf(LineNode)).call(this, options));
	
	    _this.chart = chart;
	    _this.x1 = options.x1;
	    _this.y1 = options.y1;
	    _this.r = options.r || 3;
	    _this.o = options.o || 0;
	    _this.style = options.style || 'd3cf-node';
	    _this.meta = options.meta || {};
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(LineNode, [{
	    key: 'getFill',
	    value: function getFill(type) {
	      var fill = '#33B5E5';
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
	
	    /**
	    * update - updates one or more elements
	    *
	    */
	
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this2 = this;
	
	      if (typeof this.group === 'undefined') {
	        this.group = d3.select('#' + this.id);
	      }
	      /**
	      * Each node of the line's `path` (see LineGroup) is a transparent circle in
	      * order to have a mouseover event.
	      *
	      * @see https://groups.google.com/forum/#!topic/d3-js/gHzOj91X2NA
	      */
	      // select
	      var circle = this.group.selectAll('circle').data([this], function (d) {
	        return d.id;
	      });
	      // create
	      circle.enter().append('circle').attr('class', this.style).attr('cx', function () {
	        return _this2.chart.axes.xScale(_this2.x1);
	      }).attr('cy', function () {
	        return _this2.chart.axes.yScale(_this2.y1);
	      }).attr('r', function () {
	        return _this2.r;
	      }).attr('opacity', function () {
	        return _this2.o;
	      }).on('mouseover', function () {
	        if (_this2.chart.tooltip) {
	          return _this2.chart.tooltip.mouseover(_this2, d3.event.pageX, d3.event.pageY);
	        }
	      }).on('mouseout', function () {
	        if (_this2.chart.tooltip) {
	          return _this2.chart.tooltip.mouseout();
	        }
	      });
	      // update
	      circle.attr('cx', function () {
	        return _this2.chart.axes.xScale(_this2.x1);
	      }).attr('cy', function () {
	        return _this2.chart.axes.yScale(_this2.y1);
	      }).attr('r', function () {
	        return _this2.r;
	      }).attr('opacity', function () {
	        return _this2.o;
	      });
	      // remove
	      circle.exit().remove();
	      return this;
	    }
	  }]);
	
	  return LineNode;
	}(_Node3.default);
	
	module.exports = LineNode;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Node2 = __webpack_require__(8);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var d3 = __webpack_require__(3);
	
	var MINIMUM_MARKER_WIDTH = 10;
	var MINIMUM_MARKER_HEIGHT = 10;
	
	var RectNode = function (_Node) {
	  _inherits(RectNode, _Node);
	
	  /**
	  * RectNode - a rectangular node
	  *
	  * @param {object} plot - an instance of a plot
	  * @param {object} options - the options used to construct the plot
	  * @param {number} options.x1 - the value for x1 position
	  * @param {number} options.x2 - the value for x2 position
	  * @param {number} options.y1 - the value for y1 position
	  * @param {number} options.h - the value for the height
	  * @param {string} options.f - the fill of the marker
	  * @param {number} options.o - the opacity of the marker
	  * @param {object} options.meta - the optional meta data associated with the marker (e.g. used in the Tooltip)
	  * @return {object} this
	  */
	  function RectNode(plot, options) {
	    var _ret;
	
	    _classCallCheck(this, RectNode);
	
	    var _this = _possibleConstructorReturn(this, (RectNode.__proto__ || Object.getPrototypeOf(RectNode)).call(this, options));
	
	    _this.plot = plot;
	    _this.x1 = options.x1;
	    _this.x2 = options.x2;
	    _this.y1 = options.y1;
	    _this.h = options.h || 10;
	    _this.f = options.f || '#345e7e';
	    _this.o = options.o || 0.4;
	    _this.style = options.style || 'd3cf-node';
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	  * update - updates one or more elements within the RectNode SVG group
	  *
	  */
	
	
	  _createClass(RectNode, [{
	    key: 'update',
	    value: function update() {
	      var _this2 = this;
	
	      if (typeof this.group === 'undefined') {
	        this.group = d3.select('#' + this.id);
	      }
	      // select
	      var rect = this.group.selectAll('rect').data([this], function (d) {
	        return d.id;
	      });
	      // create
	      rect.enter().append('rect').attr('class', this.style).attr('x', function () {
	        return _this2.plot.axes.xScale(_this2.x1);
	      }).attr('y', function () {
	        var height = _this2.h;
	        if (height < MINIMUM_MARKER_HEIGHT) {
	          height = MINIMUM_MARKER_HEIGHT;
	        }
	        return _this2.plot.axes.yScale(_this2.y1) - height / 2;
	      }).attr('width', function () {
	        var width = _this2.plot.axes.xScale(_this2.x2) - _this2.plot.axes.xScale(_this2.x1);
	        if (width < MINIMUM_MARKER_WIDTH) {
	          width = MINIMUM_MARKER_WIDTH;
	        }
	        return width;
	      }).attr('height', function () {
	        var height = _this2.h;
	        if (height < MINIMUM_MARKER_HEIGHT) {
	          height = MINIMUM_MARKER_HEIGHT;
	        }
	        return height;
	      }).style('fill', function () {
	        return _this2.f;
	      }).style('opacity', function () {
	        return _this2.o;
	      }).on('mouseover', function () {
	        if (_this2.plot.tooltip) {
	          return _this2.plot.tooltip.mouseover(_this2, d3.event.pageX, d3.event.pageY);
	        }
	      }).on('mouseout', function () {
	        if (_this2.plot.tooltip) {
	          return _this2.plot.tooltip.mouseout();
	        }
	      });
	
	      // update
	      rect.attr('x', function () {
	        return _this2.plot.axes.xScale(_this2.x1);
	      }).attr('y', function () {
	        var height = _this2.h;
	        if (height < MINIMUM_MARKER_HEIGHT) {
	          height = MINIMUM_MARKER_HEIGHT;
	        }
	        return _this2.plot.axes.yScale(_this2.y1) - height / 2;
	      }).attr('width', function () {
	        var width = _this2.plot.axes.xScale(_this2.x2) - _this2.plot.axes.xScale(_this2.x1);
	        if (width < MINIMUM_MARKER_WIDTH) {
	          width = MINIMUM_MARKER_WIDTH;
	        }
	        return width;
	      }).attr('height', function () {
	        var height = _this2.h;
	        if (height < MINIMUM_MARKER_HEIGHT) {
	          height = MINIMUM_MARKER_HEIGHT;
	        }
	        return height;
	      });
	
	      // remove
	      rect.exit().remove();
	      return this;
	    }
	  }]);
	
	  return RectNode;
	}(_Node3.default);
	
	module.exports = RectNode;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _d = __webpack_require__(3);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _underscore = __webpack_require__(4);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _Node2 = __webpack_require__(8);
	
	var _Node3 = _interopRequireDefault(_Node2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MINIMUM_LINE_STROKE = 4;
	var MINIMUM_CIRCLE_RADIUS = 5;
	var MINIMUM_LINE_THRESHOLD = 2;
	
	var SegmentNode = function (_Node) {
	  _inherits(SegmentNode, _Node);
	
	  /**
	  * SegmentNode - a line with beginning and end circles
	  * @param {object} plot - an instance of a plot
	  * @param {object} options - the options used to construct the SegmentNode
	  * @param {number} options.x - the value for x position
	  * @param {number} options.y - the value for y position
	  * @param {number} options.l - the value for the length of the line
	  * @param {number} options.h - the value for the height
	  * @param {string} options.f - the fill of the line
	  * @param {number} options.o - the opacity of the line
	  * @param {object} options.meta - the optional meta data associated with the node (e.g. used in the Tooltip)
	  * @return {object} this
	  */
	  function SegmentNode(plot, options) {
	    var _ret;
	
	    _classCallCheck(this, SegmentNode);
	
	    var _this = _possibleConstructorReturn(this, (SegmentNode.__proto__ || Object.getPrototypeOf(SegmentNode)).call(this, options));
	
	    _this.plot = plot;
	    _this.x = options.x;
	    _this.y = options.y;
	    _this.w = options.w;
	    _this.h = options.h || MINIMUM_LINE_STROKE;
	    _this.r = options.r || MINIMUM_CIRCLE_RADIUS;
	    _this.f = options.f || '#345e7e';
	    _this.o = options.o || 0.3;
	    _this.meta = options.meta || {};
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	  * remove - removes the node from the DOM
	  *
	  * @return {object} this
	  */
	
	
	  _createClass(SegmentNode, [{
	    key: 'remove',
	    value: function remove() {
	      if (this.group) {
	        return this.group.remove();
	      }
	    }
	
	    /**
	    * filteredOrderedPair - determine if the pair exists within the domain
	    *
	    */
	
	  }, {
	    key: 'filteredOrderedPair',
	    value: function filteredOrderedPair(orderedPair) {
	      if (orderedPair[0] < this.plot.axes.xScale.range()[0]) {
	        orderedPair[0] = null;
	      }
	      if (orderedPair[0] > this.plot.axes.xScale.range()[1]) {
	        orderedPair[0] = null;
	      }
	      if (orderedPair[1] < this.plot.axes.yScale.range()[1]) {
	        orderedPair[1] = null;
	      }
	      if (orderedPair[1] > this.plot.axes.yScale.range()[0]) {
	        orderedPair[1] = null;
	      }
	      return orderedPair;
	    }
	
	    /**
	    * update - handles updating the node
	    *
	    * @return {object} this
	    */
	
	  }, {
	    key: 'update',
	    value: function update() {
	      var _this2 = this;
	
	      if (typeof this.group === 'undefined') {
	        this.group = _d2.default.select('#' + this.id);
	      }
	      var linePairs = [[this.plot.axes.xScale(this.x), this.plot.axes.yScale(this.y)], [this.plot.axes.xScale(this.w), this.plot.axes.yScale(this.y)]];
	      var lineDistance = this.distance(linePairs);
	      var totalRange = this.plot.axes.xScale.range()[1];
	      var linePercentage = Math.floor(lineDistance / totalRange * 100);
	      var startPoint = this.filteredOrderedPair([this.plot.axes.xScale(this.x), this.plot.axes.yScale(this.y)]);
	      var start = this.group.selectAll('.start-circle').data([this], function (d) {
	        return d.id;
	      });
	      if (startPoint[0] !== null && startPoint[1] !== null) {
	        start.enter().append('circle').attr('class', 'start-circle').style('fill', this.f).attr('cx', startPoint[0]).attr('cy', startPoint[1]).attr('r', function () {
	          var radius = _this2.r;
	          radius = Math.ceil(radius * (linePercentage / 100) + radius);
	          if (radius < MINIMUM_CIRCLE_RADIUS) {
	            radius = MINIMUM_CIRCLE_RADIUS;
	          }
	          return radius;
	        });
	        start.attr('cx', startPoint[0]).attr('cy', startPoint[1]).attr('r', function () {
	          var radius = _this2.r;
	          radius = Math.ceil(radius * (linePercentage / 100) + radius);
	          if (radius < MINIMUM_CIRCLE_RADIUS) {
	            radius = MINIMUM_CIRCLE_RADIUS;
	          }
	          return radius;
	        });
	        start.exit().remove();
	      } else {
	        this.group.selectAll('.start-circle').remove();
	      }
	      if (linePercentage >= MINIMUM_LINE_THRESHOLD) {
	        var line = this.group.selectAll('line').data([this], function (d) {
	          return d.id;
	        });
	        line.enter().append('line').attr('x1', function () {
	          if (linePairs[0][0] <= _this2.plot.axes.xScale.range()[0]) {
	            return _this2.plot.axes.xScale.range()[0];
	          }
	          if (linePairs[0][0] >= _this2.plot.axes.xScale.range()[1]) {
	            return null;
	          }
	          return linePairs[0][0];
	        }).attr('y1', linePairs[0][1]).attr('x2', function () {
	          if (linePairs[1][0] >= _this2.plot.axes.xScale.range()[1]) {
	            return _this2.plot.axes.xScale.range()[1];
	          }
	          if (linePairs[1][0] <= _this2.plot.axes.xScale.range()[0]) {
	            return null;
	          }
	          return linePairs[1][0];
	        }).attr('y2', linePairs[1][1]).attr('stroke-width', function () {
	          var height = _this2.h;
	          height = Math.ceil(height * (linePercentage / 100) + height);
	          if (height < MINIMUM_LINE_STROKE) {
	            return MINIMUM_LINE_STROKE;
	          }
	          return height;
	        }).attr('stroke', this.f);
	        line.attr('x1', function () {
	          if (linePairs[0][0] <= _this2.plot.axes.xScale.range()[0]) {
	            return _this2.plot.axes.xScale.range()[0];
	          }
	          if (linePairs[0][0] >= _this2.plot.axes.xScale.range()[1]) {
	            return null;
	          }
	          return linePairs[0][0];
	        }).attr('y1', linePairs[0][1]).attr('x2', function () {
	          if (linePairs[1][0] >= _this2.plot.axes.xScale.range()[1]) {
	            return _this2.plot.axes.xScale.range()[1];
	          }
	          if (linePairs[1][0] <= _this2.plot.axes.xScale.range()[0]) {
	            return null;
	          }
	          return linePairs[1][0];
	        }).attr('y2', linePairs[1][1]).attr('stroke-width', function () {
	          var height = _this2.h;
	          height = Math.ceil(height * (linePercentage / 100) + height);
	          if (height < MINIMUM_LINE_STROKE) {
	            return MINIMUM_LINE_STROKE;
	          }
	          return height;
	        });
	      } else {
	        this.group.selectAll('line').remove();
	      }
	      var endPoint = this.filteredOrderedPair([this.plot.axes.xScale(this.w), this.plot.axes.yScale(this.y)]);
	      if (linePercentage >= MINIMUM_LINE_THRESHOLD) {
	        if (endPoint[0] !== null && endPoint[1] !== null) {
	          var end = this.group.selectAll('.end-circle').data([this], function (d) {
	            return d.id;
	          });
	          end.enter().append('circle').attr('class', 'end-circle').attr('cx', endPoint[0]).attr('cy', endPoint[1]).attr('r', function () {
	            var radius = _this2.r;
	            radius = Math.ceil(radius * linePercentage / 100 + radius);
	            if (radius < MINIMUM_CIRCLE_RADIUS) {
	              radius = MINIMUM_CIRCLE_RADIUS;
	            }
	            return radius;
	          }).style('fill', this.f);
	          end.attr('class', 'end-circle').attr('cx', endPoint[0]).attr('cy', endPoint[1]).attr('r', function () {
	            var radius = _this2.r;
	            radius = Math.ceil(radius * linePercentage / 100 + radius);
	            if (radius < MINIMUM_CIRCLE_RADIUS) {
	              radius = MINIMUM_CIRCLE_RADIUS;
	            }
	            return radius;
	          });
	        } else {
	          this.group.selectAll('.end-circle').remove();
	        }
	      } else {
	        this.group.selectAll('.end-circle').remove();
	      }
	      return this;
	    }
	
	    /**
	    * detached - builds a detached svg group and returns the node
	    *
	    * @return {object} node - the SVG node to append to the parent during .call()
	    */
	
	  }, {
	    key: 'detached',
	    value: function detached() {
	      this.remove();
	      this.group = _d2.default.select(document.createElementNS(_d2.default.namespaces.svg, 'g')).attr('id', this.id).attr('class', 'node').attr('opacity', this.o).remove();
	      this.update();
	      this.group.node();
	    }
	
	    /**
	    * distance - determine the distance between two pairs
	    *
	    */
	
	  }, {
	    key: 'distance',
	    value: function distance(pairs) {
	      return Math.sqrt(Math.pow(Math.abs(pairs[0][0] - pairs[1][0]), 2) + Math.pow(Math.abs(pairs[0][1] - pairs[1][1]), 2));
	    }
	
	    /**
	    * groupOverlappingSegments - group overlapping segments together
	    *
	    * @param {array} segments - an array of SegmentNode's
	    * @return {object} groups - groups of overlapping segments
	    */
	
	  }], [{
	    key: 'groupOverlappingSegments',
	    value: function groupOverlappingSegments(segments) {
	      var groups = {};
	      var segmentsByHeightAndCumulative = _underscore2.default.groupBy(segments, function (segment) {
	        var c = false;
	        if (typeof segment.meta.cumulative === 'undefined') {
	          c = false;
	        } else {
	          c = segment.meta.cumulative;
	        }
	        return segment.y + ':' + c;
	      });
	      Object.keys(segmentsByHeightAndCumulative).forEach(function (key) {
	        var values = segmentsByHeightAndCumulative[key];
	        values.sort(function (a, b) {
	          return a.x - b.x;
	        });
	        var i = 0;
	        var points = [];
	        while (i < values.length) {
	          if (i === 0) {
	            points[0] = values[0];
	            var groupName = values[0].w + ':' + key;
	            groups[groupName] = [values[0]];
	            i++;
	            continue; // eslint-disable-line no-continue
	          }
	          var lastIdx = points.length - 1;
	          if (lastIdx < 0) {
	            break;
	          }
	          var lastPoint = points[lastIdx];
	          if (values[i].x >= lastPoint.x && values[i].w <= lastPoint.w) {
	            var _groupName = lastPoint.w + ':' + key;
	            var group = groups[_groupName];
	            if (typeof group === 'undefined') {
	              group = [];
	            }
	            group.push(values[i]);
	            i++;
	          } else {
	            points[lastIdx + 1] = values[i];
	            var _groupName2 = values[i].w + ':' + key;
	            groups[_groupName2] = [values[i]];
	            i++;
	          }
	        }
	      });
	      return groups;
	    }
	  }]);
	
	  return SegmentNode;
	}(_Node3.default);
	
	module.exports = SegmentNode;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Axes = __webpack_require__(1);
	
	var _Axes2 = _interopRequireDefault(_Axes);
	
	var _Tooltip = __webpack_require__(17);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Zoom = __webpack_require__(18);
	
	var _Zoom2 = _interopRequireDefault(_Zoom);
	
	var _Group = __webpack_require__(7);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	var _Errors = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	var _ = __webpack_require__(4);
	
	var MINIMUM_CHART_HEIGHT = 300;
	
	var Chart = function () {
	  /**
	  * Chart - creates a new instance of a chart
	  *
	  * @param {object} options - the options to create a chart
	  * @param {string} containerID - the id of the container div
	  * @param {string} svgcontainerClass - the desired class of the constructed svg element
	  * @param {object} tooltip
	  * @param {number} tooltip.opacity - the background opacity for the tooltip
	  * @param {object} tooltip.template - the compiled template
	  * @param {boolean} scale - scale the svg on window resize @default false
	  * @param {boolean} resize -resize the svg on window resize @default true
	  * @return {object} returns self
	  */
	  function Chart(options) {
	    _classCallCheck(this, Chart);
	
	    this.options = options;
	    this.drawn = false;
	    this.filters = options.filters || {};
	    this.groups_ = {};
	    return this;
	  }
	
	  /**
	  * init - method to initialize the chart, allows the chart to be re-initialized
	  *  on resize while keeping the current chart data in memory
	  *
	  * @return {object} this
	  */
	
	
	  _createClass(Chart, [{
	    key: 'init',
	    value: function init() {
	      this.setDimensions();
	      var scale = this.options.scale || false;
	      if (scale) {
	        this.root = d3.select('#' + this.options.containerID).append('svg').attr('viewBox', '0 0 ' + this.viewBoxWidth + ' ' + this.viewBoxHeight).attr('preserveAspectRatio', 'xMinYMin meet');
	      } else {
	        this.root = d3.select('#' + this.options.containerID).append('svg').attr('width', this.viewBoxWidth).attr('height', this.viewBoxHeight);
	      }
	      this.container = this.root.append('g').attr('class', this.options.svgContainerClass).attr('width', this.getWidth()).attr('height', this.getHeight()).attr('transform', 'translate(' + this.margins.left + ', ' + this.margins.top + ')');
	      this.axes = new _Axes2.default(this, this.options.axes);
	      this.tooltip = new _Tooltip2.default(this, this.options);
	      var zoomEnabled = this.options.zoom || false;
	      if (zoomEnabled) {
	        this.zoom = new _Zoom2.default(this, this.options);
	      }
	      this.groups = this.container.append('g').attr('class', 'd3cf-groups').attr('transform', 'translate(' + this.margins.left + ', 0)');
	      return this;
	    }
	
	    /**
	    * setDimensions - method to set the dimensions of the chart based on the current window
	    *
	    */
	
	  }, {
	    key: 'setDimensions',
	    value: function setDimensions() {
	      this.margins = this.options.margins || {
	        left: 40,
	        right: 20,
	        top: 20,
	        bottom: 40
	      };
	      this.width = this.options.width || document.getElementById(this.options.containerID).offsetWidth - (this.margins.left + this.margins.right);
	      this.height = this.options.height;
	      if (this.height < MINIMUM_CHART_HEIGHT) {
	        this.height = MINIMUM_CHART_HEIGHT;
	      }
	      this.viewBoxWidth = this.width + this.margins.left + this.margins.right;
	      this.viewBoxHeight = this.height + this.margins.top + this.margins.bottom;
	      return this;
	    }
	
	    /**
	    * update - update the width and height attributes of the root and container
	    *  elements. then call update on the chart axes
	    *
	    * @param {array} nodes - an array of {object} for each node
	    * @return {object} this
	    */
	
	  }, {
	    key: 'update',
	    value: function update(nodes) {
	      this.setDimensions();
	      this.root.attr('width', this.viewBoxWidth).attr('height', this.viewBoxHeight);
	      this.container.attr('width', this.width).attr('height', this.height).attr('transform', 'translate(' + this.margins.left + ', ' + this.margins.top + ')');
	      if (typeof nodes === 'undefined') {
	        this.axes.update(this.getGroupsNodes(), false);
	      } else {
	        if (nodes instanceof Array) {
	          this.axes.update(nodes, true);
	        } else {
	          this.mergeGroups(nodes);
	          this.axes.update(this.getGroupsNodes(false), true);
	        }
	      }
	      return this;
	    }
	
	    /**
	    * draw - draws the markers on the chart
	    *
	    * @see this will automatically show/hide a warning message if the data
	    * is empty. Do not call super() to override this behavior.
	    *
	    * @param {array} nodes - an array of {object} for each marker
	    */
	
	  }, {
	    key: 'draw',
	    value: function draw(nodes) {
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
	          var group = this.defaultGroup(nodes);
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
	
	    /**
	    * defaultGroup - creates a default group if an array is passed to the draw method
	    *
	    * @param {array} nodes - an array of Node's
	    */
	
	  }, {
	    key: 'defaultGroup',
	    value: function defaultGroup() {
	      throw new Error('defaultGroup must be implemented.');
	    }
	
	    /**
	    * applyFilters - apply any filters from the chart
	    *
	    * @param {object} filters - an array of filters to apply
	    * @return {array} filtered, the filtered data
	    */
	
	  }, {
	    key: 'applyFilters',
	    value: function applyFilters(nodes, filters) {
	      var filters_ = filters || this.filters;
	      var filtered = [];
	      if (nodes) {
	        filtered = nodes.filter(function (d) {
	          var valid = true;
	          var keys = Object.keys(filters_);
	          var i = 0;
	          var keysLen = keys.length;
	          while (i < keysLen) {
	            var key = keys[i++];
	            var f = filters_[key](d);
	            if (typeof f === 'undefined') {
	              valid = false;
	              break;
	            }
	          }
	          if (valid) {
	            return d;
	          }
	        });
	      }
	      return filtered;
	    }
	
	    /**
	    * getWidth
	    *
	    * @return {number} width - (excluding margins) for the root svg
	    */
	
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      return this.width - (this.margins.left + this.margins.right);
	    }
	
	    /**
	    * getHeigth
	    *
	    * @return {number} width - (excluding margins) for the root svg
	    */
	
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      return this.height - (this.margins.top + this.margins.bottom);
	    }
	
	    /**
	    * showWarn - shows a warning message in the center of the chart
	    *
	    * @param {string} m - the message to display
	    * @return {object} this
	    */
	
	  }, {
	    key: 'showWarn',
	    value: function showWarn(m) {
	      var message = m || 'No data to display';
	      if (this.warn) {
	        this.removeWarn();
	      }
	      this.warn = this.container.append('g').style('opacity', 0).attr('class', 'd3cf-warn');
	      this.warn.append('text').attr('text-anchor', 'middle').attr('x', this.width / 2).attr('y', this.getHeight() / 2).text(message);
	      this.warn.transition().style('opacity', 1);
	      return this;
	    }
	
	    /**
	    * removeWarn - removes the warning message from the chart
	    *
	    * @return {object} this
	    */
	
	  }, {
	    key: 'removeWarn',
	    value: function removeWarn() {
	      if (this.warn) {
	        this.warn.remove();
	      }
	      return this;
	    }
	
	    /**
	    * remove - removes the chart from the DOM and any event listeners
	    *
	    * @return {object} this
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      if (this.zoom && typeof this.zoom.remove === 'function') this.zoom.remove();
	      if (this.tooltip && typeof this.tooltip.remove === 'function') this.tooltip.remove();
	      if (this.axes && typeof this.axes.remove === 'function') this.axes.remove();
	      if (this.container && typeof this.container.remove === 'function') this.container.remove();
	      if (this.root && typeof this.root.remove === 'function') this.root.remove();
	    }
	
	    /**
	    * destroy - destroys the chart and any associated elements
	    *
	    */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.remove();
	      this.zoom = null;
	      this.tooltip = null;
	      this.axes = null;
	      this.container = null;
	      this.root = null;
	      this.resizeHandler = null;
	    }
	
	    /**
	    * addGroup
	    *
	    * @param {object} group - add a group to the chart
	    * @throws {InvalidGroupError} error
	    * @return {Chart} this
	    */
	
	  }, {
	    key: 'addGroup',
	    value: function addGroup(group) {
	      if (group instanceof _Group2.default === false) {
	        throw new _Errors.InvalidGroupError();
	      }
	      this.groups_[group.id] = group;
	      return this;
	    }
	
	    /**
	    * removeGroup
	    *
	    * @param {string} id - the group to remove
	    * @return {Chart} this
	    */
	
	  }, {
	    key: 'removeGroup',
	    value: function removeGroup(id) {
	      if (this.groups_.hasOwnProperty(id)) {
	        delete this.groups_[id];
	      }
	      return this;
	    }
	
	    /**
	    * getGroups - returns the groups associated with this chart
	    *
	    * @return {array} groups - the groups associated with this chart
	    */
	
	  }, {
	    key: 'getGroups',
	    value: function getGroups() {
	      return Object.values(this.groups_);
	    }
	
	    /**
	    * getGroups - returns the size of all the groups
	    *
	    * @param {boolean} shouldFilter - should the nodes be filtered by domain
	    * @return {Number} size - the size of all the groups
	    */
	
	  }, {
	    key: 'getGroupsSize',
	    value: function getGroupsSize(shouldFilter) {
	      var _this = this;
	
	      return this.getGroups().reduce(function (prev, nextObj) {
	        if (shouldFilter) {
	          return prev + _this.applyFilters(nextObj.getNodes()).length;
	        }
	        var filters = Object.assign({}, _this.filters);
	        if (filters.hasOwnProperty('_domain')) {
	          delete filters._domain;
	        }
	        return prev + _this.applyFilters(nextObj.getNodes(), filters).length;
	      }, 0);
	    }
	
	    /**
	    * getGroupsNodes - returns all the nodes for each group
	    *
	    * @param {boolean} shouldFilter - should the nodes be filtered by domain
	    * @return {array} nodes - an array of nodes
	    */
	
	  }, {
	    key: 'getGroupsNodes',
	    value: function getGroupsNodes(shouldFilter) {
	      var _this2 = this;
	
	      return this.getGroups().reduce(function (prevArr, nextObj) {
	        if (shouldFilter) {
	          return prevArr.concat(_this2.applyFilters(nextObj.getNodes()));
	        }
	        var filters = Object.assign({}, _this2.filters);
	        if (filters.hasOwnProperty('_domain')) {
	          delete filters._domain;
	        }
	        return prevArr.concat(_this2.applyFilters(nextObj.getNodes(), filters));
	      }, []);
	    }
	
	    /**
	    * mergeGroups - merge groups from data passed directly to the draw method
	    *
	    * @param {object} nodes - a grouping of nodes
	    */
	
	  }, {
	    key: 'mergeGroups',
	    value: function mergeGroups() {
	      throw new Error('mergeGroups must be implemented.');
	    }
	
	    /**
	    * addFilter - add a filter to the chart
	    *
	    * @param {string} name - the name of the filter
	    * @param {function} fn - the function to be applied to the data
	    * @return {object} this
	    */
	
	  }, {
	    key: 'addFilter',
	    value: function addFilter(name, fn) {
	      this.filters[name] = _.bind(fn, this);
	      return this;
	    }
	
	    /**
	    * removeFilter - removes a filter from the chart
	    *
	    * @param {string} name - the name of the filter
	    * @return {object} this
	    */
	
	  }, {
	    key: 'removeFilter',
	    value: function removeFilter(name) {
	      if (this.filters[name] !== 'undefined') {
	        delete this.filters[name];
	      }
	      return this;
	    }
	
	    /**
	    * resetZoom - resets the zoom of the axes
	    *
	    */
	
	  }, {
	    key: 'resetZoom',
	    value: function resetZoom() {
	      if (this.zoom) {
	        return this.zoom.reset();
	      }
	    }
	  }]);
	
	  return Chart;
	}();
	
	module.exports = Chart;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	var _ = __webpack_require__(4);
	
	var Tooltip = function () {
	  /**
	  * Tooltip - allows for an HTML div to be faded in/out on mouseover of a marker
	  *
	  * @param {object} plot - the plot append the tooltip
	  * @param {object} options - the options for the plot
	  * @param {object} options.tooltip - the options for the tooltip
	  * @param {number} options.opacity - the opacity of the tooltip
	  * @param {object} options.template - an underscore compiled template
	  * @return {object} this
	  */
	  function Tooltip(plot, options) {
	    _classCallCheck(this, Tooltip);
	
	    this.tooltipOpts = options.tooltip || {
	      'opacity': 1,
	      'template': _.template('<span style="font-weight: bold;"><%= obj.id %></span><p>x1: <%= obj.x1 %> x2: <% if (obj.x2) { %> <%= obj.x2 %> <% } %> y: <%= obj.y1 %></p>')
	    };
	    this.template = this.tooltipOpts.template || _.template('<span style="font-weight: bold;"><%= obj.id %></span><p>x1: <%= obj.x1 %> x2: <%= obj.x2 %> y: <%= obj.y1 %></p>');
	    this.opacity = this.tooltipOpts.opacity || 1;
	    this.element = d3.select('body').append('div').attr('class', 'd3cf-tooltip').style('opacity', 0).html(this.template({}));
	    return this;
	  }
	
	  /**
	  * mouseover - unbound method for mouseover event
	  *
	  * @param {object} d - the data
	  * @param {number} x - the x coordinate
	  * @param {number} y - the y coordinate
	  * @return {object} this
	  */
	
	
	  _createClass(Tooltip, [{
	    key: 'mouseover',
	    value: function mouseover(d, x, y) {
	      var box = this.element.node().getBoundingClientRect();
	      if (x + box.width >= window.innerWidth - 20) {
	        this.element.html(this.template(d)).style('left', x - 10 - Math.floor(box.width) + 'px').style('top', y + 'px');
	      } else {
	        this.element.html(this.template(d)).style('left', x + 10 + 'px').style('top', y + 'px');
	      }
	      this.element.transition().duration(200).style('opacity', this.opacity);
	      return this;
	    }
	
	    /**
	    * mouseout - unbound method for mouseout event
	    *
	    * @return {object} this
	    */
	
	  }, {
	    key: 'mouseout',
	    value: function mouseout() {
	      this.element.transition().duration(500).style('opacity', 0);
	      return this;
	    }
	
	    /**
	    * remove - removes the element from the DOM
	    *
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      return this.element.remove();
	    }
	  }]);
	
	  return Tooltip;
	}();
	
	module.exports = Tooltip;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	var _ = __webpack_require__(4);
	
	var MINIMUM_ZOOM_THRESHOLD = 5;
	
	var Zoom = function () {
	  /**
	  * Zoom - a zoomable interface for a plot
	  *
	  * @param {object} plot - the plot to enable the zooming interface
	  * @param {object} options - the object containing the passed in options to the plot constructor
	  * @return {object} this
	  */
	  function Zoom(plot, options) {
	    _classCallCheck(this, Zoom);
	
	    this.plot = plot;
	    this.options = options;
	    this.bandPos = [-1, -1];
	    this.zoomArea = {
	      x1: 0,
	      y1: 0,
	      x2: 0,
	      y2: 0
	    };
	    this.drag = d3.drag();
	    this.zoomGroup = plot.container.append('g').attr('class', 'd3cf-zoom');
	    this.zoomBand = this.zoomGroup.append('rect').attr('width', 0).attr('height', 0).attr('x', 0).attr('y', 0).attr('class', 'd3cf-zoomBand');
	    this.zoomOverlay = this.zoomGroup.append('rect').attr('width', plot.getWidth()).attr('height', plot.getHeight()).attr('transform', 'translate(' + plot.margins.left + ', 0)').attr('class', 'd3cf-zoomOverlay').call(this.drag);
	    this.isZoomed = false;
	    var self = this; // eslint-disable-line consistent-this
	    this.drag.on('start.plot', function () {
	      // eslint-disable-line func-names
	      // Note: @ (this) is not the Zoom class but the DOM event
	      var pos = d3.mouse(this); // eslint-disable-line no-invalid-this
	      self.dragStart = pos;
	    });
	    this.drag.on('drag.plot', function () {
	      // eslint-disable-line func-names
	      // Note: @ (this) is not the Zoom class but the DOM event
	      var pos = d3.mouse(this); // eslint-disable-line no-invalid-this
	      _.bind(self.ondrag, self)(pos);
	    });
	    this.drag.on('end.plot', function () {
	      // eslint-disable-line func-names
	      // Note: @ (this) is not the Zoom class but the DOM event
	      var pos = d3.mouse(this); // eslint-disable-line no-invalid-this
	      var zoomX = false;
	      if (Math.abs(self.dragStart[0] - pos[0]) > MINIMUM_ZOOM_THRESHOLD) {
	        zoomX = true;
	      }
	      var zoomY = false;
	      if (Math.abs(self.dragStart[1] - pos[1]) > MINIMUM_ZOOM_THRESHOLD) {
	        zoomY = true;
	      }
	      _.bind(self.ondragend, self)(pos, zoomX && zoomY);
	    });
	  }
	
	  /*
	  * ondrag - the event handler for the ondrag event
	  * @param {array} pos, the x,y position of the mouse
	  */
	
	
	  _createClass(Zoom, [{
	    key: 'ondrag',
	    value: function ondrag(pos) {
	      if (pos[0] < this.bandPos[0]) {
	        this.zoomBand.attr('transform', 'translate(' + (pos[0] + this.plot.margins.left) + ', ' + this.bandPos[1] + ')');
	      }
	      if (pos[1] < this.bandPos[1]) {
	        this.zoomBand.attr('transform', 'translate(' + (pos[0] + this.plot.margins.left) + ', ' + pos[1] + ')');
	      }
	      if (pos[1] < this.bandPos[1] && pos[0] > this.bandPos[0]) {
	        this.zoomBand.attr('transform', 'translate(' + (this.bandPos[0] + this.plot.margins.left) + ', ' + pos[1] + ')');
	      }
	      if (this.bandPos[0] === -1) {
	        this.bandPos = pos;
	        this.zoomBand.attr('transform', 'translate(' + (this.bandPos[0] + this.plot.margins.left) + ', ' + this.bandPos[1] + ')');
	      }
	      this.zoomBand.transition().duration(1).attr('width', Math.abs(this.bandPos[0] - pos[0])).attr('height', Math.abs(this.bandPos[1] - pos[1]));
	    }
	
	    /**
	    * ondragend - the event handler for the ondragend event
	    *
	    * @param {array} pos - the x,y position of the mouse
	    */
	
	  }, {
	    key: 'ondragend',
	    value: function ondragend(pos, zoom) {
	      var x1 = this.plot.axes.xScale.invert(this.bandPos[0]);
	      var x2 = this.plot.axes.xScale.invert(pos[0]);
	      if (x1 < x2) {
	        this.zoomArea.x1 = x1;
	        this.zoomArea.x2 = x2;
	      } else {
	        this.zoomArea.x1 = x2;
	        this.zoomArea.x2 = x1;
	      }
	      var y1 = this.plot.axes.yScale.invert(pos[1]);
	      var y2 = this.plot.axes.yScale.invert(this.bandPos[1]);
	      if (y1 < y2) {
	        this.zoomArea.y1 = y1;
	        this.zoomArea.y2 = y2;
	      } else {
	        this.zoomArea.y1 = y2;
	        this.zoomArea.y2 = y1;
	      }
	      this.bandPos = [-1, -1];
	      this.zoomBand.transition().attr('width', 0).attr('height', 0).attr('x', this.bandPos[0]).attr('y', this.bandPos[1]);
	      if (zoom) {
	        this.zoom();
	      }
	    }
	
	    /**
	    * zoom - the zooming method called an the end of ondragend
	    *
	    */
	
	  }, {
	    key: 'zoom',
	    value: function zoom() {
	      this.isZoomed = true;
	      this.plot.axes.zoom(this.zoomArea);
	      this.plot.draw();
	    }
	
	    /**
	    * resetZoom - reset the plot zoom back to the original viewBox
	    *
	    */
	
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.isZoomed = false;
	      this.plot.axes.reset();
	      this.plot.draw();
	    }
	
	    /**
	    * remove - remove the zoom interface from a plot
	    *
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.zoomGroup.remove();
	      this.drag.on('drag.plot', null);
	      this.drag.on('end.plot', null);
	      this.drag.on('start.plot', null);
	    }
	  }]);
	
	  return Zoom;
	}();
	
	module.exports = Zoom;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Chart2 = __webpack_require__(16);
	
	var _Chart3 = _interopRequireDefault(_Chart2);
	
	var _BarGroup = __webpack_require__(9);
	
	var _BarGroup2 = _interopRequireDefault(_BarGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(4);
	
	var BarChart = function (_Chart) {
	  _inherits(BarChart, _Chart);
	
	  /**
	  * BarChart - constructs the root SVG element to contain the BarChart
	  * @param {object} options, the options to create a BarChart
	  * @param {string} containerID, the id of the BarChart container div
	  * @param {string} svgcontainerClass, the desired class of the constructed svg element
	  * @param {object} tooltip,
	  * @param {number} tooltip.opacity, the background opacity for the tooltip
	  * @param {object} tooltip.template, the compiled template
	  * @param {boolean} scale, scale the svg on window resize @default false
	  * @param {boolean} resize, resize the svg on window resize @default true
	  * @returns {object} this, returns self
	  */
	  function BarChart(options) {
	    var _ret;
	
	    _classCallCheck(this, BarChart);
	
	    var _this = _possibleConstructorReturn(this, (BarChart.__proto__ || Object.getPrototypeOf(BarChart)).call(this, options));
	
	    _this.init();
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	  * init - method to set/re-set the resizeHandler
	  * @returns {object} this
	  */
	
	
	  _createClass(BarChart, [{
	    key: 'init',
	    value: function init() {
	      _get(BarChart.prototype.__proto__ || Object.getPrototypeOf(BarChart.prototype), 'init', this).call(this);
	      var resizeEnabled = this.options.resize || true;
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
	
	  }, {
	    key: 'draw',
	    value: function draw(data) {
	      _get(BarChart.prototype.__proto__ || Object.getPrototypeOf(BarChart.prototype), 'draw', this).call(this, data);
	      var groups = this.groups.selectAll('.group').data(this.getGroups(), function (d) {
	        return d.id;
	      });
	      groups.enter().append(function (group) {
	        return group.detached();
	      });
	      groups.each(function (group) {
	        return group.update();
	      });
	      groups.exit().remove();
	      return this;
	    }
	
	    /**
	    * defaultGroup - creates a default group if an array is passed to the draw method
	    * @param {array} nodes, an array of Node's
	    */
	
	  }, {
	    key: 'defaultGroup',
	    value: function defaultGroup(nodes) {
	      var group = this.getGroups().find(function (g) {
	        return g.id === 'default_';
	      });
	      if (typeof group === 'undefined') {
	        if (this.options.group && this.options.group.onEnter) {
	          group = new _BarGroup2.default(this, { id: 'default_', onEnter: this.options.group.onEnter });
	        } else {
	          group = new _BarGroup2.default(this, { id: 'default_' });
	        }
	      }
	      nodes.forEach(function (d) {
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
	
	  }, {
	    key: 'mergeGroups',
	    value: function mergeGroups(groups) {
	      var _this2 = this;
	
	      var notMerged = Object.keys(this.groups_);
	      var addedNewGroup = false;
	      Object.keys(groups).forEach(function (k) {
	        var idx = -1;
	        var group = _this2.groups_[k];
	        if (typeof group === 'undefined') {
	          addedNewGroup = true;
	          if (groups[k] instanceof _BarGroup2.default) {
	            group = groups[k];
	            _this2.addGroup(group);
	          } else {
	            // TODO: allow the user to pass in an object with `data` array
	            throw new Error('Must be instance of a d3cf Group.');
	          }
	        } else {
	          idx = notMerged.indexOf(k);
	          if (idx >= 0) {
	            notMerged.splice(idx, 1);
	            // merge new group data into the existing group
	            groups[k].getNodes().forEach(function (n) {
	              group.addNode(n);
	            });
	          }
	        }
	      });
	      // remove the groups that have not been sliced
	      if (notMerged.length > 0) {
	        notMerged.forEach(function (k) {
	          _this2.removeGroup(k);
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
	
	  }, {
	    key: 'update',
	    value: function update(data) {
	      _get(BarChart.prototype.__proto__ || Object.getPrototypeOf(BarChart.prototype), 'update', this).call(this, data);
	      this.draw(data);
	      return this;
	    }
	
	    /**
	    * remove - removes the chart from the DOM and any event listeners
	    * @return {object} this
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      _get(BarChart.prototype.__proto__ || Object.getPrototypeOf(BarChart.prototype), 'remove', this).call(this);
	      if (this.resizeHandler) {
	        window.removeEventListener('resize', this.resizeHandler);
	      }
	      return this;
	    }
	
	    /**
	    * resize - re-renders the chart
	    * @return {object} this
	    */
	
	  }, {
	    key: 'resize',
	    value: function resize() {
	      this.update();
	      return this;
	    }
	  }]);
	
	  return BarChart;
	}(_Chart3.default);
	
	module.exports = BarChart;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Chart2 = __webpack_require__(16);
	
	var _Chart3 = _interopRequireDefault(_Chart2);
	
	var _NodeGroup = __webpack_require__(11);
	
	var _NodeGroup2 = _interopRequireDefault(_NodeGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(4);
	
	var ScatterPlot = function (_Chart) {
	  _inherits(ScatterPlot, _Chart);
	
	  /**
	  * ScatterPlot - constructs the root SVG element to contain the ScatterPlot
	  *
	  * @param {object} options - the options to create a ScatterPlot
	  * @param {string} containerID - the id of the ScatterPlot container div
	  * @param {string} svgcontainerClass - the desired class of the constructed svg element
	  * @param {object} tooltip
	  * @param {number} tooltip.opacity - the background opacity for the tooltip
	  * @param {object} tooltip.template - the compiled template
	  * @param {boolean} scale - scale the svg on window resize @default false
	  * @param {boolean} resize - resize the svg on window resize @default true
	  * @returns {object} this - returns self
	  */
	  function ScatterPlot(options) {
	    var _ret;
	
	    _classCallCheck(this, ScatterPlot);
	
	    var _this = _possibleConstructorReturn(this, (ScatterPlot.__proto__ || Object.getPrototypeOf(ScatterPlot)).call(this, options));
	
	    _this.init();
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	  * init - method to set/re-set the resizeHandler
	  *
	  * @returns {object} this
	  */
	
	
	  _createClass(ScatterPlot, [{
	    key: 'init',
	    value: function init() {
	      _get(ScatterPlot.prototype.__proto__ || Object.getPrototypeOf(ScatterPlot.prototype), 'init', this).call(this);
	      var resizeEnabled = this.options.resize || true;
	      if (resizeEnabled) {
	        this.resizeHandler = _.debounce(_.bind(this.resize, this), 500);
	        return window.addEventListener('resize', this.resizeHandler);
	      }
	    }
	
	    /**
	    * draw - draw using d3 select.data.enter workflow
	    *
	    * @param {array} data - an array of {object} for each marker
	    * @returns {object} this
	    */
	
	  }, {
	    key: 'draw',
	    value: function draw(data) {
	      _get(ScatterPlot.prototype.__proto__ || Object.getPrototypeOf(ScatterPlot.prototype), 'draw', this).call(this, data);
	      var groups = this.groups.selectAll('.group').data(this.getGroups(), function (d) {
	        return d.id;
	      });
	      groups.enter().append(function (group) {
	        return group.detached();
	      });
	      groups.each(function (group) {
	        return group.update();
	      });
	      groups.exit().remove();
	      return this;
	    }
	
	    /**
	    * defaultGroup - creates a default group if an array is passed to the draw method
	    *
	    * @param {array} nodes - an array of Node's
	    */
	
	  }, {
	    key: 'defaultGroup',
	    value: function defaultGroup(nodes) {
	      var group = this.getGroups().find(function (g) {
	        return g.id === 'default_';
	      });
	      if (typeof group === 'undefined') {
	        if (this.options.group && this.options.group.onEnter) {
	          group = new _NodeGroup2.default(this, { id: 'default_', onEnter: this.options.group.onEnter });
	        } else {
	          group = new _NodeGroup2.default(this, { id: 'default_' });
	        }
	      }
	      nodes.forEach(function (d) {
	        return group.addNode(d);
	      });
	      return group;
	    }
	
	    /**
	    * mergeGroups - merge groups from data passed directly to the draw method
	    *
	    * @param {object} groups - a set of Groups
	    * @return {boolean} shouldReset - should the axes domain be reset to currentMinMax
	    */
	
	  }, {
	    key: 'mergeGroups',
	    value: function mergeGroups(groups) {
	      var _this2 = this;
	
	      var notMerged = Object.keys(this.groups_);
	      var addedNewGroup = false;
	      Object.keys(groups).forEach(function (k) {
	        var idx = -1;
	        var group = _this2.groups_[k];
	        if (typeof group === 'undefined') {
	          addedNewGroup = true;
	          if (groups[k] instanceof _NodeGroup2.default) {
	            group = groups[k];
	            _this2.addGroup(group);
	          } else {
	            // TODO: allow the user to pass in an object with `data` array
	            throw new Error('Must be instance of a d3cf Group.');
	          }
	        } else {
	          idx = notMerged.indexOf(k);
	          if (idx >= 0) {
	            notMerged.splice(idx, 1);
	            // merge new group data into the existing group
	            groups[k].getNodes().forEach(function (n) {
	              group.addNode(n);
	            });
	          }
	        }
	      });
	      // remove the groups that have not been sliced
	      if (notMerged.length > 0) {
	        notMerged.forEach(function (k) {
	          _this2.removeGroup(k);
	        });
	        // if we have removed an existing group from the plot
	        // then we should set the axes to the currentMinMax
	        return true;
	      }
	      // if we have merged in new groups and the axes have been initialized
	      // then we should set the axes to the currentMinMax
	      if (addedNewGroup && this.axes.initialized === true) {
	        return true;
	      }
	      // do not set the axes
	      return false;
	    }
	
	    /**
	    * update the dimensions of the plot (axes, gridlines, then redraw)
	    *
	    * @param {array} data - an array of {object} for each marker
	    * @returns {object} this
	    */
	
	  }, {
	    key: 'update',
	    value: function update(data) {
	      _get(ScatterPlot.prototype.__proto__ || Object.getPrototypeOf(ScatterPlot.prototype), 'update', this).call(this, data);
	      this.draw(data);
	      return this;
	    }
	
	    /**
	    * remove - removes the plot from the DOM and any event listeners
	    *
	    * @return {object} this
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      if (this.resizeHandler) {
	        window.removeEventListener('resize', this.resizeHandler);
	      }
	      return this;
	    }
	
	    /**
	    * resize - re-renders the plot
	    *
	    * @return {object} this
	    */
	
	  }, {
	    key: 'resize',
	    value: function resize() {
	      this.update();
	      return this;
	    }
	
	    /*
	    * resetZoom - resets the zoom of the axes
	    *
	    */
	
	  }, {
	    key: 'resetZoom',
	    value: function resetZoom() {
	      if (this.zoom) {
	        return this.zoom.reset();
	      }
	    }
	  }]);
	
	  return ScatterPlot;
	}(_Chart3.default);
	
	module.exports = ScatterPlot;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Chart2 = __webpack_require__(16);
	
	var _Chart3 = _interopRequireDefault(_Chart2);
	
	var _LineGroup = __webpack_require__(10);
	
	var _LineGroup2 = _interopRequireDefault(_LineGroup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(4);
	
	var LineChart = function (_Chart) {
	  _inherits(LineChart, _Chart);
	
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
	  function LineChart(options) {
	    var _ret;
	
	    _classCallCheck(this, LineChart);
	
	    var _this = _possibleConstructorReturn(this, (LineChart.__proto__ || Object.getPrototypeOf(LineChart)).call(this, options));
	
	    _this.init();
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /**
	  * init - method to set/re-set the resizeHandler
	  * @returns {object} this
	  */
	
	
	  _createClass(LineChart, [{
	    key: 'init',
	    value: function init() {
	      _get(LineChart.prototype.__proto__ || Object.getPrototypeOf(LineChart.prototype), 'init', this).call(this);
	      var resizeEnabled = this.options.resize || true;
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
	
	  }, {
	    key: 'draw',
	    value: function draw(data) {
	      _get(LineChart.prototype.__proto__ || Object.getPrototypeOf(LineChart.prototype), 'draw', this).call(this, data);
	      var groups = this.groups.selectAll('.group').data(this.getGroups(), function (d) {
	        return d.id;
	      });
	      groups.enter().append(function (group) {
	        return group.detached();
	      });
	      groups.each(function (group) {
	        return group.update();
	      });
	      groups.exit().remove();
	      return this;
	    }
	
	    /**
	    * defaultGroup - creates a default group if an array is passed to the draw method
	    * @param {array} nodes, an array of Node's
	    */
	
	  }, {
	    key: 'defaultGroup',
	    value: function defaultGroup(nodes) {
	      var group = this.getGroups().find(function (g) {
	        return g.id === 'default_';
	      });
	      if (typeof group === 'undefined') {
	        if (this.options.group && this.options.group.onEnter) {
	          group = new _LineGroup2.default(this, { id: 'default_', onEnter: this.options.group.onEnter });
	        } else {
	          group = new _LineGroup2.default(this, { id: 'default_' });
	        }
	      }
	      nodes.forEach(function (d) {
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
	
	  }, {
	    key: 'mergeGroups',
	    value: function mergeGroups(groups) {
	      var _this2 = this;
	
	      var notMerged = Object.keys(this.groups_);
	      var addedNewGroup = false;
	      Object.keys(groups).forEach(function (k) {
	        var idx = -1;
	        var group = _this2.groups_[k];
	        if (typeof group === 'undefined') {
	          addedNewGroup = true;
	          if (groups[k] instanceof _LineGroup2.default) {
	            group = groups[k];
	            _this2.addGroup(group);
	          } else {
	            // TODO: allow the user to pass in an object with `data` array
	            throw new Error('Must be instance of a d3cf Group.');
	          }
	        } else {
	          idx = notMerged.indexOf(k);
	          if (idx >= 0) {
	            notMerged.splice(idx, 1);
	            // merge new group data into the existing group
	            groups[k].getNodes().forEach(function (n) {
	              group.addNode(n);
	            });
	          }
	        }
	      });
	      // remove the groups that have not been sliced
	      if (notMerged.length > 0) {
	        notMerged.forEach(function (k) {
	          _this2.removeGroup(k);
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
	
	  }, {
	    key: 'update',
	    value: function update(data) {
	      _get(LineChart.prototype.__proto__ || Object.getPrototypeOf(LineChart.prototype), 'update', this).call(this, data);
	      this.draw(data);
	      return this;
	    }
	
	    /**
	    * remove - removes the chart from the DOM and any event listeners
	    * @return {object} this
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      _get(LineChart.prototype.__proto__ || Object.getPrototypeOf(LineChart.prototype), 'remove', this).call(this);
	      if (this.resizeHandler) {
	        window.removeEventListener('resize', this.resizeHandler);
	      }
	      return this;
	    }
	
	    /**
	    * resize - re-renders the chart
	    * @return {object} this
	    */
	
	  }, {
	    key: 'resize',
	    value: function resize() {
	      this.update();
	      return this;
	    }
	  }]);
	
	  return LineChart;
	}(_Chart3.default);
	
	module.exports = LineChart;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=d3-chart-framework.js.map