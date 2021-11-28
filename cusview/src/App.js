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
  if(TableNo < 1 || TableNo > 25) return(
    <div className="not-found">
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
      />
    </div>
  );
  else return (
    <CartProvider TableNo={TableNo}>
    <Router>
      <Switch>
        <Route exact path={`/${TableNo}`}>
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
