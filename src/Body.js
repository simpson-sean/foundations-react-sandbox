import React, { Component } from 'react'
import MyItem from './MyItem'
export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{this.props.title}</h2>
                    <MyItem words="Here are some words" />
                    <MyItem words="Here are some more words" />
                    <MyItem words="Yet more words" />
                    <MyItem words="Words" />
                    <MyItem words="Believe it or not, words" />
                    <MyItem words="Incredible words" />
                    <MyItem words="Words, just words" />
                    <MyItem words="Nothing but words" />
                </section>
            </main>
        )
    }
}
