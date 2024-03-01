import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalCss from "./stylesheet/globalStyles.js";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./stylesheet/theme.js";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />

          <GlobalCss />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
