import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styling/components/Navbar.css'

const Navbar = ({ username, topic, page }) => (
    <nav >
        <ul id='list'>
            <li id='logo' className='link' >  NCnewsLogo</li>
            <li id='home' ><Link className='link' to='/'>Home</Link></li>
            <li id='articles'><Link className='link'  to='/articles'>All</Link></li>
            <li id='coding'><Link className='link'  to='/articles/topic/coding' >Coding</Link></li>
            <li id='football'><Link className='link'  to='/articles/topic/football' >Cooking</Link></li>
            <li id='cooking'><Link className='link'  to='/articles/topic/cooking' >Football</Link></li>
            <li id='post'><Link className='link' to='articles/postarticle'>Post</Link></li>
            <li id='login'><Link className='link'  to='/'>{`${username}`}</Link></li>    
        </ul>
    </nav>
)

Navbar.PropTypes = {

    username: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired

}

export default Navbar;