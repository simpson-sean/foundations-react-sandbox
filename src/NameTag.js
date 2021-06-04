import React, { Component } from 'react'

export default class Counter extends Component {
    state = { 
        formName: '',
        name: ''
     }

    handleChange = (e) => {
        this.setState({ formName: e.target.value })
    }

    handleClick = () => {
        this.setState({ 
            name: this.state.formName,
            formName: ''
         });
    }

    render() {
        return (
            <div>
                <h3>Hi! my name is: {this.state.name}</h3>
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
