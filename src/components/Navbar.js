import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styling/components/Navbar.css';
import NClogo from '../styling/NClogo.png';
import { getUser } from '../dataFunctions/api'

class Navbar extends Component {

    state = {
        avatar: '',
    }

    componentDidMount() {
        if (this.props.username) {
            getUser(this.props.username)
                .then(({ user }) => {
                    this.setState({ avatar: user.avatar_url })
                })
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.username !== prevProps.username) {
            getUser(this.props.username)
                .then(({ user }) => {
                    this.setState({ avatar: user.avatar_url })

                })
        }
    }



    render() {
        return (
            <nav>
                <ul className='navbar'  >
                    <li id='logo' className='link nav-link'><img src={NClogo} alt='NCLogo' height='30' width='75'></img></li>
                    <li className='nav-link'><NavLink activeClassName='link-active' className='link' exact to='/'>Home</NavLink></li>
                    <li className='nav-link'><NavLink activeClassName='link-active' className='link' exact to='/articles'>All</NavLink></li>
                    <li className='nav-link'><NavLink activeClassName='link-active' className='link' to='/articles/topic/coding' >Coding</NavLink></li>
                    <li className='nav-link'><NavLink activeClassName='link-active' className='link' to='/articles/topic/football' >Football</NavLink></li>
                    <li className='nav-link'><NavLink activeClassName='link-active' className='link' to='/articles/topic/cooking' >Cooking</NavLink></li>
                    <li className='nav-link'><NavLink activeClassName='link-active' className='link' to='/postarticle'>Post</NavLink></li>
                    <li className='nav-link'> <NavLink id='login' className='link' to='/'> <img id='NavAvatar' src={this.props.username === 'cooljmessy' ? "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/185?cb=20170730171002" : this.props.username === 'weegembump' ? "https://vignette.wikia.nocookie.net/mrmen/images/f/fb/MR_BUMP_3A.PNG/revision/latest/scale-to-width-down/150?cb=20170527174939" : this.state.avatar} alt="avatar" height='35' width='35'></img></NavLink></li>
                </ul>
            </nav>
        )
    }
}

Navbar.propTypes = {

    username: PropTypes.string.isRequired,
}

export default Navbar;