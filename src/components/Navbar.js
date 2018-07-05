import React from 'react';
import {Link} from 'react-router-dom';
import TopicChooser from './TopicChooser';

const Navbar = ({username, topic}) => (<nav> 
    <h2>Logged in as {username}</h2> 
    <Link to='/'>login as a different username</Link>

    <TopicChooser topic={topic}/>
</nav>)

export default Navbar;