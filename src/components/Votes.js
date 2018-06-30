import React, { Component } from 'react';
import {changeVote} from '../api';

class Votes extends Component {

    state = {
        votes: this.props.votes,
        id: this.props.id,
        route: this.props.route
    }

    componentDidMount(){

// do I need this?
    }

    handleUpClick = () => {
        this.setState({votes: this.state.votes + 1})
        // why is this the same as before 
        console.log('votes after', this.state.votes)
        return changeVote('up', this.state.id, this.state.route)
        .catch(err => {
            console.log(err)
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
            <div>
                <h4>Votes</h4>
                <p>votes: {this.state.votes}</p>
                <button onClick={this.handleUpClick} >Up Vote</button>
                <button onClick={this.handleDownClick} >Down Vote</button>
            </div>

        )
    }
}

export default Votes;