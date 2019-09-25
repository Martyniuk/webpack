// Core
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

// Components
import { Space } from './Space';
import { Alien } from './Alien';
import { Jellyfish } from './Jellyfish';
import { Nav } from './Nav';

class Carousel extends Component {
    render() {
        return (
            <>
                <Nav />
                <Switch>
                    <Route
                        exact
                        component = { Space }
                        path = '/space'
                    />
                    <Route
                        exact
                        component = { Alien }
                        path = '/alien'
                    />
                    <Route
                        exact
                        component = { Jellyfish }
                        path = '/jellyfish'
                    />
                    <Redirect to = '/space' />
                </Switch>
            </>
        );
    }
}

render(
    <BrowserRouter>
        <Carousel />
    </BrowserRouter>,
    document.getElementById('app'),
);
