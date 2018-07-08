import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styling/components/Navbar.css'

// const Navbar = ({ username, topic, page }) => (
//     <nav >
//         <ul id='list'>
//             <li id='logo' className='link'> NCnewsLogo</li>
//             <li id='home' ><Link className='link' to='/'>Home</Link></li>
//             <li id='main'><Link className='link'  to='/articles'>All</Link></li>
//             <li id='coding'><Link className='link'  to='/articles/topic/coding' >Coding</Link></li>
//             <li id='football'><Link className='link'  to='/articles/topic/football' >Cooking</Link></li>
//             <li id='cooking'><Link className='link'  to='/articles/topic/cooking' >Football</Link></li>
//             <li id='post'><Link className='link' to='articles/postarticle'>Post</Link></li>
//             <li id='login' className='link'>{`${username}`}</li>    
//         </ul>
//     </nav>
// )
class Navbar extends Component {

    render(){
    return (<nav>
        <ul id='list'>
            <li id='logo' className='link'> NCnewsLogo</li>
            <li id='home' ><Link className='link' to='/'>Home</Link></li>
            <li id='main'><Link className={this.props.page === 'main' ? 'link-active' : 'link'}  to='/articles'>All</Link></li>
            <li id='coding'><Link className={this.props.page === 'coding' ? 'link-active' : 'link'}  to='/articles/topic/coding' >Coding</Link></li>
            <li id='football'><Link className={this.props.page === 'football' ? 'link-active' : 'link'}  to='/articles/topic/football' >Football</Link></li>
            <li id='cooking'><Link className={this.props.page === 'cooking' ? 'link-active' : 'link'}  to='/articles/topic/cooking' >Cooking</Link></li>
            <li id='post'><Link className={this.props.page === 'postarticle' ? 'link-active' : 'link'} to='articles/postarticle'>Post</Link></li>
            <li id='login' className='link'> {`${this.props.username}`}</li>    
        </ul>
    </nav>
    )
    }
}

Navbar.propTypes = {

    username: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired

}

export default Navbar;