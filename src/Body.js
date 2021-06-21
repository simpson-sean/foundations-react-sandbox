import React, { Component } from 'react'
import request from 'superagent';

export default class Body extends Component {
    state = {
        categoryId: null,
        name: '',
        complexity: 1,
        data: [],
        categories: []
    }

    async componentDidMount() {
        const data = await request.get('http://localhost:8001/categories');

        this.setState({ categories: data.body });
    }

    handleClick = async() => {
        const data = await request.get('http://localhost:8001/board-games');

        this.setState({ data: data.body });
    }

    handleCategoryChange = (e) => {
        this.setState({ categoryId: e.target.value })
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

        await request.post('http://localhost:8001/board-games')
            .send({
                name: this.state.name,
                complexity: this.state.complexity,
                category_id: this.state.categoryId,
            })

        const data = await request.get('http://localhost:8001/board-games');

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
                            {this.state.categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </label>
                    <button>Create new</button>
                </form>

                <button onClick={this.handleClick}>Fetch!</button>
                {
                    this.state.data.map(boardGame => (
                        <div key={boardGame.id}>
                            <p>{boardGame.name}</p>
                            <p>{boardGame.category}</p>
                            <p>{boardGame.complexity}</p>
                        </div>
                    ))
                }
            </main>
        )
    }
}
