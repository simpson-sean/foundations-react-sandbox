import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import request from 'superagent';

export default class FuturamaQuotes extends Component {
    state = { 
        searchQuery: ''
     }

     componentDidMount = () => {
        const data = request.get(`https://futuramaapi.herokuapp.com/api/quotes`);

        this.setState({ quote: body });
    }

    handleClick = () => {
        const data = request.get(`https://futuramaapi.herokuapp.com/api/quotes?search=this.state.query`);

        this.setState({ quotes: data.body });
    }

    handleChange = e => {
        this.setState({ searchQuery: e.target.value })
    }

    render() {

        return (
            <div className="center">
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}>Search!</button>
                { this.state.quotes.map(quote => 
                    <p>
                        <img width="30" src={quote.image} alt={quote.character} />
                        <Link to={`/${quote.character}`}>{quote}</Link> 
                        says: 
                        <em> "{quote.quote}"</em>
                    </p>)}
            </div>
        )
    }
}
