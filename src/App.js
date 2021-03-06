import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styling/App.css';

import {HomePage, ArticlesPage, ArticlePage, PostArticlePage, NoMatchPage} from './pages';
import {Navbar} from './components';

class App extends Component {

    state = {
        username: '',
        page: ''
    }

    logUser = (username) => {
        this.setState({username})
    }

    componentDidMount(){
        if (localStorage.username) {
        const newUserName = localStorage.getItem('username')       
        this.setState({username: newUserName})
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.username !== this.state.username) {
            return localStorage.setItem('username', this.state.username)
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className='app-container'>
                <Navbar className='navbar' username={this.state.username}/>
                <div className='page'>
                    <Switch>
                        <Route exact path='/' render={props => < HomePage logUser={this.logUser} username={this.state.username}/> } />
                        <Route exact path='/articles' render={props => <ArticlesPage {...props} /> } /> 
                        <Route exact path='/articles/topic/:topic' render={props => <ArticlesPage {...props} />} />
                        <Route exact path='/articles/:id' render={props => <ArticlePage username={this.state.username}{...props}/>} />
                        <Route exact path='/postarticle' render={props => <PostArticlePage username={this.state.username}{...props} />} />
                        <Route component={NoMatchPage} />
                    </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }

}

export default App;