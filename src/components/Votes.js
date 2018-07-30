import React, { Component } from 'react';
import {changeVote} from '../dataFunctions/api';
import PropTypes from 'prop-types';
import '../styling/components/Votes.css'

class Votes extends Component {

    state = {
        votes: this.props.votes,
        id: this.props.id,
        route: this.props.route
    }

    handleUpClick = () => {
        this.setState({votes: this.state.votes + 1})
        return changeVote('up', this.state.id, this.state.route)
        .catch(err => {
            this.setState({votes: this.state.votes - 1})
        })
    }

    handleDownClick = () => {
        this.setState({votes: this.state.votes - 1})
        return changeVote('down', this.state.id, this.state.route)
        .catch(err => {
            console.log(err)
            this.setState({votes: this.state.votes + 1})
        })
    }

    render() {
        return (
            <div id='votes-container'>
                <span id='votes'>votes: {this.state.votes}  </span>
                <button className='down-vote' onClick={this.handleDownClick} >-</button>
                <button className='up-vote' onClick={this.handleUpClick} >+</button>
            </div>

        )
    }
}

Votes.propTypes = {
    votes: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
}


export default Votes;