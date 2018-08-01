import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styling/components/CommentBox.css';
import {getUser} from '../dataFunctions/api';

class CommentBox extends Component {

    state = {
        text: '',
        err: '',
        avatar: '',
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

    componentDidMount () {
        if (this.props.username) {
        getUser(this.props.username)
        .then(({user}) => {
            console.log('user in didMount', user)
            this.setState({avatar: user.avatar_url})

        })
    }
    }

    componentDidUpdate(prevProps) {
        if (this.props.username !== prevProps.username){
        getUser(this.props.username)
        .then(({user})=> {
            console.log('user in didUpdate', user)
            this.setState({avatar: user.avatar_url})

        })
    }
    }

    render() {
        return (

            <form id='comment-box' onSubmit={this.handleClick}>
                <div id='comment-box-title'><span>Add a comment    </span><img id='comment-avatar' src={this.props.username === 'cooljmessy' ? "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/185?cb=20170730171002" : this.props.username === 'weegembump' ? "https://vignette.wikia.nocookie.net/mrmen/images/f/fb/MR_BUMP_3A.PNG/revision/latest/scale-to-width-down/150?cb=20170527174939" : this.state.avatar} alt="avatar" height='35' width='35'></img></div>
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