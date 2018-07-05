import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentsList = ({comments, deleteComment, username}) =>  {
        return (
            <div>
                <h4>Comments</h4>
                {comments.map(comment => <Comment key={comment._id} comment={comment} deleteComment={deleteComment} username={username}/>)}
            </div>
        )
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.deleteComment.isRequired,
    username: PropTypes.username.isRequired
}

export default CommentsList;