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
	
	var _Node = __webpack_require__(8);
	
	Object.defineProperty(exports, 'Node', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Node).default;
	  }
	});
	
	var _Plot = __webpack_require__(9);
	
	Object.defineProperty(exports, 'Plot', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Plot).default;
	  }
	});
	
	var _ScatterPlot = __webpack_require__(12);
	
	Object.defineProperty(exports, 'ScatterPlot', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ScatterPlot).default;
	  }
	});
	
	var _Tooltip = __webpack_require__(10);
	
	Object.defineProperty(exports, 'Tooltip', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Tooltip).default;
	  }
	});
	
	var _Zoom = __webpack_require__(11);
	
	Object.defineProperty(exports, 'Zoom', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Zoom).default;
	  }
	});
	
	var _Heapsort = __webpack_require__(13);
	
	Object.defineProperty(exports, 'Heapsort', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Heapsort).default;
	  }
	});
	
	var _HeapsortImmutable = __webpack_require__(14);
	
	Object.defineProperty(exports, 'HeapsortImmutable', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_HeapsortImmutable).default;
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
	
	/*
	* getDatetimeUnit - determine the unit of time for padding the axis
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
	  function Axes(plot, options) {
	    _classCallCheck(this, Axes);
	
	    this.plot = plot;
	    this.options = options || { x: { title: 'x', type: 'numeric' }, y: { title: 'y', type: 'numeric' }, grid: true, filter: true };
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
	
	
	  _createClass(Axes, [{
	    key: 'init',
	    value: function init(xDomain, yDomain) {
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
	        this.xGroup = this.plot.container.append('g').attr('class', 'x d3cf-axis').attr('transform', 'translate(' + this.plot.margins.left + ', ' + this.plot.getHeight() + ')').call(this.xAxis);
	        this.xGroup.selectAll('text').style('text-anchor', 'end').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', function () {
	          return 'rotate(-65)';
	        });
	        this.xGroup.append('text').attr('class', 'd3cf-axis-label').attr('dx', this.plot.width / 2 - (this.plot.margins.right + this.plot.margins.left) / 2).attr('dy', this.plot.margins.bottom + 30).style('text-anchor', 'middle').text(this.options.x.title);
	      } else {
	        this.xGroup = this.plot.container.append('g').attr('class', 'd3cf-axis').attr('transform', 'translate(' + this.plot.margins.left + ', ' + this.plot.getHeight() + ')').call(this.xAxis);
	        this.xGroup.append('text').attr('dx', this.plot.width / 2 - (this.plot.margins.right + this.plot.margins.left) / 2).attr('dy', this.plot.margins.bottom).attr('class', 'd3cf-axis-label').style('text-anchor', 'middle').text(this.options.x.title);
	      }
	      if (yDomain) {
	        this.yScale = d3.scaleLinear().domain(yDomain).range([this.plot.getHeight(), 0]);
	      } else {
	        this.yScale = d3.scaleLinear().domain(this.currentMinMax[1]).range([this.plot.getHeight(), 0]);
	      }
	      this.yAxis = d3.axisLeft().scale(this.yScale);
	      this.yGroup = this.plot.container.append('g').attr('class', 'y d3cf-axis').attr('transform', 'translate(' + this.plot.margins.left + ', 0)').call(this.yAxis);
	      this.yGroup.append('text').attr('transform', 'rotate(-90)').attr('dx', -(this.plot.height / 2) + (this.plot.margins.top + this.plot.margins.bottom) / 2).attr('dy', -this.plot.margins.left).attr('class', 'd3cf-axis-label').style('text-anchor', 'middle').text(this.options.y.title);
	      if (this.options.grid) {
	        this.grid = new _Grid2.default(this, this.plot);
	      }
	    }
	
	    /*
	    * setDomain - sets the x, y domains based on the passed in data
	    * @param {array} data, an array of {object} for each marker
	    */
	
	  }, {
	    key: 'setDomain',
	    value: function setDomain(data) {
	      var _this = this;
	
	      var xMin = 0;
	      var xMax = 0;
	      if (this.options.x.type === 'datetime') {
	        xMin = Axes.minDatetime(_.pluck(data, 'x1'));
	        var x2 = _.pluck(data, 'x2');
	        if (x2.length > 0) {
	          xMax = Axes.maxDatetime(_.pluck(data, 'x2'));
	        } else {
	          xMax = Axes.maxDatetime(_.pluck(data, 'x1'));
	        }
	      } else {
	        var _x = _.pluck(data, 'x2');
	        if (_x.length > 0) {
	          xMax = Axes.maxNumeric(_.pluck(data, 'x2'));
	        } else {
	          xMax = Axes.maxNumeric(_.pluck(data, 'x1'));
	        }
	      }
	      var yMin = 0;
	      var yMax = Axes.maxNumeric(_.pluck(data, 'y1'));
	      this.xScale.domain([xMin, xMax]);
	      this.yScale.domain([yMin, yMax]);
	      if (this.initialized === false) {
	        this.initialMinMax = [[xMin, xMax], [yMin, yMax]];
	        if (this.options.filter) {
	          this.plot.addFilter('_domain', function (d) {
	            // TODO: should this scope be the Plot or the Axes?
	            var x1 = _this.xScale.domain()[0];
	            if (x1 instanceof Date) {
	              x1 = x1.getTime();
	            }
	            var x2 = _this.xScale.domain()[1];
	            if (x2 instanceof Date) {
	              x2 = x2.getTime();
	            }
	            var y1 = _this.yScale.domain()[0];
	            var y2 = _this.yScale.domain()[1];
	            if (d.hasOwnProperty('x2')) {
	              if (d.x1 >= x1 && d.x2 <= x2 && d.y1 >= y1 && d.y1 <= y2) {
	                return d;
	              }
	            } else {
	              if (d.x1 >= x1 && d.x2 <= x2 && d.y1 >= y1 && d.y1 <= y2) {
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
	
	  }, {
	    key: 'setInitialMinMax',
	    value: function setInitialMinMax(newMinMax) {
	      this.initialMinMax = newMinMax;
	    }
	
	    /*
	    * update - update the x,y axes using the zoom domain
	    * @param {array} data, an array of {object} for each marker
	    */
	
	  }, {
	    key: 'update',
	    value: function update(data) {
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
	
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.remove();
	      this.init(this.initialMinMax[0], this.initialMinMax[1]);
	      return this;
	    }
	
	    /*
	    * zoom - zooms the x,y axes based on the zoomArea object
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
	      var trans = this.plot.container.transition().duration(750);
	      this.xGroup.transition(trans).call(this.xAxis);
	      this.xGroup.selectAll('g').selectAll('text').style('text-anchor', 'end').attr('dx', '-.8em').attr('dy', '.15em').attr('transform', 'rotate(-65)');
	      this.yGroup.transition(trans).call(this.yAxis);
	      if (this.grid) {
	        this.grid.remove();
	        this.grid = new _Grid2.default(this, this.plot);
	      }
	      return this;
	    }
	
	    /*
	    * remove - removes the x,y axis groups from the plot
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
	
	    /*
	    * formatDate - a method that formats the axis date label
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
	
	    /*
	    * maxNumeric - determine the maximum value with padding. Padding is determined
	    * by the number of digits ^ 10 / 10, unless number of digets == 10 then return
	    * 10
	    * @param {array} data, an array of positive integers
	    * @return {number} max
	    */
	
	  }], [{
	    key: 'maxNumeric',
	    value: function maxNumeric(data) {
	      var m = _.max(data);
	      var l = String(m).split('').length;
	      if (l === 1) {
	        return 10;
	      }
	      var p = Math.pow(10, l) / 10;
	      return m + p;
	    }
	
	    /*
	    * minNumeric - determine the minimum value with padding. Padding is determined
	    * by the number of digits ^ 10 / 10, unless number of digets == 10 then return
	    * 10
	    * @param {array} data, an array of positive integers
	    * @return {number} max
	    */
	
	  }, {
	    key: 'minNumeric',
	    value: function minNumeric(data) {
	      var m = _.min(data);
	      var l = String(m).split('').length;
	      if (l === 1) {
	        return 10;
	      }
	      var p = Math.pow(10, l) / 10;
	      return m + p;
	    }
	
	    /*
	    * maxDatetime - determine the maximum value with padding
	    * @param {array} data, an array of timestamps in milliseconds
	    * @return {number} max, maximum datetime value
	    */
	
	  }, {
	    key: 'maxDatetime',
	    value: function maxDatetime(data) {
	      var min = moment(_.min(data));
	      var max = moment(_.max(data));
	      var unit = getDatetimeUnit(min, max);
	      return moment(max).add(1, unit).valueOf();
	    }
	
	    /*
	    * minDatetime - determine the minimum value with padding
	    * @param {array} data, an array of timestamps in milliseconds
	    * @return {number} min, minimum datetime value
	    */
	
	  }, {
	    key: 'minDatetime',
	    value: function minDatetime(data) {
	      var min = moment(_.min(data));
	      var max = moment(_.max(data));
	      var unit = getDatetimeUnit(min, max);
	      return moment(min).subtract(1, unit).valueOf();
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
	  /*
	  * Grid - constructs grids lines for the plot
	  * @param {object} axes, the axes to determine xScale, yScale
	  * @param {object} plot, the plot to append the axis
	  * @param {object} options, the properties for the axis
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
	
	/*
	* InvalidNodeError - error thrown when an object is not instanceof Node
	*
	* @param {string} [message], (optional) the message to the user
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
	
	/*
	* InvalidGroupError - error thrown when an object is not instanceof Group
	*
	* @param {string} [message], (optional) the message to the user
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
	  function Group(plot, options) {
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
	    this.plot = plot;
	    this.plot.addGroup(this);
	    return this;
	  }
	
	  /*
	  * size - returns the size of the Group's nodes
	  * @return {number} size, the size of the group
	  */
	
	
	  _createClass(Group, [{
	    key: 'size',
	    value: function size() {
	      return Object.values(this.nodes_).length;
	    }
	
	    /*
	    * addNode - adds a node to this group
	    * @param {object} node, the node to add
	    * @throws {InvalidGroupError} error
	    * @return {Group} this
	    */
	
	  }, {
	    key: 'addNode',
	    value: function addNode(node) {
	      if (!node instanceof _Node2.default) {
	        throw new _Errors.InvalidNodeError();
	      }
	      this.nodes_[node.id] = node;
	      return this;
	    }
	
	    /*
	    * removeNode - removes a node from this group
	    * @param {string} id, the id to remove
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
	
	    /*
	    * getNodes - returns the nodes associated with this group
	    * @return {array} nodes, the nodes associated with this group
	    */
	
	  }, {
	    key: 'getNodes',
	    value: function getNodes() {
	      return Object.values(this.nodes_);
	    }
	
	    /*
	    * update - handles updating the marker
	    * @return {object} this
	    */
	
	  }, {
	    key: 'update',
	    value: function update() {
	      if (typeof this.group === 'undefined') {
	        return;
	      }
	      var filtered = this.applyFilters();
	      var filteredLen = filtered.length;
	      this.group.attr('numNodes', filteredLen);
	      var nodes = this.group.selectAll('.node').data(filtered, function (d) {
	        return d.id;
	      });
	      nodes.enter().append(function (node) {
	        return node.detached();
	      }).call(this.onEnter);
	      nodes.each(function (node) {
	        return node.update();
	      }).call(this.onUpdate);
	      return nodes.exit().remove().call(this.onExit);
	    }
	
	    /*
	    * detached - builds a detached svg group and returns the node
	    * @return {object} node, the SVG node to append to the parent during .call()
	    */
	
	  }, {
	    key: 'detached',
	    value: function detached() {
	      this.remove();
	      this.group = d3.select(document.createElementNS(d3.namespaces.svg, 'g')).attr('id', this.id).attr('class', 'd3cf-group').remove();
	      this.update();
	      return this.group.node();
	    }
	
	    /*
	    * applyFilters - apply any filters from the plot
	    * @param {object} filters, an array of filters to apply
	    * @returns {array} filtered, the filtered data
	    */
	
	  }, {
	    key: 'applyFilters',
	    value: function applyFilters(filters) {
	      var filters_ = filters || this.plot.filters;
	      var filtered = [];
	      if (this.nodes_) {
	        filtered = this.getNodes().filter(function (d) {
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
	
	    /*
	    * remove - removes the group from the DOM
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      if (this.group) {
	        this.group.remove();
	      }
	    }
	
	    /*
	    * destroy - destroys the group and any associated elements
	    */
	
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.remove();
	      this.plot.removeLayer(this.id);
	      this.nodes = null;
	      this.plot = null;
	      this.group = null;
	    }
	
	    /*
	    * onEnter - the default event handler for a group. This may be overridden or
	    *   a new event handler passed into the constructor as `options.onEnter`
	    * @param {object} selections - the d3 selection object containing the children for this group
	    */
	
	  }], [{
	    key: 'onEnter',
	    value: function onEnter() {}
	
	    /*
	    * onUpdate - the default event handler for a group. This may be overridden or
	    *   a new event handler passed into the constructor as `options.onUpdate`
	    * @param {object} selections - the d3 selection object for this group
	    */
	
	  }, {
	    key: 'onUpdate',
	    value: function onUpdate() {}
	
	    /*
	    * onExit - the default event handler for a group. This may be overridden or
	    *   a new event handler passed into the constructor as `options.onExit`
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
	  /*
	  * Node - base class
	  * @param {object} options, the options used to construct the SegmentMarker
	  * @param {object} options.meta, the optional meta data associated with the node (e.g. used in the Tooltip)
	  * @return {object} this
	  */
	  function Node(options) {
	    _classCallCheck(this, Node);
	
	    this.id = options.id || genId();
	    this.meta = options.meta || {};
	    this.group = null;
	    return this;
	  }
	
	  /*
	  * remove - removes the marker from the DOM
	  */
	
	
	  _createClass(Node, [{
	    key: 'remove',
	    value: function remove() {
	      if (this.group) {
	        return this.group.remove();
	      }
	    }
	
	    /*
	    * detached - builds a detached svg group and returns the node
	    * @return {object} node, the SVG node to append to the parent during .call()
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
	
	var _Axes = __webpack_require__(1);
	
	var _Axes2 = _interopRequireDefault(_Axes);
	
	var _Tooltip = __webpack_require__(10);
	
	var _Tooltip2 = _interopRequireDefault(_Tooltip);
	
	var _Zoom = __webpack_require__(11);
	
	var _Zoom2 = _interopRequireDefault(_Zoom);
	
	var _Group = __webpack_require__(7);
	
	var _Group2 = _interopRequireDefault(_Group);
	
	var _Errors = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	var _ = __webpack_require__(4);
	
	var MINIMUM_PLOT_HEIGHT = 300;
	
	var Plot = function () {
	  /*
	  * Plot - creates a new instance of a plot
	  * @param {object} options, the options to create a ScatterPlot
	  * @param {string} containerID, the id of the ScatterPlot container div
	  * @param {string} svgcontainerClass, the desired class of the constructed svg element
	  * @param {object} tooltip,
	  * @param {number} tooltip.opacity, the background opacity for the tooltip
	  * @param {object} tooltip.template, the compiled template
	  * @param {boolean} scale, scale the svg on window resize @default false
	  * @param {boolean} resize, resize the svg on window resize @default true
	  * @returns {object} this, returns self
	  */
	  function Plot(options) {
	    _classCallCheck(this, Plot);
	
	    this.options = options;
	    this.drawn = false;
	    this.filters = options.filters || {};
	    this.groups_ = {};
	    return this;
	  }
	
	  /*
	  * init - method to initialize the plot, allows the plot to be re-initialized
	  *  on resize while keeping the current plot data in memory
	  * @returns {object} this
	  */
	
	
	  _createClass(Plot, [{
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
	
	    /*
	    * setDimensions - method to set the dimensions of the plot based on the current window
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
	      if (this.height < MINIMUM_PLOT_HEIGHT) {
	        this.height = MINIMUM_PLOT_HEIGHT;
	      }
	      this.viewBoxWidth = this.width + this.margins.left + this.margins.right;
	      this.viewBoxHeight = this.height + this.margins.top + this.margins.bottom;
	      return this;
	    }
	
	    /*
	    * update - update the width and height attributes of the root and container
	    *  elements. then call update on the plot axes
	    * @param {array} nodes, an array of {object} for each node
	    * @returns {object} this
	    */
	
	  }, {
	    key: 'update',
	    value: function update(nodes) {
	      this.setDimensions();
	      this.root.attr('width', this.viewBoxWidth).attr('height', this.viewBoxHeight);
	      this.container.attr('width', this.width).attr('height', this.height).attr('transform', 'translate(' + this.margins.left + ', ' + this.margins.top + ')');
	      if (typeof nodes === 'undefined') {
	        this.axes.update(this.getGroupsNodes());
	      } else {
	        if (nodes instanceof Array) {
	          this.axes.update(nodes);
	          if (this.axes.initialized === true) {
	            this.axes.setInitialMinMax(this.axes.currentMinMax);
	          }
	        } else {
	          var shouldSetInitialMinMax = this.mergeGroups(nodes);
	          this.axes.update(this.getGroupsNodes(false));
	          if (shouldSetInitialMinMax) {
	            this.axes.setInitialMinMax(this.axes.currentMinMax);
	          }
	        }
	      }
	      return this;
	    }
	
	    /*
	    * draw - draws the markers on the plot
	    * @note this will automatically show/hide a warning message if the data
	    * is empty. Do not call super() to override this behavior.
	    * @param {array} nodes, an array of {object} for each marker
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
	
	    /*
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
	          group = new _Group2.default(this, { id: 'default_', onEnter: this.options.group.onEnter });
	        } else {
	          group = new _Group2.default(this, { id: 'default_' });
	        }
	      }
	      nodes.forEach(function (d) {
	        return group.addNode(d);
	      });
	      return group;
	    }
	
	    /*
	    * mergeGroups - merge groups from data passed directly to the draw method
	    * @param {object} nodes, a grouping of nodes
	    * @return {boolean} shouldReset, should the axes domain be reset to currentMinMax
	    */
	
	  }, {
	    key: 'mergeGroups',
	    value: function mergeGroups(groups) {
	      var _this = this;
	
	      var notMerged = Object.keys(this.groups_);
	      var hasNewGroup = false;
	      Object.keys(groups).forEach(function (k) {
	        var idx = -1;
	        var group = _this.groups_[k];
	        if (typeof group === 'undefined') {
	          hasNewGroup = true;
	          group = new _Group2.default(_this, { id: k, onEnter: _this.options.group.onEnter });
	        } else {
	          idx = notMerged.indexOf(k);
	          if (idx >= 0) {
	            notMerged.splice(idx, 1);
	          }
	        }
	        groups[k].forEach(function (m) {
	          group.addNode(m);
	        });
	      });
	      if (notMerged.length > 0) {
	        notMerged.forEach(function (k) {
	          _this.removeGroup(k);
	        });
	        return true;
	      }
	      if (hasNewGroup && this.axes.initialized === true) {
	        return true;
	      }
	      return false;
	    }
	
	    /*
	    * getWidth
	    * @return {number} width (excluding margins) for the root svg
	    */
	
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      return this.width - (this.margins.left + this.margins.right);
	    }
	
	    /*
	    * getHeigth
	    * @return {number} width (excluding margins) for the root svg
	    */
	
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      return this.height - (this.margins.top + this.margins.bottom);
	    }
	
	    /*
	    * showWarn - shows a warning message in the center of the plot
	    * @param {string} m, the message to display
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
	
	    /*
	    * removeWarn - removes the warning message from the plot
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
	
	    /*
	    * remove - removes the plot from the DOM and any event listeners
	    * @return {object} this
	    */
	
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.zoom.remove();
	      this.tooltip.remove();
	      this.axes.remove();
	      this.container.remove();
	      this.root.remove();
	    }
	
	    /*
	    * destroy - destroys the plot and any associated elements
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
	
	    /*
	    * addGroup
	    * @param {object} group, add a group to the plot
	    * @throws {InvalidGroupError} error
	    * @return {Plot} this
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
	
	    /*
	    * removeGroup
	    * @param {string} id, the group to remove
	    */
	
	  }, {
	    key: 'removeGroup',
	    value: function removeGroup(id) {
	      if (this.groups_.hasOwnProperty(id)) {
	        delete this.groups_[id];
	      }
	    }
	
	    /*
	    * getGroups - returns the groups associated with this plot
	    * @return {array} groups, the groups associated with this plot
	    */
	
	  }, {
	    key: 'getGroups',
	    value: function getGroups() {
	      return Object.values(this.groups_);
	    }
	
	    /*
	    * getGroups - returns the size of all the groups
	    * @param {boolean} shouldFilter, should the nodes be filtered by domain
	    * @return {Number} size, the size of all the groups
	    */
	
	  }, {
	    key: 'getGroupsSize',
	    value: function getGroupsSize(shouldFilter) {
	      var _this2 = this;
	
	      this.getGroups().reduce(function (prev, nextObj) {
	        if (shouldFilter) {
	          return prev + nextObj.applyFilters().length;
	        }
	        var filters = Object.assign({}, _this2.filters);
	        if (filters.hasOwnProperty('_domain')) {
	          delete filters._domain;
	        }
	        return prev + nextObj.applyFilters(filters).length;
	      }, 0);
	    }
	
	    /*
	    * getGroupsNodes - returns all the nodes for each group
	    * @param {boolean} shouldFilter, should the nodes be filtered by domain
	    * @return {array} nodes, an array of nodes
	    */
	
	  }, {
	    key: 'getGroupsNodes',
	    value: function getGroupsNodes(shouldFilter) {
	      var _this3 = this;
	
	      this.getGroups().reduce(function (prevArr, nextObj) {
	        if (shouldFilter) {
	          return prevArr.concat(nextObj.applyFilters());
	        }
	        var filters = Object.assign({}, _this3.filters);
	        if (filters.hasOwnProperty('_domain')) {
	          delete filters._domain;
	        }
	        return prevArr.concat(nextObj.applyFilters(filters));
	      }, []);
	    }
	
	    /*
	    * addFilter - add a filter to the plot
	    * @param {string} name, the name of the filter
	    * @param {function} fn, the function to be applied to the data
	    * @return {object} this
	    */
	
	  }, {
	    key: 'addFilter',
	    value: function addFilter(name, fn) {
	      this.filters[name] = _.bind(fn, this);
	      return this;
	    }
	
	    /*
	    * removeFilter - removes a filter from the plot
	    * @param {string} name, the name of the filter
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
	  }]);
	
	  return Plot;
	}();
	
	module.exports = Plot;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	var _ = __webpack_require__(4);
	
	var Tooltip = function () {
	  /*
	  * Tooltip - allows for an HTML div to be faded in/out on mouseover of a marker
	  * @param {object} plot, the plot append the tooltip
	  * @param {object} options, the options for the plot
	  * @param {object} options.tooltip, the options for the tooltip
	  * @param {number} options.opacity, the opacity of the tooltip
	  * @param {object} options.template, an underscore compiled template
	  * @return {object} this
	  */
	  function Tooltip(plot, options) {
	    _classCallCheck(this, Tooltip);
	
	    this.tooltipOpts = options.tooltip || {
	      'opacity': 1,
	      'template': _.template('<span style="font-weight: bold;"><%= obj.id %></span><p>x1: <%= obj.x1 %> x2: <%= obj.x2 %> y: <%= obj.y1 %></p>')
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
	
	    /*
	    * mouseout - unbound method for mouseout event
	    * @return {object} this
	    */
	
	  }, {
	    key: 'mouseout',
	    value: function mouseout() {
	      this.element.transition().duration(500).style('opacity', 0);
	      return this;
	    }
	
	    /*
	    * remove - removes the element from the DOM
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var d3 = __webpack_require__(3);
	var _ = __webpack_require__(4);
	
	var MINIMUM_ZOOM_THRESHOLD = 5;
	
	var Zoom = function () {
	  /*
	  * Zoom - a zoomable interface for a plot
	  * @param {object} plot, the plot to enable the zooming interface
	  * @param {object} options, the object containing the passed in options to the plot constructor
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
	
	    /*
	    * ondragend - the event handler for the ondragend event
	    * @param {array} pos, the x,y position of the mouse
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
	
	    /*
	    * zoom - the zooming method called an the end of ondragend
	    */
	
	  }, {
	    key: 'zoom',
	    value: function zoom() {
	      this.plot.axes.zoom(this.zoomArea);
	      this.plot.draw();
	    }
	
	    /*
	    * resetZoom - reset the plot zoom back to the original viewBox
	    */
	
	  }, {
	    key: 'reset',
	    value: function reset() {
	      this.plot.axes.reset();
	      this.plot.draw();
	    }
	
	    /*
	    * remove - remove the zoom interface from a plot
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Plot2 = __webpack_require__(9);
	
	var _Plot3 = _interopRequireDefault(_Plot2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _ = __webpack_require__(4);
	
	var ScatterPlot = function (_Plot) {
	  _inherits(ScatterPlot, _Plot);
	
	  /*
	  * ScatterPlot - constructs the root SVG element to contain the ScatterPlot
	  * @param {object} options, the options to create a ScatterPlot
	  * @param {string} containerID, the id of the ScatterPlot container div
	  * @param {string} svgcontainerClass, the desired class of the constructed svg element
	  * @param {object} tooltip,
	  * @param {number} tooltip.opacity, the background opacity for the tooltip
	  * @param {object} tooltip.template, the compiled template
	  * @param {boolean} scale, scale the svg on window resize @default false
	  * @param {boolean} resize, resize the svg on window resize @default true
	  * @returns {object} this, returns self
	  * example usage:
	  *  within your template add
	  ```
	   <div id="scatterPlot" class="scatterPlot-container">
	  ```
	  *  within your template helper, construct a new ScatterPlot instance
	  ```
	    plot = new ScatterPlot(options)
	  ```
	  * example datetime data:
	  ```
	    data = [
	      {x: 1443380879164, y: 3, w: 1445972879164}, {x: 1467054386392, y: 31, w: 1467659186392}, {x: 1459105926404, y: 15, w: 1469646565130},
	      {x: 1443380879164, y: 3, w: 1448654879164}, {x: 1467054386392, y: 31, w: 1468263986392}, {x: 1459105926404, y: 15, w: 1467659365130},
	      {x: 1443380879164, y: 3, w: 1451246879164}, {x: 1467054386392, y: 31, w: 1468868786392}, {x: 1459105926404, y: 15, w: 1467918565130},
	    ]
	  ```
	  * example numeric data:
	  ```
	    data = [
	      {x: 0, y: 3, w: 4}, {x: 5, y: 31, w: 9}, {x: 11, y: 45, w: 15},
	      {x: 1, y: 3, w: 4}, {x: 5, y: 31, w: 15}, {x: 12, y: 45, w: 14},
	      {x: 2, y: 3, w: 4}, {x: 6, y: 31, w: 7}, {x: 12, y: 45, w: 17},
	    ]
	  ```
	  */
	  function ScatterPlot(options) {
	    var _ret;
	
	    _classCallCheck(this, ScatterPlot);
	
	    var _this = _possibleConstructorReturn(this, (ScatterPlot.__proto__ || Object.getPrototypeOf(ScatterPlot)).call(this, options));
	
	    _this.init();
	    return _ret = _this, _possibleConstructorReturn(_this, _ret);
	  }
	
	  /*
	  * init - method to set/re-set the resizeHandler
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
	
	    /*
	    * draw - draw using d3 select.data.enter workflow
	    * @param {array} data, an array of {object} for each marker
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
	
	    /*
	    * update the dimensions of the plot (axes, gridlines, then redraw)
	    * @param {array} data, an array of {object} for each marker
	    * @returns {object} this
	    */
	
	  }, {
	    key: 'update',
	    value: function update(data) {
	      _get(ScatterPlot.prototype.__proto__ || Object.getPrototypeOf(ScatterPlot.prototype), 'update', this).call(this, data);
	      this.draw(data);
	      return this;
	    }
	
	    /*
	    * remove - removes the plot from the DOM and any event listeners
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
	
	    /*
	    * resize - re-renders the plot
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
	}(_Plot3.default);
	
	module.exports = ScatterPlot;

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Heapsort = function () {
	  function Heapsort() {
	    _classCallCheck(this, Heapsort);
	  }
	
	  _createClass(Heapsort, [{
	    key: "heapify",
	    value: function heapify(array, index, heapSize, cmp) {
	      var left = 2 * index + 1;
	      var right = 2 * index + 2;
	      var largest = index;
	
	      if (left < heapSize && cmp(array[left], array[index]) > 0) {
	        largest = left;
	      }
	
	      if (right < heapSize && cmp(array[right], array[largest]) > 0) {
	        largest = right;
	      }
	
	      if (largest !== index) {
	        var temp = array[index];
	        array[index] = array[largest];
	        array[largest] = temp;
	        this.heapify(array, largest, heapSize, cmp);
	      }
	    }
	  }, {
	    key: "buildMaxHeap",
	    value: function buildMaxHeap(array, cmp) {
	      for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
	        this.heapify(array, i, array.length, cmp);
	      }
	      return array;
	    }
	  }, {
	    key: "sort",
	    value: function sort(array, cmp) {
	      var comparator = cmp || this.comparator;
	      var size = array.length;
	      this.buildMaxHeap(array, comparator);
	      for (var i = array.length - 1; i > 0; i -= 1) {
	        var temp = array[0];
	        array[0] = array[i];
	        array[i] = temp;
	        size -= 1;
	        this.heapify(array, 0, size, comparator);
	      }
	      return array;
	    }
	  }, {
	    key: "comparator",
	    value: function comparator(a, b) {
	      return a - b;
	    }
	  }]);
	
	  return Heapsort;
	}();
	
	module.exports = Heapsort;

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var HeapsortImmutable = function () {
	  function HeapsortImmutable() {
	    _classCallCheck(this, HeapsortImmutable);
	  }
	
	  _createClass(HeapsortImmutable, [{
	    key: "sort",
	    value: function sort(list) {
	      var _this = this;
	
	      var h = this.heapify(list);
	      return h.reduce(function (state, listItem, index) {
	        return [].concat(_toConsumableArray(state.slice(0, index + 1)), _toConsumableArray(_this.heapify(state.slice(index + 1))));
	      }, h);
	    }
	  }, {
	    key: "heapify",
	    value: function heapify(list) {
	      return list.reduceRight(this.reducer.bind(this), list);
	    }
	  }, {
	    key: "reducer",
	    value: function reducer(state, listItem, index) {
	      var parentIndex = this.getParentIndex(index);
	      if (parentIndex > -1 && state[parentIndex] < state[index]) {
	        state = this.swap(state, parentIndex, index); // eslint-disable-line  no-param-reassign
	      }
	      return state;
	    }
	  }, {
	    key: "swap",
	    value: function swap(list, a, b) {
	      return list.map(function (item, index) {
	        if (index === a) {
	          item = list[b]; // eslint-disable-line  no-param-reassign
	        }
	        if (index === b) {
	          item = list[a]; // eslint-disable-line  no-param-reassign
	        }
	        return item;
	      });
	    }
	  }, {
	    key: "getParentIndex",
	    value: function getParentIndex(n) {
	      return Math.floor((n - 1) / 2);
	    }
	  }]);
	
	  return HeapsortImmutable;
	}();
	
	module.exports = HeapsortImmutable;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=d3-chart-framework.js.map