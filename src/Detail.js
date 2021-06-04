import React from 'react'
import request from 'react-router-dom';

export default function FuturamaQuotes extends Component {
    state = { 
        quotes: [],
        searchQuery: ''
     }

     componentDidMount = () => {
        request.get(`https://futuramaapi.herokuapp.com/api/characters/${this.props.params.match.character}`);

        this.setState({ quotes: data.body });
    }

    render() {

        return (
            <div className="center">
                <h2>{this.state.quotes && this.state.quotes[0].character.length}</h2>
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
