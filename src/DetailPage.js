import React, { Component } from 'react'
import { getOneCharacter, deleteCharacter, getAllFactions, updateCharacter } from './fetch-utils';


export default class DetailPage extends Component {

    state = {
        name: '',
        species: '',
        faction_id: '',
        category: '',
        rank: '',
        is_carbon_based: '',
        factions: [],

    }
    
    componentDidMount = async() => {
        const id = this.props.match.params.id;

        const character = await getOneCharacter(id);
        const factions = await getAllFactions();

        this.setState ({
            name: character.name,
            species: character.species, 
            faction_id: character.faction_id,
            category: character.category,
            rank: character.rank,
            is_carbon_based: character.is_carbon_based,
            factions: factions,
        });

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

        const characterId = this.props.match.params.id;

        await updateCharacter(characterId, {
            name: this.state.name,
            species: this.state.species,
            faction_id: this.state.faction_id,
            category: this.state.category,
            rank: this.state.rank,
            is_carbon_based: this.state.is_carbon_based,
        });
        
        this.props.history.push('/');
        
    }

    handleDelete = async (e) => {
        e.preventDefault();

        const characterId = this.props.match.params.id;
        await deleteCharacter(characterId);

        this.props.history.push('/');
    }


    render() {
        
        return (
            <div>
                <h2>Update Character Details</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name:<input value={this.state.name} onChange={this.handleName} /></label>
                        <label>Species:<input value={this.state.species} onChange={this.handleSpecies}/></label>
                        <label>Faction:
                            <select onChange={this.handleFaction}>
                               {this.state.factions.map(faction => 
                                <option 
                                    selected={faction.id === this.state.faction} 
                                    value={faction.id}>{faction.faction}
                                </option>)}
                            </select>
                        </label>
                        <label>Category:<input value={this.state.category} onChange={this.handleCategory} /></label>
                        <label>Rank:<input value={this.state.rank} onChange={this.handleRank} /></label>
                        <label>Carbon Based:
                            <select onChange={this.handleCarbon}>
                                <option value="default" selected>...</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </label>
                        <button>Update Character</button>
                        <button onClick={this.handleDelete}>Delete Character</button>
                    </form>
            </div>
        )
    }
}
