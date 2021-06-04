import React, { Component } from 'react'
import request from 'superagent';

export default class FuturamaQuotes extends Component {
    state = { 
        searchQuery: ''
     }

    componentDidMount = async () => {
        const data = await request.get('https://futuramaapi.herokuapp.com/api/quotes');

        this.setState({ quotes: data.body });
    }

    handleClick = async () => {
        const data = await request.get(`https://futuramaapi.herokuapp.com/api/quotes?search=${this.state.searchQuery}`);

        this.setState({ quotes: data.body });
    }

    handleChange = () => {
        state({ searchQuery: e.target.value })
    }

    return (
        <div className="center">
            <input onClick={this.handleChange} />
            <button>Search!</button>
            { this.state.quotes.map(quote => 
                <p>
                    <img width="30" src={quote.character} alt={quote.character} />
                    {quote.character} 
                    says: 
                    <em> "{quote.quote}"</em>
                </p>)}
        </div>
    )
}
