import React from 'react';
import PropTypes from 'prop-types';
import '../styling/components/user.css';

const User = ({name, avatar}) => {

return (
    <div>
  <p>  created by: {name}</p>
    <img id='avatar' src={avatar} alt="avatar" height='75' width='75'></img>
    </div>
)
}

User.propTypes = {

    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
    
}

export default User;