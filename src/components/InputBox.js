import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {postText} from '../api';

class InputBox extends Component { 

state = {
    userName: '',
    text: '',
}

// change this for multiple inputs
handleTextChange = event => {
  this.setState({text:event.target.value})
}

handleNameChange = event => {
  this.setState({userName:event.target.value})
}

handleClick = event => {
    event.preventDefault();
    postText(this.state.userName, this.state.text, this.props.route, this.props.id, this.props.endpoint) 
    this.setState({userName:'', text: ''})
}

render(){
return <form onSubmit={this.handleClick}>
    <label> 
    Username: <input name='userName' type='text' placeholder='username here' onChange={this.handleNameChange} value={this.state.userName} /> 
    </label>
    <label> Add text:
    <textarea name="comment" id="textbox" cols="52" rows="5" onChange={this.handleTextChange} value={this.state.text} placeholder='add 
     '/> 
    </label>
    <button type="submit">Submit</button>
    </form>
}
}

InputBox.propTypes = {
    route: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    endpoint: PropTypes.string.isRequired
}

export default InputBox;