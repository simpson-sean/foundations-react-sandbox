import React, { Component } from 'react'
import request from 'superagent';

export default FuturamaQuotes extends Component {
    state = { 
        searchQuery: ''
     }

    handleClick = () => {
        const data = request(`http://futuramaapi.herokuapp.com/api/quotes?search=${this.state.searchQuery}`);

        this.setState({ quotes: body });
    }

    handleChange = e => {
        this.setState({ searchQuery: e.value })
    }

    render() {

        return (
            <div className="center">
                <input onChange={this.handleChange} />
                <button onClick={handleClick}>Search!</button>
                { this.state.quotes.map(quote => 
                    <p>
                        <img width="30" src={quote.image} alt={quote.character} />
                        {quote.character} 
                        says: 
                        <em> "{quote}"</em>
                    </p>)}
            </div>
        )
    }
}
