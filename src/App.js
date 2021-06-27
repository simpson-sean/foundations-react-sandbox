//import baked in functions
import React, { Component } from "react";
import request from 'superagent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

//import APP related functions
import ListPage from "./ListPage.js";
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Star Trek Character</h2>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <ListPage {...routerProps} />} 
            />          
          </Switch>
        </div>
      </Router>
    );
  }
}