import React, { Component } from 'react'

export default class CreatePage extends Component {
    
    handleName = (e) => {
       this.setState({ name: e.target.value });
    }

    handleSpecies = (e) => {
        this.setState({ species: e.target.value });

    }

    handleFaction = (e) => {
        this.setState({ faction: e.target.value });

    }

    handleCategory = (e) => {
        this.setState({ category: e.target.value});

    }

    handleRank = (e) => {
        this.setState({ rank: e.target.value});
    }

    handleCarbon = (e) => {
        this.setState({ carbon_based: e.target.value });
        
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <form>
                    <label>Name:<input onChange={this.handleName} /></label>
                    <label>Species:<input onChange={this.handleSpecies}/></label>
                    <label>Faction:<input onChange={this.handleFaction}/></label>
                    <label>Category:<input onChange={this.handleCategory} /></label>
                    <label>Rank:<input onChange={this.handleRank} /></label>
                    <label>Carbon Based:
                        <select onChange={this.handleCarbon}>
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
