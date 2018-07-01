import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import Votes from './Votes';

const Comment = ({ comment }) => {

    return (
        <div>
            <p> date:{comment.created_at} </p>
            <p>{comment.body}</p>
            <Votes votes={comment.votes} id={comment._id} route='comments' />
            <User username={comment.created_by.username} avatar={comment.created_by.avatar_url} />
        </div>
    )
}

Comment.propTypes = {

    comment: PropTypes.object.isRequired
}

export default Comment;