import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styling/components/CommentBox.css'

class CommentBox extends Component {

    state = {
        text: '',
        err: ''
    }

    handleTextChange = event => {
        this.setState({ text: event.target.value })
    }

    handleClick = event => {
        event.preventDefault();
        this.props.postComment(this.props.username, this.state.text)
            .then(res => this.setState({ userName: '', text: '' }))
            .catch(err => this.setState({ err: err.statusText }))
    }

    render() {
        return (

            <form id='comment-box' onSubmit={this.handleClick}>
                <div id='comment-box-title'>Add a comment</div>
                {this.state.err && <div> {this.state.err} </div>}
                    <textarea name="comment" id="textbox" cols="52" rows="5" onChange={this.handleTextChange} value={this.state.text} placeholder='write your comment here...' />
                <button id='comment-box-submit' type="submit" disabled={!this.state.text} >Submit</button>
            </form>
        )
    }
}

CommentBox.propTypes = {
    postComment: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}

export default CommentBox;