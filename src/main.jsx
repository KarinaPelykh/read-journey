import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalCss from "./stylesheet/globalStyles.js";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./stylesheet/theme.js";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />

            <GlobalCss />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
