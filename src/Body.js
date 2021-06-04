import React, { Component } from 'react'
import NameTag from './NameTag.js';

export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{this.props.titleProp.length}</h2>
                    <NameTag />
                </section>
            </main>
        )
    }
}
