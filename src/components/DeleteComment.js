import React from 'react';
import PropTypes from 'prop-types';
import '../styling/components/DeleteComment.css'

const DeleteComment = ({deleteComment, id, username}) =>  {

const handleClick = (event) => {
    event.preventDefault();
   deleteComment(id, username)
}
        return (<form onSubmit={handleClick}>
        <button id='delete-comment' type="submit" >Delete</button>
        </form>
        )
}

DeleteComment.propTypes = {
        deleteComment: PropTypes.func.isRequired,
        id: PropTypes.string,
        username: PropTypes.string
    }

export default DeleteComment;