import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalCss from "./stylesheet/globalStyles.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <GlobalCss />
  </React.StrictMode>
);
