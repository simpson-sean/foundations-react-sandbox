import React, { Component } from 'react'

export default class MyItem extends Component {
    render() {
        return (
            <div>
                {this.props.words}
            </div>
        )
    }
}
