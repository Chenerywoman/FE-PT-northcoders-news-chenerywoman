import React from 'react';
import {Link} from 'react-router-dom';

const NoMatchPage = props => {
    return (
      <div>
        <h2> 404: not found. </h2>
        <Link to='/'> Go back home---> </Link>
  
      </div>
    )
  }

  export default NoMatchPage;