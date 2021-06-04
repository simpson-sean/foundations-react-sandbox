import './reset.css';
import './App.css';
import Body from './Body.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
      return (
        <div className="App">
          <Body title="forms in react pt 2 (very sorry)"/>
          <Footer year="2021" />
        </div>
      );
    }
}