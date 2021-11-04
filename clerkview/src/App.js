import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import classNames from 'classnames';

import './App.css';

import NavBar from "./components/NavBar";
import Orders from './pages/Orders'
import Transactions from './pages/Transactions'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOrders: false,
      isTransactions: false
    };
  }
  
  changeToOrders(){
    this.setState({
      isOrders: true,
      isTransactions: false
    });
  }

  changeToTransactions(){
    this.setState({
      isOrders: false,
      isTransactions: true
    });
  }

  render(){
    return (
      <Router>
        <div className="App">        
          <NavBar Title = "Clerks Tabs" />
          <div className="select-bar" >
              <Link onClick={() => this.changeToOrders()} className={classNames('option', 
                {grey: this.state.isOrders && !this.state.isTransactions}
              )}
              to="/orders">
                <h1>Pending Orders</h1>
              </Link>
              <Link onClick={() => this.changeToTransactions()} className={classNames('option', 
                {grey: !this.state.isOrders && this.state.isTransactions}
              )}
              to="/transactions">
                <h1>Pending Transactions</h1>
              </Link>
          </div>
          <Switch>
            <Route exact path="/orders">
              <Orders />
            </Route>
            <Route exact path="/transactions">
              <Transactions />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;