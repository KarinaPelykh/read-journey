import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { theme } from './stylesheet/theme.js';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './stylesheet/global-styles.js';
import React from 'react';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ToastContainer autoClose={1000} />
            <App />
          </ThemeProvider>

          <GlobalStyles />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
