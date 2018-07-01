import React from 'react';
import PropTypes from 'prop-types';

const User = ({name, avatar}) => {

return (
    <div>
 <p>{name}</p>
    <div>{avatar}</div>
    </div>
)
}

User.propTypes = () => {

    
}

export default User;