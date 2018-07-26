import React from 'react';
import PropTypes from 'prop-types';

const DeleteComment = ({deleteComment, id, username}) =>  {

const handleClick = (event) => {
    event.preventDefault();
   deleteComment(id, username)
}
        return (<form onSubmit={handleClick}>
        <h4>Delete comment</h4>
        <button type="submit" >Delete</button>
        </form>
        )
}

DeleteComment.propTypes = {
        deleteComment: PropTypes.func.isRequired,
        id: PropTypes.string,
        username: PropTypes.string
    }

export default DeleteComment;