import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Axes from '../imports/api/build/d3-chart-framework'

import '../node_modules/d3-chart-framework/build/stylesheets/d3cf-main.css';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  window.Axes = Axes;
  render(<App />, document.getElementById('render-target'));
});
