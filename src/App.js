import { Component } from 'react';
import './reset.css';
import Body from './Body.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
      return (
        <div className="App">
          <Header logoSource="big-logo.png" />
          <Body title="forms in react (sorry)"/>
          <Footer year={{ 2021: true }} />
        </div>
      );
    }
}