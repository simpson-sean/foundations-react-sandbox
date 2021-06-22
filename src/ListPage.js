import React, { Component } from 'react'
import { getAllGames } from './fetch-utils'

export default class ListPage extends Component {
    state = {
        boardGames: []
    }

    componentDidMount = async () => {
        const games = await getAllGames();

        this.setState({ boardGames: games })
    }

    render() {
        return (
            <div className="games">
                {
                    this.state.boardGames.map(game => <div className="game">
                        <p>{game.name}</p>
                        <p>{game.complexity}</p>
                        <p>{game.category}</p>
                    </div>)
                }
            </div>
        )
    }
}
