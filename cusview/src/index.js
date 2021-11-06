import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { CartProvider } from "./contexts/Cart";

import "bootstrap/dist/css/bootstrap.min.css";

document.title = "POS";
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
