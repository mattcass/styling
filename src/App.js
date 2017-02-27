require('./assets/styles/global.css');

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Styleguide from './routes/_styleguide/Index';
import Application from './routes/appIndex';

import AppNav from './components/Navs/AppNav';

const Dashboard = React.createClass({

  render () {
    return (
      <AppNav id="app_nav"
        ariaLabel="Primary"
        class="app-nav"
        hasBtn="false">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/styleguide">Styleguide</Link></li>
        <li><Link to="/application">Application</Link></li>
        <li><a href="./app.html">Link to app here</a></li>
      </AppNav>
    )
  }
});

export default () => (
  <Router>
    <div>
      <Helmet title="Title goes here"/>

      <Route path="/" component={Dashboard} />
      <Route path="/styleguide" component={Styleguide} />
      <Route path="/application" component={Application} />
    </div>
  </Router>
);
