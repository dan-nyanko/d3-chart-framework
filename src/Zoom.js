const d3 = require('d3');
const _ = require('underscore');

const MINIMUM_ZOOM_THRESHOLD = 5;

class Zoom {
  /**
   * Zoom - a zoomable interface for a plot
   *
   * @param {object} plot - the plot to enable the zooming interface
   * @param {object} options - the object containing the passed in options to the plot constructor
   * @return {object} this
   */
  constructor(plot, options) {
    this.plot = plot;
    this.options = options;
    this.bandPos = [-1, -1];
    this.zoomArea = {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
    };
    this.drag = d3.drag();
    this.zoomGroup = plot.container.append('g').attr('class', 'd3cf-zoom');
    this.zoomBand = this.zoomGroup.append('rect').attr('width', 0).attr('height', 0).attr('x', 0).attr('y', 0).attr('class', 'd3cf-zoomBand');
    this.zoomOverlay = this.zoomGroup.append('rect').attr('width', plot.getWidth()).attr('height', plot.getHeight()).attr('transform', `translate(${plot.margins.left}, 0)`).attr('class', 'd3cf-zoomOverlay').call(this.drag);
    this.isZoomed = false;
    const self = this; // eslint-disable-line consistent-this
    this.drag.on('start.plot', function() { // eslint-disable-line func-names
      // Note: @ (this) is not the Zoom class but the DOM event
      const pos = d3.mouse(this); // eslint-disable-line no-invalid-this
      self.dragStart = pos;
    });
    this.drag.on('drag.plot', function() { // eslint-disable-line func-names
      // Note: @ (this) is not the Zoom class but the DOM event
      const pos = d3.mouse(this); // eslint-disable-line no-invalid-this
      _.bind(self.ondrag, self)(pos);
    });
    this.drag.on('end.plot', function() { // eslint-disable-line func-names
      // Note: @ (this) is not the Zoom class but the DOM event
      const pos = d3.mouse(this); // eslint-disable-line no-invalid-this
      let zoomX = false;
      if (Math.abs(self.dragStart[0] - pos[0]) > MINIMUM_ZOOM_THRESHOLD) {
        zoomX = true;
      }
      let zoomY = false;
      if (Math.abs(self.dragStart[1] - pos[1]) > MINIMUM_ZOOM_THRESHOLD) {
        zoomY = true;
      }
      _.bind(self.ondragend, self)(pos, zoomX && zoomY);
    });
  }

  /**
   * ondrag - the event handler for the ondrag event
   * @param {array} pos, the x,y position of the mouse
   */
  ondrag(pos) {
    if (pos[0] < this.bandPos[0]) {
      this.zoomBand.attr('transform', `translate(${(pos[0] + this.plot.margins.left)}, ${this.bandPos[1]})`);
    }
    if (pos[1] < this.bandPos[1]) {
      this.zoomBand.attr('transform', `translate(${(pos[0] + this.plot.margins.left)}, ${pos[1]})`);
    }
    if (pos[1] < this.bandPos[1] && pos[0] > this.bandPos[0]) {
      this.zoomBand.attr('transform', `translate(${(this.bandPos[0] + this.plot.margins.left)}, ${pos[1]})`);
    }
    if (this.bandPos[0] === -1) {
      this.bandPos = pos;
      this.zoomBand.attr('transform', `translate(${(this.bandPos[0] + this.plot.margins.left)}, ${this.bandPos[1]})`);
    }
    this.zoomBand.transition().duration(1).attr('width', Math.abs(this.bandPos[0] - pos[0])).attr('height', Math.abs(this.bandPos[1] - pos[1]));
  }

  /**
   * ondragend - the event handler for the ondragend event
   *
   * @param {array} pos - the x,y position of the mouse
   */
  ondragend(pos, zoom) {
    const x1 = this.plot.axes.xScale.invert(this.bandPos[0]);
    const x2 = this.plot.axes.xScale.invert(pos[0]);
    if (x1 < x2) {
      this.zoomArea.x1 = x1;
      this.zoomArea.x2 = x2;
    } else {
      this.zoomArea.x1 = x2;
      this.zoomArea.x2 = x1;
    }
    const y1 = this.plot.axes.yScale.invert(pos[1]);
    const y2 = this.plot.axes.yScale.invert(this.bandPos[1]);
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
  zoom() {
    this.isZoomed = true;
    this.plot.axes.zoom(this.zoomArea);
    this.plot.draw();
  }

  /**
   * resetZoom - reset the plot zoom back to the original viewBox
   *
   */
  reset() {
    this.isZoomed = false;
    this.plot.axes.reset();
    this.plot.draw();
  }

  /**
   * remove - remove the zoom interface from a plot
   *
   */
  remove() {
    this.zoomGroup.remove();
    this.drag.on('drag.plot', null);
    this.drag.on('end.plot', null);
    this.drag.on('start.plot', null);
  }
}


module.exports = Zoom;
