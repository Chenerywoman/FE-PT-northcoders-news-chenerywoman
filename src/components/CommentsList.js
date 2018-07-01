import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

const CommentsList = ({comments}) => {
return (  
<div>
<h4>Comments</h4>
{comments.map(comment => <Comment key={comment._id} comment={comment}/> )} 
</div>
)
}

CommentsList.propTypes = {
    comments: PropTypes.array.isRequired
}

export default CommentsList;