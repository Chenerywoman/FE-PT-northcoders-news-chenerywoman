import React from 'react';
import {Link} from 'react-router-dom';
import '../styling/pages/NoMatch.css'

const NoMatchPage = props => {
    return (
      <React.Fragment>
      <div>
        <h2> 404: not found. </h2>
        <div><Link className='link-back' to='/'> Homepage---> </Link></div>
        <p></p>
        <Link className='link-back' to='/articles'> All articles---> </Link>
  
      </div>
      </React.Fragment>
    )
  }

  export default NoMatchPage;