import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalCss from "./stylesheet/globalStyles.js";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./stylesheet/theme.js";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/Container/Container.styled.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <App />
        </Container>
        <GlobalCss />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
