import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { BarChart } from 'd3-chart-framework';
// import { BarChart } from '../api/build/d3-chart-framework';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    if (this.props.chart instanceof BarChart) {
      this.state = {
        activeFilters: {
          info: true,
          success: true,
          muted: true,
          primary: true,
          warning: true,
          danger: true,
        },
        showReset: false,
      };
    } else {
      this.state = {
        activeFilters: {
          info: true,
          success: true,
        },
        showReset: true,
      };
    }
  }

  resetZoom(event) {
    this.props.chart.resetZoom();
    $(event.currentTarget).blur();
  }

  buttonFilterClassNames(isActive, bsContext) {
    return `btn btn-xs btn-${bsContext} d3cf-toolbar-button ${isActive ? 'active' : 'inactive'}`;
  }

  iconFilterClassNames(isActive) {
    return `fa ${isActive ? 'fa-check-circle' : 'fa-circle-o'}`;
  }

  toggleFilter(event, type) {
    const currentTarget = event.currentTarget;
    // apply or remove the filter by type
    if (this.state.activeFilters[type]) {
      this.props.chart.addFilter(type, (d) => {
        if (d.meta && d.meta.type && d.meta.type !== type) {
          return d;
        }
      });
    } else {
      this.props.chart.removeFilter(type)
    }
    // update the component state, update the chart, blur the event's target
    activeFilters = Object.assign({}, this.state.activeFilters);
    activeFilters[type] = !activeFilters[type];
    this.setState({activeFilters: activeFilters}, () => {
      this.props.chart.update();
      $(currentTarget).blur();
    });
  }

  render() {
    const buttons = [];
    if (this.state.activeFilters.hasOwnProperty('info')) {
        buttons.push(
          <button key={'info'} className={this.buttonFilterClassNames(this.state.activeFilters.info, 'info')} onClick={(event) => this.toggleFilter(event, 'info')}>
            <i className={this.iconFilterClassNames(this.state.activeFilters.info)}></i>
            <span>Info</span>
          </button>
        );
    }
    if (this.state.activeFilters.hasOwnProperty('success')) {
      buttons.push(
        <button key={'success'} className={this.buttonFilterClassNames(this.state.activeFilters.success, 'success')} onClick={(event) => this.toggleFilter(event, 'success')}>
          <i className={this.iconFilterClassNames(this.state.activeFilters.success)}></i>
          <span>Success</span>
        </button>
      );
    }
    if (this.state.activeFilters.hasOwnProperty('muted')) {
      buttons.push(
        <button key={'muted'} className={this.buttonFilterClassNames(this.state.activeFilters.muted, 'muted')} onClick={(event) => this.toggleFilter(event, 'muted')}>
          <i className={this.iconFilterClassNames(this.state.activeFilters.muted)}></i>
          <span>Muted</span>
        </button>
      );
    }
    if (this.state.activeFilters.hasOwnProperty('primary')) {
      buttons.push(
        <button key={'primary'} className={this.buttonFilterClassNames(this.state.activeFilters.primary, 'primary')} onClick={(event) => this.toggleFilter(event, 'primary')}>
          <i className={this.iconFilterClassNames(this.state.activeFilters.primary)}></i>
          <span>Primary</span>
        </button>
      );
    }
    if (this.state.activeFilters.hasOwnProperty('warning')) {
      buttons.push(
        <button key={'warning'} className={this.buttonFilterClassNames(this.state.activeFilters.warning, 'warning')} onClick={(event) => this.toggleFilter(event, 'warning')}>
          <i className={this.iconFilterClassNames(this.state.activeFilters.warning)}></i>
          <span>Warning</span>
        </button>
      );
    }
    if (this.state.activeFilters.hasOwnProperty('danger')) {
      buttons.push(
        <button key={'danger'} className={this.buttonFilterClassNames(this.state.activeFilters.danger, 'danger')} onClick={(event) => this.toggleFilter(event, 'danger')}>
          <i className={this.iconFilterClassNames(this.state.activeFilters.danger)}></i>
          <span>Danger</span>
        </button>
      );
    }
    let resetButton = null;
    if (this.state.showReset) {
      resetButton = (
        <button className="btn btn-xs btn-default d3cf-toolbar-button" onClick={(event) => this.resetZoom(event)}>
          <i className="fa fa-search-plus"></i>
          <span>Reset</span>
        </button>
      );
    }

    return (
      <div className="d3cf-toolbar">
        <div className="row" style={{paddingRight: 20}}>
          <div className="pull-left">
            {buttons}
          </div>
          <div className="pull-right">
            {resetButton}
          </div>
        </div>
      </div>
    );
  }

}

Toolbar.propTypes = {
  chart: PropTypes.object.isRequired,
};
