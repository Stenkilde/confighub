import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// Css
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation">
                <ul>
                    <li><p className="title">ConfigHub</p></li>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;