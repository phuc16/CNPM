import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import MenuPage from "./pages/menupage";

import CartPage from "./pages/CartPage";

import BillPage from "./pages/billPage";

import Payment from "./pages/Payment";

import { CartProvider } from "./contexts/Cart";

import "./App.css";

function App() {
  const { TableNo } = useParams();
  return (
    <CartProvider TableNo={TableNo}>
      <Router>
        <Switch>
          <Route exact path={`/${TableNo}/`}>
            <MenuPage />
          </Route>
          <Route exact path={`/${TableNo}/cart`} component={CartPage}>
            {/* <CartPage /> */}
          </Route>
          <Route exact path={`/${TableNo}/cart/payment`}>
            <Payment />
          </Route>
          <Route exact path={`/${TableNo}/cart/payment/bill`}>
            <BillPage />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
