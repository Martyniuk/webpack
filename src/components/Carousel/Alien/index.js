// Core
import React, { Component } from 'react';
import Loadable from 'react-loadable';

// Components
import { Loading } from '../../Loading';

const LoadableComponent = Loadable({
    loader:  () => import(/* webpackChunkName: "alien" */ './Component'),
    loading: Loading,
    // delay:   2000,
});

export class Alien extends Component {
    render() {
        return <LoadableComponent />;
    }
}
