// Core
import React, { Component } from 'react';
import Loadable from 'react-loadable';

// Components
import { Loading } from '../../Loading';

const LoadableComponent = Loadable({
    loader:  () => import(/* webpackChunkName: "jellyfish" */ './Component'),
    loading: Loading,
    delay:   1000,
});

export class Jellyfish extends Component {
    render() {
        return <LoadableComponent />;
    }
}
