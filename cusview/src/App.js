
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from './component/MyNavbar';
import Slide from './component/slide';
import MenuPage from './pages/menupage';

import CartPage from './pages/CartPage';

//import NavBar from './NavBar';
import './App.css';

function App() {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <React.Fragment>
                <MyNavbar />   
                <Slide />        
                <MenuPage/>                             
              </React.Fragment>
            </Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>
          </Switch>
        </Router>
      );
    
  }

export default App;