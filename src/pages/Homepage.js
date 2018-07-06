import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../dataFunctions/api';
import PropTypes from 'prop-types';
import '../styling/pages/HomePage.css'

class HomePage extends Component {

    state = {

        users: [],
        value: '',
        userlogged: false
    }

    getUsers = () => {
        return getAllUsers()
            .then(users => this.setState({ users: users }))
    }

    componentDidMount() {
        this.getUsers()
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
                {
                    this.state.userlogged ? 
                    <p id='login1'> You are logged in as: {this.props.username} </p> 
                    // <img src="" alt="">
                    : <div></div>
                }
                <div class='row'>
                <div class='col-12'>
                <form onSubmit={this.handleSubmit} id='loginform'>
                {this.state.userlogged ? <span id='login2'>change login name:</span> : <span id='login3'>Please log in:</span>}
                        <select value={this.state.value} onChange={this.handleChange} id='login4' >
                            {this.state.users.map(user => <option key={user._id} value={user.username}> {user.username}</option>)}
                        </select>
                        <div class='row'>
                        <div class='col-12'>
                  <input id='login5' type="submit" value="login" />
                  </div>
                  </div>
                </form>
                </div>
                </div>
                <div class='row'>
                <div class='col-6'>
                <button id='button-articles'><Link id='articles-link' to={`/articles`} > <p>go to articles</p> </Link></button>
                </div>
                <div class='col-6'>
               <button id='button-postarticle'> <Link id='postarticle-link'to={`/articles/postarticle`} > <p>post an article</p> </Link></button>
                </div>
                </div>
            </div>
        )
    }

}

HomePage.propTypes = {
    username: PropTypes.string.isRequired,

}

export default HomePage