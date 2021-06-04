import React, { Component } from 'react'

export default class Counter extends Component {
    handleClick = () => {
        setState({ count: count + 1 })
    }

    render() {
        return (
            <div>
                <h3>You clicked {state.count} times</h3>
                <button onClick={this.props.handleClick}>Click me!</button>
            </div>
        )
    }
}
