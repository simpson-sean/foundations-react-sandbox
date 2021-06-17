import React, { Component } from 'react'
import request from 'superagent';

export default class Body extends Component {
    state = {
        category: 'card',
        name: '',
        complexity: 1,
        data: []
    }

    handleClick = async() => {
        const data = await request.get('https://board-games-2021.herokuapp.com/board-games');

        this.setState({ data: data.body });
    }

    handleCategoryChange = (e) => {
        this.setState({ category: e.target.value })
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleComplexityChange = (e) => {
        this.setState({ complexity: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault();

        console.log(this.state)

        await request.post('https://board-games-2021.herokuapp.com/board-games')
        .send({
            name: this.state.name,
            complexity: this.state.complexity,
            category: this.state.category,
        })

        const data = await request.get('https://board-games-2021.herokuapp.com/board-games');

        this.setState({ data: data.body });
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name <input onChange={this.handleNameChange} />
                    </label>
                    <label>
                        Complexity <input onChange={this.handleComplexityChange} type="number" />
                    </label>
                    <label>
                        Category <select onChange={this.handleCategoryChange}>
                            <option value="card">Card</option>
                            <option value="party">Party</option>
                            <option value="tile-laying">Tile-laying</option>
                            <option value="economic">Economic</option>
                        </select>
                    </label>
                    <button>Create new</button>
                </form>

                <button onClick={this.handleClick}>Fetch!</button>
                {
                    this.state.data.map(boardGame => <div>
                        <p>{boardGame.name}</p>
                        <p>{boardGame.category}</p>
                        <p>{boardGame.complexity}</p>
                    </div>)
                }
            </main>
        )
    }
}
