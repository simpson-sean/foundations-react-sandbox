import React, { Component } from 'react'
import request from 'superagent';

export default class FuturamaQuotes extends Component {
    state = { 
        quotes: [],
        searchQuery: ''
     }

     componentDidMount = async () => {
        const data = await request.get(`https://futuramaapi.herokuapp.com/api/characters/${this.props.match.params.character}`);

        this.setState({ quotes: data.body });
    }

    render() {

        return (
            <div className="center">
                <h2>{this.state.quotes[0] && this.state.quotes[0].character}</h2>
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
