import { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import Detail from './Detail.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header logoSrc="big-logo.png" />
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <Body {...routerProps} title="Searchin!" />} 
            />
            <Route 
              path="/about" 
              exact
              render={(routerProps) => <Body {...routerProps} title="Searchin!" />} 
            />
            <Route 
              path="/quotes/:character" 
              exact
              render={(routerProps) => <Detail {...routerProps} />} 
            />          
          
          </Switch>
        </div>
        <Footer year={2021} />
      </Router>
    );
  }
}
