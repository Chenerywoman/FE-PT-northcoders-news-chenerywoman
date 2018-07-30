import React from 'react';
import PropTypes from 'prop-types';
import '../styling/components/User.css';

const User = ({name, avatar}) => {

return (
    <span>
  <p>{name}</p>
    <img id='avatar' src={name === 'cooljmessy' ? "https://vignette.wikia.nocookie.net/mrmen/images/1/1a/MR_MESSY_4A.jpg/revision/latest/scale-to-width-down/185?cb=20170730171002" : name === 'weegembump' ? "https://vignette.wikia.nocookie.net/mrmen/images/f/fb/MR_BUMP_3A.PNG/revision/latest/scale-to-width-down/150?cb=20170527174939" : avatar} alt="avatar" height='75' width='75'></img>
    </span>
)
}

User.propTypes = {

    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
    
}

export default User;