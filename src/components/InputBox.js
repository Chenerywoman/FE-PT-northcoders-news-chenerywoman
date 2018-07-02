import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputBox extends Component { 

state = {
    userName: '',
    text: '',
    err: ''
}

handleTextChange = event => {
  this.setState({text:event.target.value})
}

handleNameChange = event => {
  this.setState({userName:event.target.value})
}

handleClick = event => {
    event.preventDefault();
    this.props.postComment(this.state.userName, this.state.text)
    .then(res => {
        if (res) this.setState({err: res})
        else {this.setState({userName:'', text: '', err: ''})}
})
    .catch(err => {
        this.setState({err: err.statusText})
    }
    )
}

render(){
return (<form onSubmit={this.handleClick}>
<h5>Add a comment</h5>
{this.state.err ? <div> {this.state.err} </div> : <div></div> }
    <label> 
    Username: <input name='userName' type='text' placeholder='username here' onChange={this.handleNameChange} value={this.state.userName} /> 
    </label>
    <label> Add text:
    <textarea name="comment" id="textbox" cols="52" rows="5" onChange={this.handleTextChange} value={this.state.text} placeholder='add text' /> 
    </label>
    <button type="submit" disabled={!this.state.userName || !this.state.text ? true : false} >Submit</button>
    </form>
)
}
}

InputBox.propTypes = {
    postComment: PropTypes.func.isRequired
}

export default InputBox;