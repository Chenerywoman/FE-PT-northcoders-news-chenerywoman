import React from 'react';
import TopicChooser from './TopicChooser';

const Navbar = ({username, topic}) => (<nav> 
    <h2>Logged in as {username}</h2> 
    <TopicChooser topic={topic}/>
</nav>)

export default Navbar;