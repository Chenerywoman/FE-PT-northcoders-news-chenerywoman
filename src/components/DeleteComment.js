import React, { Component } from 'react';

class DeleteComment extends Component  {

    state = {
        userName: ''
    }

    handleNameChange = event => {
        this.setState({userName:event.target.value})
      }

handleClick = (event) => {
    event.preventDefault();
    this.props.deleteComment(this.props.id, this.state.userName)
    this.setState({userName: ''})
}

    render() {
        return <form onSubmit={this.handleClick}>
        <h4>Delete comment: comment creator only</h4>
        <label> 
        username: <input name='userName' type='text' placeholder='username here' onChange={this.handleNameChange} value={this.state.userName} /> 
        </label>
        <button type="submit">Delete</button>
        </form>
    }
    

}

export default DeleteComment;