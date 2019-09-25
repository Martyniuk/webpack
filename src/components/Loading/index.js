// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.css';

export class Loading extends Component {
    render() {
        const { error, timedOut, pastDelay, retry } = this.props;

        if (error) {
            return (
                <div className = { Styles.loading }>
                    Error! <button onClick = { retry }>Retry</button>
                </div>
            );
        } else if (timedOut) {
            return (
                <div className = { Styles.loading }>
                    Taking a long time...
                    <button onClick = { retry }>Retry</button>
                </div>
            );
        } else if (pastDelay) {
            return <div className = { Styles.loading }>Loading...</div>;
        }

        return null;
    }
}
