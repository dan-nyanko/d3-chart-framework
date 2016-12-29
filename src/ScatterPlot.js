const _ = require('underscore');

import Plot from './Plot';


class ScatterPlot extends Plot {
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
  constructor(options) {
    super(options);
    this.init();
    return this;
  }

  /*
  * init - method to set/re-set the resizeHandler
  * @returns {object} this
  */
  init() {
    super.init();
    const resizeEnabled = this.options.resize || true;
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
  draw(data) {
    super.draw(data);
    const groups = this.groups.selectAll('.group').data(this.getGroups(), (d) => {
      return d.id;
    });
    groups.enter().append((group) => {
      return group.detached();
    });
    groups.each((group) => {
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
  update(data) {
    super.update(data);
    this.draw(data);
    return this;
  }

  /*
  * remove - removes the plot from the DOM and any event listeners
  * @return {object} this
  */
  remove() {
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
    return this;
  }

  /*
  * resize - re-renders the plot
  * @return {object} this
  */
  resize() {
    this.update();
    return this;
  }

  /*
  * resetZoom - resets the zoom of the axes
  */
  resetZoom() {
    if (this.zoom) {
      return this.zoom.reset();
    }
  }
}


module.exports = ScatterPlot;
