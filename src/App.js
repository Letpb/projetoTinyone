import React, { Component } from 'react';

import Header from './components/Header'
import Body from './components/Body'
import Rodape from './components/Rodape'


class App extends Component {
    render() {
        return (
            <div className = "App">
                <Header />
                <Body />
                <Rodape />


            </div>
        );
    };
};

export default App;