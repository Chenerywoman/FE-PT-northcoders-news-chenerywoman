import React from 'react';

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

export default DeleteComment;