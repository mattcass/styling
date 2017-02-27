require('./assets/styles/styleguide.css');

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import Home from './pages/Home';
import Typography from './pages/Typography';
import Modules from './pages/Modules';
import Forms from './pages/Forms';
import NoMatch from './pages/NoMatch';
import NavLink from './components/NavLink';

const routes = [
  {
    title: 'Index',
    path: '/styleguide',
    component: Home,
    exact: true
  },
  {
    title: 'Typography',
    path: '/typography',
    component: Typography
  },
  {
    title: 'Forms',
    path: '/forms',
    component: Forms
  },
  {
    title: 'Modules',
    path: '/modules',
    component: Modules
  },
];

class Styleguide extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Helmet title="styling FTS" />
          <nav className="nav">
            <div className="container">
              <ul>
                {routes.map((route, i ) => (
                  <NavLink key={i} {...route} />
                ))}
              </ul>
            </div>
          </nav>
          <Switch>
            {routes.map((route, i ) => (
              <Route key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default Styleguide;
