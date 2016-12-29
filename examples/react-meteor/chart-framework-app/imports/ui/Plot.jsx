import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable'
/* immutable vs mutable data structures comes down to cold, hard math */
import { ScatterPlot, InvalidNodeError } from '../lib/d3-chart-framework';
import RectNode from '../api/nodes/RectNode';

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

// options for the plot
const opts = {
  containerID: 'plot',
  svgContainerClass: 'd3cf-container',
  height: 400,
  axes: {
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

export default class Plot extends Component {
  constructor(props) {
    super(props);
    // initialize the plot state to null
    this.state = {plot: null};
  }

  componentWillUnmount() {
    // when the component unmounts, clean-up the plot by calling the destroy
    // method
    if (this.state.plot) {
      this.state.plot.destroy();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updatePlot(nextProps);
  }

  updatePlot(props) {
    // each time the component receives props (in this case we are expecting
    // the incidents List), we will update the plot.
    if (this.state.plot === null || props.incidents.size <= 0) {
      return;
    }
    const nodes = []; // hello mutable array
    props.incidents.toArray().forEach((incident) => {
      nodes.push(RectNode.createFromIncident(this.state.plot, incident));
    });
    this.state.plot.update(nodes);
  }

  componentDidMount() {
    // now that the component has mounted, the div element with id `plot` will
    // exist in the DOM, the ScatterPlot can be constructed.
    this.setState({plot: new ScatterPlot(opts)}, () => {
      this.state.plot.update([]);
    });
  }

  renderToolbar(plot) {
    // the plot cannot be rendered until the DOM element exists; therefore guard
    // agains plot being initialized to null.
    if (plot === null) {
      return;
    }
    return (<Toolbar plot={plot} />);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Plot</h1>
        </header>
        { this.renderToolbar(this.state.plot) }
        <div id="plot" className="d3cf"></div>
      </div>
    );
  }
}

Plot.propTypes = {
  incidents: PropTypes.instanceOf(Immutable.List).isRequired,
};
