import React, { Component } from 'react'
import MyItem from './MyItem'
export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{this.props.title}</h2>
                    <MyItem words={{ words: "Here are some more words"}} />
                    <MyItem word="Yet more words" />
                    <MyItem text="Words" />
                    <MyItem words={() => "Words, just words"} />
                </section>
            </main>
        )
    }
}
