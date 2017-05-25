import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import _ from 'underscore';

import { BarChart, InvalidNodeError, BarNode, BarGroup } from 'd3-chart-framework';
// import { BarChart, InvalidNodeError, BarNode, BarGroup } from '../api/build/d3-chart-framework';
import Toolbar from './Toolbar';


// tooltip template
const tmpl = _.template(`
  <p style="padding: 0; font-weight: bold;">
    <%= obj.id %>
  </p>
  <p style="padding: 0;">
    <% if (obj.hasOwnProperty('meta')) { %>
        <%= obj.meta.type %>
    <% } %>
    <i class="fa fa-square"
      <% if (obj.hasOwnProperty('meta')) { %>
        style="color: <%= obj.getFill(obj.meta.type) %>"
      <% } %>
      aria-hidden="true"></i> <%= obj.y1 %>
  </p>
`);

// options for the chart
const opts = {
  containerID: 'chart',
  svgContainerClass: 'd3cf-container',
  height: 400,
  axes: {
    useAutoPadding: false,
    grid: true,
    filter: true,
    x: {
      title: 'Types',
      type: 'band',
    },
    y: {
      title: 'Count',
      type: 'numeric',
    },
  },
  tooltip: {
    opacity: 1,
    template: tmpl,
  },
  zoom: false,
};

export default class BarChartComponent extends Component {
  constructor(props) {
    super(props);
    // initialize the chart state to null
    this.state = {chart: null};
  }

  componentWillUnmount() {
    // when the component unmounts, clean-up the chart by calling the destroy
    // method
    if (this.state.chart) {
      this.state.chart.destroy();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updateChart(nextProps);
  }

  /*
  * created chart groups based on the list of database `Prices` collection
  *
  * @param {object} chart, an instance of the plot
  * @param {object} price, a database record to convert into a BarNode
  * @return {object} BarNode, an instance of BarNode
  */
  createFromCounts(chart, counts) {
    const groups = {};
    counts.forEach((count) => {
      const groupId = `group-${count.x1}`;
      let bar = groups[groupId];
      const groupOpts = {
        id: groupId,
        meta: {
          type: count.x1,
        },
      };
      const nodeOpts = {
        id: `node-${count._id}`,
        x1: count.x1,
        y1: parseFloat(count.y1),
        o: 1, // opacity
        w: 100, // width (default is d3-scale bandwidth())
        meta: {
          type: count.x1,
        },
      };
      if (typeof bar === 'undefined') {
        groups[groupId] = new BarGroup(chart, groupOpts);
        bar = groups[groupId];
        bar.addNode(new BarNode(chart, nodeOpts));
      } else {
        bar.addNode(new BarNode(chart, nodeOpts));
      }
    });
    return groups;
  }

  updateChart(props) {
    // each time the component receives props (in this case we are expecting
    // the prices List), we will update the chart.
    if (this.state.chart === null || props.counts.size <= 0) {
      return;
    }
    const groups = this.createFromCounts(this.state.chart, props.counts);
    this.state.chart.update(groups);
  }

  componentDidMount() {
    // now that the component has mounted, the div element with id `chart` will
    // exist in the DOM, the BarChart can be constructed.
    this.setState({chart: new BarChart(opts)}, () => {
      this.updateChart(this.props);
    });
  }

  renderToolbar() {
    // the chart cannot be rendered until the DOM element exists; therefore guard
    // agains chart being initialized to null.
    if (this.state.chart === null) {
      return;
    }
    return (<Toolbar chart={this.state.chart} />);
  }

  render() {
    return (
      <div>
        <header>
          <h1>BarChart</h1>
          <p>Subclass of Chart, displays a bar chart with random heights.</p>
        </header>
        { this.renderToolbar() }
        <div id="chart" className="d3cf"></div>
      </div>
    );
  }

}

BarChartComponent.propTypes = {
  counts: PropTypes.instanceOf(Immutable.List).isRequired,
};
