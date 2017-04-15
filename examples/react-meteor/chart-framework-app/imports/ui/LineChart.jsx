import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';
import _ from 'underscore';

//import { LineChart, InvalidNodeError, LineNode, LineGroup } from 'd3-chart-framework';
import { LineChart, InvalidNodeError, LineNode, LineGroup } from '../api/build/d3-chart-framework';
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
  <p style="padding: 0;">
    <%= new Date(obj.x1).toLocaleDateString() %>
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
      title: 'Time',
      type: 'datetime',
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
  zoom: true,
};

export default class LineChartComponent extends Component {
  constructor(props) {
    super(props);
    // initialize the chart state to null
    this.state = {chart: null};
    this.updateChart = _.debounce(this.updateChart, 50);
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
  * @param {object} price, a database record to convert into a LineNode
  * @return {object} lineNode, an instance of LineNode
  */
  createFromPrices(chart, prices) {
    function getStroke(type) {
      let stroke = '#33B5E5';
      switch (type) {
        case 'warning':
          stroke = '#FFBB33';
          break;
        case 'success':
          stroke = '#00C851';
          break;
        case 'info':
          stroke = '#33B5E5';
          break;
        default:
      }
      return stroke;
    }

    const groups = {};
    prices.forEach((price) => {
      const groupId = `group-${price.type}`;
      let line = groups[groupId];
      const groupOpts = {
        id: groupId,
        s: getStroke(price.type),
        w: 1.5,
        meta: {
          type: price.type,
        },
      };
      const nodeOpts = {
        id: `node-${price._id}`,
        x1: price.x1,
        y1: parseFloat(price.y1),
        o: 0, // opacity
        r: 3, // radius
        meta: {
          type: price.type,
        },
      };
      if (typeof line === 'undefined') {
        groups[groupId] = new LineGroup(chart, groupOpts);
        line = groups[groupId];
        line.addNode(new LineNode(chart, nodeOpts));
      } else {
        line.addNode(new LineNode(chart, nodeOpts));
      }
    });
    return groups;
  }

  updateChart(props) {
    // each time the component receives props (in this case we are expecting
    // the prices List), we will update the chart.
    if (this.state.chart === null || props.prices.size <= 0) {
      return;
    }
    const groups = this.createFromPrices(this.state.chart, props.prices);
    this.state.chart.update(groups);
  }

  componentDidMount() {
    // now that the component has mounted, the div element with id `chart` will
    // exist in the DOM, the LineChart can be constructed.
    this.setState({chart: new LineChart(opts)}, () => {
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
          <h1>LineChart</h1>
          <p>Subclass of Chart, displays random lines.</p>
        </header>
        { this.renderToolbar() }
        <div id="chart" className="d3cf"></div>
      </div>
    );
  }

}

LineChartComponent.propTypes = {
  prices: PropTypes.instanceOf(Immutable.List).isRequired,
};
