import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

document.title = "POS";
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/:TableNo" component={App} />
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
