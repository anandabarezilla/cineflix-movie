import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavbarToggleContextProvider from "./context/NavbarToggle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarToggleContextProvider>
      <App />
    </NavbarToggleContextProvider>
  </React.StrictMode>
);
