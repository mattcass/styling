import React from 'react';
import { Route, Link } from 'react-router-dom';

export default ( { path, exact, ...props }) => (
  <Route path={path} exact={exact} children={({match}) => (
    <li active={match}>
      <Link to={path}>{props.title}</Link>
    </li>
  )} />
);
