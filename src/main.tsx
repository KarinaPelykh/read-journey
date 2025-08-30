import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme, theme as darkTheme } from './stylesheet/theme.js';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './stylesheet/globalStyles.js';
import { LightTheme } from './components/LightTheme/LigthTheme';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);
const Main = () => {
  const [theme, setTheme] = useState<string>(() => {
    const themePage = localStorage.getItem('theme');
    const parsedInfo = JSON.parse(themePage as string);
    return parsedInfo ? parsedInfo : 'dark';
  });

  const isLight = theme === 'light';

  const handleTheme = () => {
    setTheme(isLight ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <ToastContainer autoClose={1000} />
      {/* <LightTheme handleTheme={handleTheme} /> */}
      <App />
      <GlobalStyles />
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
