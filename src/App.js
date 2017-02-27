require('./assets/styles/global.css');

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Styleguide from './styleguide/Styleguide';
import Application from './application/Application';

import AppNav from './components/Navs/AppNav';

export default () => (
  <Router>
    <div>
      <Helmet title="Hello."/>


      <AppNav id="app_nav"
        ariaLabel="Primary"
        class="app-nav"
        hasBtn="false">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/styleguide">Styleguide</Link></li>
        <li><Link to="/application">Application</Link></li>
      </AppNav>


      <Route path="/styleguide" component={Styleguide} />
      <Route path="/application" component={Application} />
    </div>
  </Router>
);
