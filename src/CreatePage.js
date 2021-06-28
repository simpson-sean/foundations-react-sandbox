import React, { Component } from 'react'
import { createCharacter } from './fetch-utils';

export default class CreatePage extends Component {

    state = {
        name: '',
        species: '',
        faction_id: '',
        category: '',
        rank: '',
        is_carbon_based: '',

    }
    
    handleName = (e) => {
       this.setState({ name: e.target.value });
    }

    handleSpecies = (e) => {
        this.setState({ species: e.target.value });

    }

    handleFaction = (e) => {
        this.setState({ faction_id: e.target.value });

    }

    handleCategory = (e) => {
        this.setState({ category: e.target.value});

    }

    handleRank = (e) => {
        this.setState({ rank: e.target.value});
    }

    handleCarbon = (e) => {
        this.setState({ is_carbon_based: e.target.value });

    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createCharacter({
            name: this.state.name,
            species: this.state.species,
            faction_id: this.state.faction_id,
            category: this.state.category,
            rank: this.state.rank,
            is_carbon_based: this.state.is_carbon_based,
        });
        
        this.props.history.push('/');
        
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:<input onChange={this.handleName} /></label>
                    <label>Species:<input onChange={this.handleSpecies}/></label>
                    <label>Faction:
                        <select onChange={this.handleFaction}>
                            <option value="default" selected>...</option>
                            <option value="1">Starfleet</option>
                            <option value="2">Klingon Empire</option>
                            <option value="3">The Dominion</option>
                            <option value="4">Romulan Star Empire</option>
                            <option value="5">The Borg</option>
                        </select>
                    </label>
                    <label>Category:<input onChange={this.handleCategory} /></label>
                    <label>Rank:<input onChange={this.handleRank} /></label>
                    <label>Carbon Based:
                        <select onChange={this.handleCarbon}>
                            <option value="default" selected>...</option>
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                    </label>
                    <button>Add Character</button>
                </form>
            </div>
        )
    }
}
