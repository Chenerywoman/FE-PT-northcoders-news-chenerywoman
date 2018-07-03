import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {HomePage, MainPage, ArticlesPage, ArticlePage, NoMatchPage} from './pages';

class App extends Component {

    state = {}

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                <h1>Northcoders News</h1>
                    <Switch>
                        <Route exact path='/' render={props => (< HomePage />)} />
                        <Route exact path='/articles' render={props => (<MainPage {...props} /> )} /> 
                        <Route path='/topics/:topic/articles' render={props => <ArticlesPage {...props} />} />
                        <Route path='/articles/:id' render={props => <ArticlePage {...props}/>} />
                        <Route component={NoMatchPage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }

}

export default App;