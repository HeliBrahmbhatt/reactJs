import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PasswordGenreter from "./screens/passwordgenreter.jsx";
import "./index.css";
import CurrencyConvertor from "./screens/CurrencyConvertor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <PasswordGenreter />
    <CurrencyConvertor />
  </React.StrictMode>
);
