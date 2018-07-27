import React from 'react';
import PropTypes from 'prop-types';
import '../styling/components/User.css';

const User = ({name, avatar}) => {

return (
    <span>
  <p>{name}</p>
    <img id='avatar' src={avatar} alt="avatar" height='75' width='75'></img>
    </span>
)
}

User.propTypes = {

    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
    
}

export default User;