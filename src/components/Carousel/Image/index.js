// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.css';

export class Image extends Component {
    render() {
        const { link } = this.props;

        return (
            <div className = { Styles.image }>
                <img src = { link } />
            </div>
        );
    }
}
