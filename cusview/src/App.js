import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuPage from "./pages/menupage";
import PizzaPage from "./pages/pizzapage";
import BuggerPage from "./pages/buggerpage";
import SoupPage from "./pages/souppage";
import DrinkPage from "./pages/drinkpage";
import OtherPage from "./pages/otherpage";

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
        <Route exact path="/pizza">
          <PizzaPage />
        </Route>
        <Route exact path="/bugger">
          <BuggerPage />
        </Route>
        <Route exact path="/soup">
          <SoupPage />
        </Route>
        <Route exact path="/drink">
          <DrinkPage />
        </Route>
        <Route exact path="/other">
          <OtherPage />
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
