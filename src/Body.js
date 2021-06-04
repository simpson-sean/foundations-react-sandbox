import React, { Component } from 'react'
import Counter from '../Counter.js';

export default class Body {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{this.title}</h2>
                    <Counter />
                </section>
            </main>
        )
    }
}
