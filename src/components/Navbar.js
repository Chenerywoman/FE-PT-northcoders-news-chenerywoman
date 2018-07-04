import React from 'react';
import TopicChooser from './TopicChooser';

const Navbar = ({username}) => (<nav> 
    <h2>Logged in as {username}</h2> 
    <TopicChooser />
</nav>)

export default Navbar;