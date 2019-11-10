import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import './index.css';
import store from './store';
import todoApp from './todoApp'


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:filter" component={todoApp} />
        <Route path="/" component={todoApp} />
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root'));
