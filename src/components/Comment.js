import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Votes from './Votes';
import DeleteComment from './DeleteComment';

const Comment = ({ comment, deleteComment, username }) => {
// console.log('comment', comment.created_by.username)
    return (
        <div>
            <p> date:{comment.created_at} </p>
            <p>{comment.body}</p>
            <Votes votes={comment.votes} id={comment._id} route='comments' />
            <User name={comment.created_by.username} avatar={comment.created_by.avatar_url} />
            { username === comment.created_by.username ?
            <DeleteComment name={comment.created_by.username} id={comment._id} deleteComment={deleteComment}/>
            : <div></div>
            }
        </div>
    )
}

Comment.propTypes = {

    comment: PropTypes.object.isRequired
}

export default Comment;