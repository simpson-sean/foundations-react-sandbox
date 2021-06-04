import { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';

const wordArray = [
    "Here are some words",
    "Here are some more words",
    "Yet more words",
    "Words",
    "Believe it or not, words",
    "Incredible words",
    "Words, just words",
    "Nothing but words"
]
export default class App extends Component {
  render() {
      return (
        <div className="App">
          <Header logoSrc="big-logo.png" />
          <Body wordArray={wordArray} title="Mappin' lists of things!"/>
          <Footer year="2021" />
        </div>
      );
    }
}