import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App.js';
import './index.css';
import { store } from './lib/redux/init/store.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Наш store прокидаємо у Provider
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
