import Group from './Group';


class BarGroup extends Group {
  constructor(chart, options) {
    super(chart, options);
    return this;
  }

  /**
  * update - handles updating the marker
  *
  * @return {object} this
  */
  update() {
    const filtered = this.chart.applyFilters(this.getNodes());
    console.log('filtered: ', filtered);
    this.group.attr('numNodes', filtered.length);
    const nodes = this.group.selectAll('.d3cf-node').data(filtered, (d) => {
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

module.exports = BarGroup;
