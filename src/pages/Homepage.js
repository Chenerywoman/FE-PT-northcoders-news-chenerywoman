import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getAllUsers} from '../dataFunctions/api'

class Homepage extends Component {

state = {

    username: '',
    users: [],
    value: ''
}    

getUsers = () => {
    return getAllUsers()
    .then(users => {
        console.log('users', users)
        this.setState({users: users})}
    )
}

componentDidMount(){
  this.getUsers()
}

handleChange = (event) => {
    console.log(event)
    this.setState({value: event.target.value});
  }

handleSubmit = event => {
    event.preventDefault();
    this.props.logUser(this.state.value)
}
    
render(){
   return ( 
    <div>
   <div>Here's the Homepage</div>
   <Link to={`/articles`} > <p>articles</p> </Link> 
   <form onSubmit={this.handleSubmit}>
   <label>
     Pick your favorite flavor:
     <select value={this.state.value} onChange={this.handleChange}>
     {this.state.users.map(user => <option value={user.username}> {user.username}</option>)}
     </select>
   </label>
     
   <input type="submit" value="Submit" />
 </form>
    </div>
)
}

}

export default Homepage