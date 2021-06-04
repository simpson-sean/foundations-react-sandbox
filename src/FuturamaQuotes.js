import React, { Component } from 'react'
import request from 'superagent';

export default class Counter extends Component {
    state = { quotes: [] }

    handleClick = async () => {
        const data = await request.get('https://futuramaapi.herokuapp.com/api/quotes')

        this.setState({ quotes: data.body });
    }

    render() {
        return (
            <div className="center">
                <button onClick={this.handleClick}>Fetch!</button>
                { this.state.quotes.map(quote => 
                    <p>
                        <img width="30" src={quote.image} alt={quote.character} />
                        {quote.character} 
                        says: 
                        <em> "{quote.quote}"</em>
                    </p>)}
            </div>
        )
    }
}
