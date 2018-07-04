import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {HomePage, MainPage, ArticlesPage, ArticlePage, NoMatchPage, PostArticlePage} from './pages';

class App extends Component {

    state = {username: ''}

    logUser = (username) => {
        this.setState({username})
    }

    
    render() {
        console.log('username', this.state.username)
        return (
            <BrowserRouter>
                <React.Fragment>
                <h1>Northcoders News</h1>
                    <Switch>
                        <Route exact path='/' render={props => (< HomePage logUser={this.logUser}/>)} />
                        <Route exact path='/articles' render={props => (<MainPage username={this.state.username} {...props} /> )} /> 
                        <Route path='/articles/topic/:topic' render={props => <ArticlesPage username={this.state.username} {...props} />} />
                        <Route path='/articles/postarticle' render={props => <PostArticlePage username={this.state.username} {...props} />} />
                        <Route path='/articles/:id' render={props => <ArticlePage username={this.state.username}{...props}/>} />
                        <Route component={NoMatchPage} />
                    </Switch>
                </React.Fragment>
            </BrowserRouter>
        )
    }

}

export default App;