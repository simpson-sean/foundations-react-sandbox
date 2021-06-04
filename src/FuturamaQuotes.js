import React, { Component } from 'react'

export default class Counter extends Component {
    state = { quotes: [] }

    handleClick = async () => {
        const data = await request.post('https://futuramaapi.herokuapp.comapi/quotes')

        this.setState({ quotes: data });
    }

    render() {
        return (
            <div className="center">
                <button onChange={this.handleClick}>Fetch!</button>
                { state.quotes.map(quote => 
                    <p>
                        <img width="30" src={image} alt={character} />
                        {character} 
                        says: 
                        <em> "{quote}"</em>
                    </p>)}
            </div>
        )
    }
}
