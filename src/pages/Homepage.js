import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../dataFunctions/api'

class Homepage extends Component {

    state = {

        users: [],
        value: '',
        userlogged: false
    }

    getUsers = () => {
        return getAllUsers()
            .then(users => {
                this.setState({ users: users })
            }
            )
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
                    this.state.userlogged ? <p> You are now logged in as: {this.props.username} </p> : <p>Please log in: </p>
                }
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Select your username:
                        <select value={this.state.value} onChange={this.handleChange}>
                            {this.state.users.map(user => <option key={user._id} value={user.username}> {user.username}</option>)}
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <Link to={`/articles`} > <p>articles</p> </Link>
                <Link to={`/articles/postarticle`} > <p>post an article</p> </Link>
            </div>
        )
    }

}

export default Homepage