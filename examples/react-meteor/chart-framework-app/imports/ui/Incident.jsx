import React, { Component, PropTypes } from 'react';

export default class Incident extends Component {
  render() {
    return (
      <tr>
        <td>
          {this.props.count}.
        </td>
        <td>
          {this.props.incident._id}
        </td>
        <td>
          {new Date(this.props.incident.x1).toLocaleDateString()}
        </td>
        <td>
          {new Date(this.props.incident.x2).toLocaleDateString()}
        </td>
        <td>
          {this.props.incident.y1}
        </td>
        <td>
          {this.props.incident.type}
        </td>
      </tr>
    );
  }
}

Incident.propTypes = {
  incident: PropTypes.object.isRequired,
};
