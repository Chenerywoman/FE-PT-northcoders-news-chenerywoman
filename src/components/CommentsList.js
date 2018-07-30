import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import '../styling/components/CommentsList.css'

const CommentsList = ({comments, deleteComment, username}) =>  {
        return (
            <div id='comments-container'>
                <p id='comments-title'>Comments</p>
                <div id='comments-list'>
                {comments.map(comment => <Comment key={comment._id} comment={comment} deleteComment={deleteComment} username={username}/>)}
                </div>
            </div>
        )
}

CommentsList.propTypes = {
    comments: PropTypes.array,
    deleteComment: PropTypes.func,
    username: PropTypes.string.isRequired
}

export default CommentsList;