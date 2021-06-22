import React, { Component } from 'react'
import { createGame } from './fetch-utils';

export default class CreatePage extends Component {
    state = {
        name: '',
        complexity: 0,
        category_id: 1,
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleCategoryChange = e => {
        this.setState({ category_id: e.target.value });
    }

    handleComplexityChange = e => {
        this.setState({ complexity: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await createGame({
            name: this.state.name,
            complexity: this.state.complexity,
            category_id: this.state.category_id
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Complexity
                        <input type='number' onChange={this.handleComplexityChange} />
                    </label>
                    <label>
                        Category
                        <select onChange={this.handleCategoryChange}>
                            <option value="1">Tile-placement</option>
                            <option value="2">Sandbox</option>
                            <option value="3">Card</option>
                        </select>
                    </label>
                    <button>Create!</button>
                </form>
            </div>
        )
    }
}
