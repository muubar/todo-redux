import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './index.css';
import TodoApp from "./todoApp";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/:filter" component={TodoApp} />
      <Route path="/" component={TodoApp} />
    </Switch>
  </Router>
  , document.getElementById('root'));
