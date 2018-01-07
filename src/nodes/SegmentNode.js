import d3 from 'd3';
import _ from 'underscore';
import Node from './Node';

const MINIMUM_LINE_STROKE = 4;
const MINIMUM_CIRCLE_RADIUS = 5;
const MINIMUM_LINE_THRESHOLD = 2;

class SegmentNode extends Node {
  /**
   * SegmentNode - a line with beginning and end circles
   * @param {object} plot - an instance of a plot
   * @param {object} options - the options used to construct the SegmentNode
   * @param {number} options.x - the value for x position
   * @param {number} options.y - the value for y position
   * @param {number} options.width - the value for the width of the line
   * @param {number} options.height - the value for the height
   * @param {string} options.fill - the fill of the line
   * @param {number} options.opacity - the opacity of the line
   * @param {object} options.meta - the optional meta data associated with the node (e.g. used in the Tooltip)
   * @return {object} this
   */
  constructor(plot, options) {
    super(options);
    this.plot = plot;
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height || MINIMUM_LINE_STROKE;
    this.radius = options.radius || MINIMUM_CIRCLE_RADIUS;
    this.fill = options.fill || '#345e7e';
    this.opacity = options.opacity || 0.3;
    this.meta = options.meta || {};
    return this;
  }

  /**
   * remove - removes the node from the DOM
   *
   * @return {object} this
   */
  remove() {
    if (this.group) {
      return this.group.remove();
    }
  }

  /**
   * filteredOrderedPair - determine if the pair exists within the domain
   *
   */
  filteredOrderedPair(orderedPair) {
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
  update() {
    if (typeof this.group === 'undefined') {
      this.group = d3.select(`#${this.id}`);
    }
    const linePairs = [[this.plot.axes.xScale(this.x), this.plot.axes.yScale(this.y)], [this.plot.axes.xScale(this.width), this.plot.axes.yScale(this.y)]];
    const lineDistance = this.distance(linePairs);
    const totalRange = this.plot.axes.xScale.range()[1];
    const linePercentage = Math.floor((lineDistance / totalRange) * 100);
    const startPoint = this.filteredOrderedPair([this.plot.axes.xScale(this.x), this.plot.axes.yScale(this.y)]);
    const start = this.group.selectAll('.start-circle').data([this], (d) => {
      return d.id;
    });
    if (startPoint[0] !== null && startPoint[1] !== null) {
      start.enter().append('circle').attr('class', 'start-circle').style('fill', this.fill).attr('cx', startPoint[0]).attr('cy', startPoint[1]).attr('r', () => {
        let radius = this.radius;
        radius = Math.ceil((radius * (linePercentage / 100)) + radius);
        if (radius < MINIMUM_CIRCLE_RADIUS) {
          radius = MINIMUM_CIRCLE_RADIUS;
        }
        return radius;
      });
      start.attr('cx', startPoint[0]).attr('cy', startPoint[1]).attr('r', () => {
        let radius = this.radius;
        radius = Math.ceil((radius * (linePercentage / 100)) + radius);
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
      const line = this.group.selectAll('line').data([this], (d) => {
        return d.id;
      });
      line.enter().append('line').attr('x1', () => {
        if (linePairs[0][0] <= this.plot.axes.xScale.range()[0]) {
          return this.plot.axes.xScale.range()[0];
        }
        if (linePairs[0][0] >= this.plot.axes.xScale.range()[1]) {
          return null;
        }
        return linePairs[0][0];
      }).attr('y1', linePairs[0][1]).attr('x2', () => {
        if (linePairs[1][0] >= this.plot.axes.xScale.range()[1]) {
          return this.plot.axes.xScale.range()[1];
        }
        if (linePairs[1][0] <= this.plot.axes.xScale.range()[0]) {
          return null;
        }
        return linePairs[1][0];
      }).attr('y2', linePairs[1][1]).attr('stroke-width', () => {
        let height = this.height;
        height = Math.ceil((height * (linePercentage / 100)) + height);
        if (height < MINIMUM_LINE_STROKE) {
          return MINIMUM_LINE_STROKE;
        }
        return height;
      }).attr('stroke', this.fill);
      line.attr('x1', () => {
        if (linePairs[0][0] <= this.plot.axes.xScale.range()[0]) {
          return this.plot.axes.xScale.range()[0];
        }
        if (linePairs[0][0] >= this.plot.axes.xScale.range()[1]) {
          return null;
        }
        return linePairs[0][0];
      }).attr('y1', linePairs[0][1]).attr('x2', () => {
        if (linePairs[1][0] >= this.plot.axes.xScale.range()[1]) {
          return this.plot.axes.xScale.range()[1];
        }
        if (linePairs[1][0] <= this.plot.axes.xScale.range()[0]) {
          return null;
        }
        return linePairs[1][0];
      }).attr('y2', linePairs[1][1]).attr('stroke-width', () => {
        let height = this.height;
        height = Math.ceil((height * (linePercentage / 100)) + height);
        if (height < MINIMUM_LINE_STROKE) {
          return MINIMUM_LINE_STROKE;
        }
        return height;
      });
    } else {
      this.group.selectAll('line').remove();
    }
    const endPoint = this.filteredOrderedPair([this.plot.axes.xScale(this.width), this.plot.axes.yScale(this.y)]);
    if (linePercentage >= MINIMUM_LINE_THRESHOLD) {
      if (endPoint[0] !== null && endPoint[1] !== null) {
        const end = this.group.selectAll('.end-circle').data([this], (d) => {
          return d.id;
        });
        end.enter().append('circle').attr('class', 'end-circle').attr('cx', endPoint[0]).attr('cy', endPoint[1]).attr('r', () => {
          let radius = this.radius;
          radius = Math.ceil(((radius * linePercentage) / 100) + radius);
          if (radius < MINIMUM_CIRCLE_RADIUS) {
            radius = MINIMUM_CIRCLE_RADIUS;
          }
          return radius;
        }).style('fill', this.fill);
        end.attr('class', 'end-circle').attr('cx', endPoint[0]).attr('cy', endPoint[1]).attr('r', () => {
          let radius = this.radius;
          radius = Math.ceil(((radius * linePercentage) / 100) + radius);
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
  detached() {
    this.remove();
    this.group = d3.select(document.createElementNS(d3.namespaces.svg, 'g')).attr('id', this.id).attr('class', 'node').attr('opacity', this.opacity).remove();
    this.update();
    this.group.node();
  }

  /**
   * distance - determine the distance between two pairs
   *
   */
  distance(pairs) {
    return Math.sqrt(Math.pow(Math.abs(pairs[0][0] - pairs[1][0]), 2) + Math.pow(Math.abs(pairs[0][1] - pairs[1][1]), 2));
  }

  /**
   * groupOverlappingSegments - group overlapping segments together
   *
   * @param {array} segments - an array of SegmentNode's
   * @return {object} groups - groups of overlapping segments
   */
  static groupOverlappingSegments(segments) {
    const groups = {};
    const segmentsByHeightAndCumulative = _.groupBy(segments, (segment) => {
      let c = false;
      if (typeof segment.meta.cumulative === 'undefined') {
        c = false;
      } else {
        c = segment.meta.cumulative;
      }
      return `${segment.y}:${c}`;
    });
    Object.keys(segmentsByHeightAndCumulative).forEach((key) => {
      const values = segmentsByHeightAndCumulative[key];
      values.sort((a, b) => {
        return a.x - b.x;
      });
      let i = 0;
      const points = [];
      while (i < values.length) {
        if (i === 0) {
          points[0] = values[0];
          const groupName = `${values[0].w}:${key}`;
          groups[groupName] = [values[0]];
          i++;
          continue; // eslint-disable-line no-continue
        }
        const lastIdx = points.length - 1;
        if (lastIdx < 0) {
          break;
        }
        const lastPoint = points[lastIdx];
        if (values[i].x >= lastPoint.x && values[i].w <= lastPoint.w) {
          const groupName = `${lastPoint.w}:${key}`;
          let group = groups[groupName];
          if (typeof group === 'undefined') {
            group = [];
          }
          group.push(values[i]);
          i++;
        } else {
          points[lastIdx + 1] = values[i];
          const groupName = `${values[i].w}:${key}`;
          groups[groupName] = [values[i]];
          i++;
        }
      }
    });
    return groups;
  }
}


module.exports = SegmentNode;
