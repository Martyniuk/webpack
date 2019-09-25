// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.css';
import space from '../../../theme/images/space.jpg';

// Components
import { Image } from '../Image';

export default class extends Component {
    render() {
        return (
            <section className = { Styles.space }>
                <h1>Space</h1>
                <Image link = { space } />
            </section>
        );
    }
}
