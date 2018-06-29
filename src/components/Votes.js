import React, { Component } from 'react';
import {changeArticleVote} from '../api';

class Votes extends Component {

    state = {
        votes: this.props.votes,
        articleId: this.props.articleId
    }

    componentDidMount(){

// do I need this?
    }

    handleUpClick = () => {
        console.log('votes before', this.state.votes)
        this.setState({votes: this.state.votes + 1})
        // why is this the same as before 
        console.log('votes after', this.state.votes)
        return changeArticleVote('up', this.state.articleId)
        .catch(err => console.log(err))
    }

    handleDownClick = () => {
        console.log('in handleDownclick')
        this.setState({votes: this.state.votes - 1})
        return changeArticleVote('down', this.state.articleId)
        .catch(err => console.log(err))
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