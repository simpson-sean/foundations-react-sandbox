import React, { Component } from 'react'
import Counter from './Counter.js';

export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{this.props.title}</h2>
                    <Counter />
                </section>
            </main>
        )
    }
}
