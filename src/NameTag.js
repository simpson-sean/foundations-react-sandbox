import React, { Component } from 'react'

export default function Counter extends Component {
    state = { name: {} }

    const handleChange = () => {
        this.state = { name: value }
    }

    render() {
        return (
            <div>
                <h3>Hi! my name is: {this.state.name}</h3>
                <input onClick={() => handleChange} />
            </div>
        )
    }
}
