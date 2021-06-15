import React, { Component } from 'react'
import request from 'superagent';

export default class Body extends Component {
    state = {
        data: []
    }

    handleClick = async() => {
        const data = await request.get('https://dani-bad-pokemon.herokuapp.com/chars');

        this.setState({ data: data.body.results });
    }

    render() {
        return (
            <main>
                <button onClick={this.handleClick}>Fetch!</button>
                {
                    this.state.data.map(pokemon => <div>
                        <p>{pokemon.pokemon}</p>
                        <img src={pokemon.url_image} alt={pokemon.pokemon} />
                    </div>)
                }
            </main>
        )
    }
}
