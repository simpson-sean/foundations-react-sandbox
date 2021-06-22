import React, { Component } from 'react'
import { createGame, getAllCategories, getOneGame, updateGame } from './fetch-utils';

export default class DetailPage extends Component {
    state = {
        name: '',
        complexity: 0,
        category_id: 1,
        categories: []
    }

    componentDidMount = async () => {
        // on load, go get the id from the URL
        const id = this.props.match.params.id;

        // use the id with our fetch util to grab the correct game
        const game = await getOneGame(id);
        const categories = await getAllCategories();
        // inject the game into state
        this.setState({
            name: game.name,
            complexity: game.complexity,
            category_id: game.category_id,
            categories: categories,
        })
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

        await updateGame(this.props.match.params.id, {
            name: this.state.name,
            complexity: this.state.complexity,
            category_id: this.state.category_id
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Update item</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        {/* once the game is fetched and injected into state, change the name input to match the value in state */}
                        <input value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Complexity
                        <input
                    // once the game is fetched and injected into state, change the complexity input to match the value in state
                        value={this.state.complexity} type='number' onChange={this.handleComplexityChange} />
                    </label>
                    <label>
                        Category
                        <select onChange={this.handleCategoryChange}>
                            {this.state.categories.map(category => 
                                <option
                                    selected={category.id === this.state.category_id} 
                                    value={category.id}>
                                    {category.category}
                                </option>)}
                        </select>
                    </label>
                    <button>Update!</button>
                </form>
            </div>
        )
    }
}
