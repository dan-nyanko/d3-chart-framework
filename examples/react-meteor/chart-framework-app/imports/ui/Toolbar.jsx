import React, { Component, PropTypes } from 'react';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilters: {
        info: true,
        success: true,
      },
    };
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
    return (
      <div className="d3cf-toolbar">
        <div className="row" style={{paddingRight: 20}}>
          <div className="pull-left">
            <button className={this.buttonFilterClassNames(this.state.activeFilters.info, 'info')} onClick={(event) => this.toggleFilter(event, 'info')}>
              <i className={this.iconFilterClassNames(this.state.activeFilters.info)}></i>
              <span>Info</span>
            </button>
            <button className={this.buttonFilterClassNames(this.state.activeFilters.success, 'success')} onClick={(event) => this.toggleFilter(event, 'success')}>
              <i className={this.iconFilterClassNames(this.state.activeFilters.success)}></i>
              <span>Success</span>
            </button>
          </div>
          <div className="pull-right">
            <button className="btn btn-xs btn-default d3cf-toolbar-button" onClick={(event) => this.resetZoom(event)}>
              <i className="fa fa-search-plus"></i>
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

}

Toolbar.propTypes = {
  chart: PropTypes.object.isRequired,
};
