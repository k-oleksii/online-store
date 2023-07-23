import { StyledGlobal } from '@/theme/styles/layout/StyledGlobal.js';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App.js';
import './index.css';
import { store } from './lib/redux/init/store.js';
import theme from './theme/theme.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Наш store прокидаємо у Provider
  <React.StrictMode>
    <StyledGlobal />
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
