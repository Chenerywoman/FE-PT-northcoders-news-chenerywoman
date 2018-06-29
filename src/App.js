import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


import Navbar from './Navbar';
import Homepage from './pages/Homepage';

class App extends Component {

    state = {}

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                <Navbar />
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }

}

export default App;