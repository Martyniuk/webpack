// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.css';
import alien from 'theme/images/alien.jpg';

// Components
import { Image } from '../Image';

export default class extends Component {
    render() {
        return (
            <section className = { Styles.alien }>
                <h1>Alien!</h1>
                <Image link = { alien } />
            </section>
        );
    }
}
