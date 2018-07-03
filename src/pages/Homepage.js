import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Homepage extends Component {

render(){
   return ( 
    <div>
   <div>Here's the Homepage</div>
   <Link to={`/articles`} > <p>articles</p> </Link> 
   </div>
)
}

}

export default Homepage