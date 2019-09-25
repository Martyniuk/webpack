// Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import Styles from './styles.css';

export class Nav extends Component {
    render() {
        return (
            <nav className = { Styles.nav }>
                <Link to = '/space'>Space</Link>
                <Link to = '/alien'>Alien</Link>
                <Link to = '/jellyfish'>Jellyfish</Link>
            </nav>
        );
    }
}
