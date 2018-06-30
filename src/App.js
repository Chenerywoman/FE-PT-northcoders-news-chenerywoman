import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {HomePage, ArticlesPage, ArticlePage} from './pages';
import Navbar from './components/Navbar'

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
                        <Route path='/articles/:id' component={ArticlePage}/>
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }

}

export default App;