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
        <div id='filter-comments-container'>
            <span id='comments-title'>Comments</span>
            {
                filtered === 'voted' ? <button className='filterButton' id='mostRecent' onClick={handleRecentClick}>most recent</button>
                    : <button className='filterButton' id='mostVoted' onClick={handleVotedClick}>most voted</button>
            }
        </div>
    )

}

FilterComments.propTypes = {
    filterComments: PropTypes.func.isRequired,
    filtered: PropTypes.string.isRequired
}

export default FilterComments;