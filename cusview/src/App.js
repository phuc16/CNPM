import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuPage from "./pages/menupage";

import CartPage from "./pages/CartPage";

import BillPage from "./pages/billPage";

import Payment from "./pages/Payment";

//import NavBar from './NavBar';
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MenuPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/cart/payment">
          <Payment />
        </Route>
        <Route exact path="/cart/payment/bill">
          <BillPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
