const d3 = require('d3');
const _ = require('underscore');

import Node from './Node';
import { InvalidNodeError } from './Errors';


function genId() {
  const length = 9;
  const prefix = 'group-';
  return prefix + Math.random().toString(36).substr(2, length);
}

class Group {
  constructor(plot, options) {
    this.options = options || {};
    this.id = this.options.id || genId();
    const onEnter = this.options.onEnter || Group.onEnter;
    this.onEnter = _.bind(onEnter, this);
    const onUpdate = this.options.onUpdate || Group.onUpdate;
    this.onUpdate = _.bind(onUpdate, this);
    const onExit = this.options.onExit || Group.onExit;
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
  size() {
    return Object.values(this.nodes_).length;
  }

  /*
  * addNode - adds a node to this group
  * @param {object} node, the node to add
  * @throws {InvalidGroupError} error
  * @return {Group} this
  */
  addNode(node) {
    if (!node instanceof Node) {
      throw new InvalidNodeError();
    }
    this.nodes_[node.id] = node;
    return this;
  }

  /*
  * removeNode - removes a node from this group
  * @param {string} id, the id to remove
  * @return {object} this
  */
  removeNode(id) {
    if (this.nodes_.hasOwnProperty(id)) {
      delete this.nodes_[id];
    }
    return this;
  }

  /*
  * getNodes - returns the nodes associated with this group
  * @return {array} nodes, the nodes associated with this group
  */
  getNodes() {
    return Object.values(this.nodes_);
  }

  /*
  * update - handles updating the marker
  * @return {object} this
  */
  update() {
    if (typeof this.group === 'undefined') {
      return;
    }
    const filtered = this.applyFilters();
    const filteredLen = filtered.length;
    this.group.attr('numNodes', filteredLen);
    const nodes = this.group.selectAll('.node').data(filtered, (d) => {
      return d.id;
    });
    nodes.enter().append((node) => {
      return node.detached();
    }).call(this.onEnter);
    nodes.each((node) => {
      return node.update();
    }).call(this.onUpdate);
    return nodes.exit().remove().call(this.onExit);
  }

  /*
  * detached - builds a detached svg group and returns the node
  * @return {object} node, the SVG node to append to the parent during .call()
  */
  detached() {
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
  applyFilters(filters) {
    const filters_ = filters || this.plot.filters;
    let filtered = [];
    if (this.nodes_) {
      filtered = this.getNodes().filter((d) => {
        let valid = true;
        const keys = Object.keys(filters_);
        let i = 0;
        const keysLen = keys.length;
        while (i < keysLen) {
          const key = keys[i++];
          const f = filters_[key](d);
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
  remove() {
    if (this.group) {
      this.group.remove();
    }
  }

  /*
  * destroy - destroys the group and any associated elements
  */
  destroy() {
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
  static onEnter() {}

  /*
  * onUpdate - the default event handler for a group. This may be overridden or
  *   a new event handler passed into the constructor as `options.onUpdate`
  * @param {object} selections - the d3 selection object for this group
  */
  static onUpdate() {}

  /*
  * onExit - the default event handler for a group. This may be overridden or
  *   a new event handler passed into the constructor as `options.onExit`
  * @param {object} selections - the d3 selection object for this group
  */
  static onExit() {}
}

module.exports = Group;
