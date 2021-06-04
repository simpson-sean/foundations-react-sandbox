import React, { Component } from 'react'

export default class Counter extends Component {
    state = { 
        names: '',
        form: ''
     }

    handleChange = (e) => {
        setState = { formName: e.value }
    }

    handleClick = () => {
        setState({ 
            name: this.state.formName,
            formName: ''
         });
    }

    render() {
        return (
            <div>
                <h3>Hi! my name is: {name.state}</h3>
                <input onClick={handleChange} />
                <button onChange={this.handleClick}>Submit</button>
            </div>
        )
    }
}
