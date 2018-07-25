import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styling/components/Navbar.css'

class Navbar extends Component {

    render(){
    return (
    <nav>
        <ul id='list'>
            <li id='logo' className='link'> NCnewsLogo</li>
            <li id='home' ><NavLink activeClassName='link-active' className='link' exact to='/'>Home</NavLink></li>
            <li id='main'><NavLink activeClassName='link-active' className='link' exact to='/articles'>All</NavLink></li>
            <li id='coding'><NavLink activeClassName='link-active' className='link' to='/articles/topic/coding' >Coding</NavLink></li>
            <li id='football'><NavLink activeClassName='link-active' className='link' to='/articles/topic/football' >Football</NavLink></li>
            <li id='cooking'><NavLink activeClassName='link-active' className='link' to='/articles/topic/cooking' >Cooking</NavLink></li>
            <li id='post'><NavLink activeClassName='link-active' className='link' to='/postarticle'>Post</NavLink></li>
            <li id='login'> <NavLink activeClassName='link-active' className='link' to='/'>{`${this.props.username}`}</NavLink></li>    
        </ul>
    </nav>
    )
    }
}

Navbar.propTypes = {

    username: PropTypes.string.isRequired,
}

export default Navbar;