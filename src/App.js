import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';

class App extends Component {

    state = {}

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                <h1>Northcoders News</h1>
                <Navbar />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/topics/:topic/articles' component={ArticlesPage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }

}

export default App;