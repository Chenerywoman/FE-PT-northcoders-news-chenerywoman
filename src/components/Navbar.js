import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styling/components/Navbar.css'

class Navbar extends Component {

    render(){
    return (
    <nav>
        <ul className='flex-container-navbar'  >
            <li id='logo' className='link'> NCnewsLogo</li>
            <li ><NavLink activeClassName='link-active' className='link' exact to='/'>Home</NavLink></li>
            <li ><NavLink activeClassName='link-active' className='link' exact to='/articles'>All</NavLink></li>
            <li ><NavLink activeClassName='link-active' className='link' to='/articles/topic/coding' >Coding</NavLink></li>
            <li ><NavLink activeClassName='link-active' className='link' to='/articles/topic/football' >Football</NavLink></li>
            <li ><NavLink activeClassName='link-active' className='link' to='/articles/topic/cooking' >Cooking</NavLink></li>
            <li ><NavLink activeClassName='link-active' className='link' to='/postarticle'>Post</NavLink></li>
            <li> <NavLink id='login' className='link' to='/'>{`${this.props.username}`}</NavLink></li>    
        </ul>
    </nav>
    )
    }
}

Navbar.propTypes = {

    username: PropTypes.string.isRequired,
}

export default Navbar;