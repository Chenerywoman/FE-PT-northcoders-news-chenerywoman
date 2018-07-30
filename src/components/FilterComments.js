import React from 'react';
import PropTypes from 'prop-types';
import '../styling/components/FilterComments.css'

const FilterComments = ({ filterComments, filtered }) => {

    const handleVotedClick = (event) => {
        return filterComments('voted')
    }

    const handleRecentClick = (event) => {
        return filterComments('recent')
    }
    return (
        <React.Fragment>
            {
                filtered === 'voted' ? <button id='mostRecent' onClick={handleRecentClick}>most recent</button>
                    : <button id='mostVoted' onClick={handleVotedClick}>most voted</button>
            }
        </React.Fragment>
    )

}

FilterComments.propTypes = {
    filterComments: PropTypes.func.isRequired,
    filtered: PropTypes.string.isRequired
}

export default FilterComments;