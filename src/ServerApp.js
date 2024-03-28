// ServerApp.js

import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import App from './components/App.js';
// const App = require('./app.bundle.js');

function ServerApp({ location, context }) {
  return (
    <StaticRouter   location={location} context={context}>
      <App />
    </StaticRouter>
  );
}

export default ServerApp;
