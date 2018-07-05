import React from 'react';
import PropTypes from 'prop-types';

const FilterComments = ({ filterComments, filtered }) => {
    console.log('in filterComments')

    const handleVotedClick = (event) => {
        return filterComments('voted')
    }

    const handleRecentClick = (event) => {
        return filterComments('recent')
    }
    return (
        <React.Fragment>
            {
                filtered === 'voted' ? <button onClick={handleRecentClick}>filter by most recent</button>
                    : <button onClick={handleVotedClick}>filter by most voted</button>
            }
        </React.Fragment>
    )

}

FilterComments.propTypes = {
    filterComments: PropTypes.func.isRequired,
}

export default FilterComments;