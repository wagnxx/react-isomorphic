// ClientApp.js

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

function ClientApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default ClientApp;
