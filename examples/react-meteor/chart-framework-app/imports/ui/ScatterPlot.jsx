import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable'

import { ScatterPlot, InvalidNodeError, RectNode, NodeGroup } from 'd3-chart-framework';
//import { ScatterPlot, InvalidNodeError, RectNode, NodeGroup } from '../api/build/d3-chart-framework';
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
    <i class="fa fa-square" style="color: <%= obj.f %>" aria-hidden="true"></i> <%= obj.y1 %>
  </p>
  <p style="padding: 0;">
    <%= new Date(obj.x1).toLocaleDateString() %> to <%= new Date(obj.x2).toLocaleDateString() %>
  </p>
`);

// options for the chart
const opts = {
  containerID: 'chart',
  svgContainerClass: 'd3cf-container',
  height: 400,
  axes: {
    useAutoPadding: true,
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

export default class ScatterPlotComponent extends Component {
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
    if (nextProps.incidents !== this.props.incidents) {
      this.updateChart(nextProps);
    }
  }

  /*
  * created a set of NodeGroup based on the database `Incidents` collection
  *
  * @param {object} chart, an instance of a chart
  * @param {array} incidents, an array of database records
  * @return {object} groups, a set of formatted NodeGroup's for the chart
  */
  createFromIncidents(chart, incidents) {
    function getFill(type) {
      let fill = '#33B5E';
      switch (type) {
        case 'warning':
          fill = '#FFBB33';
          break;
        case 'success':
          fill = '#00C851';
          break;
        case 'info':
          fill = '#33B5E5';
          break;
        default:
          break;
      }
      return fill;
    }
    const groups = {};
    incidents.forEach((incident) => {
      const nodeOpts = {
        // DOM id should always begin with a letter, so we add a prefix
        id: `node-${incident._id}`,
        x1: incident.x1,
        x2: incident.x2,
        y1: incident.y1,
        f: getFill(incident.type),
        o: 0.5,
        meta: {
          // this could be any extra metadata from your database...
          type: incident.type,
        },
      };
      const groupId = `group-${incident.type}`
      let group = groups[groupId];
      if (group) {
        group.addNode(new RectNode(chart, nodeOpts));
      } else {
        group = new NodeGroup(chart, {id: groupId});
        group.addNode(new RectNode(chart, nodeOpts));
        groups[groupId] = group;
      }
    });
    return groups;
  }

  updateChart(props) {
    // each time the component receives props (in this case we are expecting
    // the incidents List), we will update the chart.
    if (this.state.chart === null || props.incidents.size <= 0) {
      return;
    }
    const groups = this.createFromIncidents(this.state.chart, props.incidents);
    this.state.chart.update(groups);
  }

  componentDidMount() {
    // now that the component has mounted, the div element with id `chart` will
    // exist in the DOM, the ScatterPlot can be constructed.
    this.setState({chart: new ScatterPlot(opts)}, () => {
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
          <h1>ScatterPlot</h1>
          <p>Subclass of Chart, displays random rectanguar nodes.</p>
        </header>
        { this.renderToolbar() }
        <div id="chart" className="d3cf"></div>
      </div>
    );
  }
}

ScatterPlotComponent.propTypes = {
  incidents: PropTypes.instanceOf(Immutable.List).isRequired,
};
