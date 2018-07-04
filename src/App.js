import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {HomePage, MainPage, ArticlesPage, ArticlePage, NoMatchPage} from './pages';

class App extends Component {

    state = {username: 'tickle122'}

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                <h1>Northcoders News</h1>
                    <Switch>
                        <Route exact path='/' render={props => (< HomePage />)} />
                        <Route exact path='/articles' render={props => (<MainPage username={this.state.username} {...props} /> )} /> 
                        <Route path='/articles/topic/:topic' render={props => <ArticlesPage username={this.state.username} {...props} />} />
                        <Route path='/articles/:id' render={props => <ArticlePage username={this.state.username}{...props}/>} />
                        <Route component={NoMatchPage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }

}

export default App;