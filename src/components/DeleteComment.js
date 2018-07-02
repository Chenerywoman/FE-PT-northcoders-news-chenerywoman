import React, { Component } from 'react';

class DeleteComment extends Component  {

    state = {
        userName: '',
        err: ''
    }

    handleNameChange = event => {
        this.setState({userName:event.target.value})
      }

handleClick = (event) => {
    event.preventDefault();
    if (this.props.name !== this.state.userName) { this.setState({err: 'only comment creator can delete comment'}) }
    else {
    this.props.deleteComment(this.props.id, this.state.userName)
    this.setState({userName: ''})
    }
}

    render() {
        return <form onSubmit={this.handleClick}>
        <h4>Delete comment: comment creator only</h4>
        {this.state.err ? <div> {this.state.err}</div> : <div></div> }
        <label> 
        username: <input name='userName' type='text' placeholder='username here' onChange={this.handleNameChange} value={this.state.userName} /> 
        </label>
        <button type="submit" >Delete</button>
        </form>
    }
    

}

export default DeleteComment;