import React from 'react';
import { render } from 'react-snapshot';
import App from './App';

const doc = document;
const rootEl = doc.getElementById('root');

render(<App />, rootEl);

if ( module.hot ) {
  module.hot.accept('./App', () => {
    const NextApp = require ('./App').default;
    render(<NextApp />, rootEl);
  });
}
