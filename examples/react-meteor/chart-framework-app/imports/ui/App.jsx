import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Immutable from 'immutable'

import { Incidents } from '../api/incidents';
import Plot from './Plot';
import DataTable from './DataTable';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Plot incidents={this.props.incidents} />
        <DataTable incidents={this.props.incidents} />
      </div>
    );
  }
}

App.propTypes = {
  incidents: PropTypes.instanceOf(Immutable.List).isRequired,
};

export default createContainer(() => {

  return {
    incidents: Immutable.List(Incidents.find({}).fetch()),
  };
}, App);
