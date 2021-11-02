import React from 'react';
import './App.css';
import OrderHistory from './Pages/OrderHistory';
import TransactionHistory from './Pages/TransactionOrder';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/' exact component={OrderHistory} />
    <Route path='/statistics/transaction' exact component={TransactionHistory} />
    </Switch>

    </BrowserRouter>

  );
}

export default App;
