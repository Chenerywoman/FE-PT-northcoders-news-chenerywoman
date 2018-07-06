import React from 'react';
import {Link} from 'react-router-dom';

const NoMatchPage = props => {
    return (
      <React.Fragment>
      <div>
        <h2> 404: not found. </h2>
        <div><Link to='/'> Homepage---> </Link></div>
        <p></p>
        <Link to='/articles'> All articles---> </Link>
  
      </div>
      </React.Fragment>
    )
  }

  export default NoMatchPage;