const d3 = require('d3');

import Group from './Group';


class LineGroup extends Group {
  constructor(chart, options) {
    super(chart, options);
    this.s = options.s || 'steelblue';
    this.w = options.w || 1.5;
    this.meta = options.meta || {};
    const defaultGenerator = d3.line().x((d) => {
      return this.chart.axes.xScale(d.x1);
    }).y((d) => {
      return this.chart.axes.yScale(d.y1);
    });
    this.generator = options.generator || defaultGenerator;
    return this;
  }

  /**
  * update - handles updating the marker
  *
  * @return {object} this
  */
  update() {
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
    const filtered = this.chart.applyFilters(this.getNodes()).sort(cmp);
    this.group.attr('numNodes', filtered.length);
    // select
    const path = this.group.select('.d3cf-line');
    if (path.empty()) {
      // enter
      this.group.append('path')
        .datum(filtered, (d) => {
          return d.id;
        })
        .attr('fill', 'transparent')
        .attr('stroke', this.s)
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', this.w)
        .attr('class', 'd3cf-line')
        .attr('d', (d) => {
          return this.generator(d);
        })
        .call(this.onEnter);
    }
    // update
    path.attr('stroke', this.s)
      .attr('stroke-width', this.w)
      .attr('d', (d) => {
        return this.generator(d);
      }).call(this.onUpdate);
    // exit
    path.exit().remove().call(this.onExit);
    const nodes = this.group.selectAll('.node').data(filtered, (d) => {
      return d.id;
    });
    nodes.enter().append((node) => {
      return node.detached();
    }).call(this.onEnter);
    nodes.each((node) => {
      return node.update();
    }).call(this.onUpdate);
    nodes.exit().remove().call(this.onExit);
  }

}

module.exports = LineGroup;
