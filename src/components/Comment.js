import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Votes from './Votes';
import DeleteComment from './DeleteComment';

const Comment = ({ comment, deleteComment, username }) => {
    return (
        <div id='comment-container'>
            <p id='date'> date:{comment.created_at} </p>
            <p id='comment'>{comment.body}</p>
            <div id='comment-votes'><Votes votes={comment.votes} id={comment._id} route='comments' /></div>
            <div id='comment-user'><User name={comment.created_by.username} avatar={comment.created_by.avatar_url} /></div>
            { username === comment.created_by.username &&
           <div id='delete-comment'> <DeleteComment name={comment.created_by.username} id={comment._id} deleteComment={deleteComment} username={username}/></div>
            }
        </div>
    )
}

Comment.propTypes = {

    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}

export default Comment;