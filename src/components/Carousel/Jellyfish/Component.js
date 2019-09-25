// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.css';
import jellyfish from '../../../theme/images/jellyfish.jpg';

// Components
import { Image } from '../Image';

export default class extends Component {
    render() {
        return (
            <section className = { Styles.jellyfish }>
                <h1>JELLYFISH</h1>
                <Image link = { jellyfish } />
            </section>
        );
    }
}
