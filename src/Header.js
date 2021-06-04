import './Header.css';
import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
        <header>
            <div className="gutter-right logo">
                <img src={this.props.logoSource} alt="logo"/>
            </div>
        </header>
        )
    }
}
