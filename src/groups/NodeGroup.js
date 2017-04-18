import Group from './Group';


class NodeGroup extends Group {
  constructor(chart, options) {
    super(chart, options);
    return this;
  }

  /**
  * update - handles updating the marker
  * @override
  *
  * @return {object} this
  */
  update() {
    if (typeof this.group === 'undefined') {
      return;
    }
    const filtered = this.chart.applyFilters(this.getNodes());
    this.group.attr('numNodes', filtered.length);
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

module.exports = NodeGroup;
