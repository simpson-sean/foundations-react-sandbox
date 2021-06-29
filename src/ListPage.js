import React, { Component } from 'react';
import { getAllCharacters } from './fetch-utils';
//import request from 'superagent';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {

    state = {
        trekCharacters: []
    }

    componentDidMount = async () => {
        const characters = await getAllCharacters();
        this.setState({trekCharacters: characters});
    }

    render() {
        return (
            <div className="characters">
                {
                    this.state.trekCharacters.map(character => 
                        <Link to={`/character/${character.id}`}>
                            <div className="character">
                                <p>{character.name}</p>
                                <p>{character.species}</p>
                                <p>{character.faction}</p>
                                <p>{character.category}</p>
                                <p>{character.rank}</p>
                                <p>{character.is_carbon_based}</p>
                            </div>)
                        </Link>
                    )}
            </div>
        )
    }
}
