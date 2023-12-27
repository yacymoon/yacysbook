import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'

import './index.css';

import App from './App';
import Store from './app/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);