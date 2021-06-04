import React, { Component } from 'react'
import MyItem from './MyItem'

const wordArray = [
    "Here are some words",
    "Here are some more words",
    "Yet more words",
    "Words",
    "Believe it or not, words",
    "Incredible words",
    "Words, just words",
    "Nothing but words"
]
export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{this.props.title}</h2>
                    { wordArray.map(someText => <MyItem words={someText} />) }
                </section>
            </main>
        )
    }
}
