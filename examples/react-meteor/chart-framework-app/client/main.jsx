import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../node_modules/d3-chart-framework/build/stylesheets/d3cf-main.css';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
