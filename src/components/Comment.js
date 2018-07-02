import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Votes from './Votes';
import DeleteComment from './DeleteComment';

const Comment = ({ comment }) => {
// console.log('comment', comment.created_by.username)
    return (
        <div>
            <p> date:{comment.created_at} </p>
            <p>{comment.body}</p>
            <Votes votes={comment.votes} id={comment._id} route='comments' />
            <User name={comment.created_by.username} avatar={comment.created_by.avatar_url} />
            <DeleteComment id={comment._id}/>
        </div>
    )
}

Comment.propTypes = {

    comment: PropTypes.object.isRequired
}

export default Comment;