const d3 = require('d3');


function genId() {
  const length = 9;
  const prefix = 'node-';
  return prefix + Math.random().toString(36).substr(2, length);
}

class Node {
  /**
  * Node - base class
  *
  * @param {object} options - the options used to construct the SegmentMarker
  * @param {object} options.meta - the optional meta data associated with the node (e.g. used in the Tooltip)
  * @return {object} this
  */
  constructor(options) {
    this.id = options.id || genId();
    this.meta = options.meta || {};
    this.group = null;
    return this;
  }

  /**
  * remove - removes the marker from the DOM
  *
  */
  remove() {
    if (this.group) {
      return this.group.remove();
    }
  }

  /**
  * update - updates one or more elements within the RectNode SVG group
  *
  */
  update() {
    return this;
  }

  /**
  * detached - builds a detached svg group and returns the node
  *
  * @return {object} node - the SVG node to append to the parent during .call()
  */
  detached() {
    this.remove();
    this.group = d3.select(document.createElementNS(d3.namespaces.svg, 'g')).attr('id', this.id).attr('class', 'd3cf-node').attr('opacity', this.o).remove();
    this.update();
    return this.group.node();
  }

}


module.exports = Node;
