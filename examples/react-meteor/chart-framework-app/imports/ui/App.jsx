import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Immutable from 'immutable'

import { Incidents } from '../api/incidents';
import { Prices } from '../api/prices';
import ScatterPlot from './ScatterPlot';
import LineChart from './LineChart';
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
  }

  renderDataTable() {
    if (this.state.chartType == 'ScatterPlot') {
      return <DataTable data={this.props.incidents} />
    }
    if (this.state.chartType == 'LineChart') {
      return <DataTable data={this.props.prices} />
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
};

export default createContainer(() => {
  window.prices = Prices.find({}).fetch();
  return {
    incidents: Immutable.List(Incidents.find({}).fetch()),
    prices: Immutable.List(Prices.find({}).fetch()),
  };
}, App);
