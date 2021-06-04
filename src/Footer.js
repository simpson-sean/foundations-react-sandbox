import './Footer.css';
import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="copy gutter-right">
                    &copy; {this.props.year} Alchemy Code Lab
                </div>
            </footer>
            )
    }
}
