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
import CreatePage from "./CreatePage.js";
import DetailPage from "./DetailPage.js";
import "./App.css";


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Star Trek Character</h2>
          <p><Link to="/create">Create New Character!</Link></p>
          <p><Link to="/">Home</Link></p>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <ListPage {...routerProps} />} 
            />
            <Route 
              path="/create" 
              exact
              render={(routerProps) => <CreatePage {...routerProps} />} 
            /> 
                        />
            <Route 
              path="/character/:id" 
              exact
              render={(routerProps) => <DetailPage {...routerProps} />} 
            />                     
          </Switch>
        </div>
      </Router>
    );
  }
}