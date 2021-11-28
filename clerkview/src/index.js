import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import PaymentProvider from "./contexts/PaymentsContext";
import OrderProvider from "./contexts/OrdersContext";

document.title = "Clerk View";

ReactDOM.render(
  <React.StrictMode>
    <PaymentProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
    </PaymentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
