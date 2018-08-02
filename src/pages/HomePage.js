import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../dataFunctions/api';
import PropTypes from 'prop-types';
import '../styling/pages/HomePage.css'

class HomePage extends Component {

    state = {

        users: [],
        value: '',
        userlogged: false, 
        username: ''
    }

    getUsers = () => {
        return getAllUsers()
            .then(({users}) => this.setState({ users: users }))
    }

    componentDidMount() {
        this.getUsers()
        if (localStorage.username) {
            this.setState({ userlogged: true })
    }
}

    componentDidUpdate(prevProps) {
        if (this.props.username !== prevProps.username) {
            this.setState({ userlogged: true })
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.logUser(this.state.value)
    }

    render() {
        return (
            <div>
              <h1>Welcome to NC News</h1>
                {
                    this.state.userlogged &&
                    <p id='login1'> You are logged in as: <span id='username'> {this.props.username} </span></p> 
                }
                { this.state.users.length ? 
                <React.Fragment>
                <form onSubmit={this.handleSubmit} id='loginform'>
                <div className='row'>
                <div className='col-12'>
                {this.state.userlogged ? <span id='login2'>change login name:</span> : <span id='login3'>Please log in:</span>}
                        <select value={this.state.value} onChange={this.handleChange} id='login4' >
                            {this.state.users.map(user => <option key={user._id} value={user.username}> {user.username}</option>)}
                        </select>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='col-12'>
                  <input id='login5' type="submit" value="login" />
                  </div>
                  </div>
                 
                </form>
                 <div className='row'>
                 <div className='col-6'>
                 <button id='button-articles'><Link id='articles-link' to={`/articles`} >go to articles</Link></button>
                 </div>
                 <div className='col-6'>
                <button id='button-postarticle'> <Link id='postarticle-link'to={`/articles/postarticle`} >post an article</Link></button>
                 </div>
                 </div>
                 </React.Fragment>
                : <p>loading...</p>
                }
            </div>
        )
    }

}

HomePage.propTypes = {
    username: PropTypes.string.isRequired,

}

export default HomePage