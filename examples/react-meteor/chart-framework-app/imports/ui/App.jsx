import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import Immutable from 'immutable'

import { Incidents } from '../api/incidents';
import { Prices } from '../api/prices';
import { Counts } from '../api/counts';
import ScatterPlot from './ScatterPlot';
import LineChart from './LineChart';
import BarChart from './BarChart';
import DataTable from './DataTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: 'LineChart',
    };
  }

  handleChange(event) {
    this.setState({chartType: event.target.value});
  }

  renderChart() {
    if (this.state.chartType == 'ScatterPlot') {
      return <ScatterPlot incidents={this.props.incidents} />
    }
    if (this.state.chartType == 'LineChart') {
      return <LineChart prices={this.props.prices} />
    }
    if (this.state.chartType == 'BarChart') {
      return <BarChart counts={this.props.counts} />
    }
  }

  renderDataTable() {
    if (this.state.chartType == 'ScatterPlot') {
      return <DataTable data={this.props.incidents} />
    }
    if (this.state.chartType == 'LineChart') {
      return <DataTable data={this.props.prices} />
    }
    if (this.state.chartType == 'BarChart') {
      return <DataTable data={this.props.counts} />
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{marginTop: 20, marginBottom: 20}}>
          <label style={{paddingRight: 10}}>Select a chart:</label>
          <select ref='selectChart' defaultValue={this.state.chartType} onChange={(event) => this.handleChange(event)}>
            <option>ScatterPlot</option>
            <option>LineChart</option>
            <option>BarChart</option>
          </select>
        </div>
        { this.renderChart() }
        { this.renderDataTable() }
      </div>
    );
  }
}

App.propTypes = {
  incidents: PropTypes.instanceOf(Immutable.List).isRequired,
  prices: PropTypes.instanceOf(Immutable.List).isRequired,
  counts: PropTypes.instanceOf(Immutable.List).isRequired,
};

export default createContainer(() => {
  return {
    incidents: Immutable.List(Incidents.find({}).fetch()),
    prices: Immutable.List(Prices.find({}).fetch()),
    counts: Immutable.List(Counts.find({}).fetch()),
  };
}, App);
