import React, { Component } from 'react'

export default class Counter extends Component {
    state = { name: '' }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        return (
            <div>
                <h3>Hi! my name is: {this.state.name}</h3>
                <input onChange={this.handleChange} />
            </div>
        )
    }
}
