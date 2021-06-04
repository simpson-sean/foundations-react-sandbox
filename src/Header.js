import './Header.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <header>
            <div className="gutter-right logo">
                <img src={this.props.logoSrc} alt="logo"/>
                <Link to="/about">About</Link>
            </div>
        </header>
        )
    }
}
