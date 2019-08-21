import React from 'react';
import { connectStateResults } from 'react-instantsearch-dom';
import { PropTypes } from 'prop-types';
import { hitType } from './types';

const StateResults = ({ searchResults }) => {
    if (!searchResults) {
        return null;
    }

    const { hits, hitsPerPage, nbHits, page } = searchResults;
    const recordStart = page * hitsPerPage + 1;
    const recordEnd = hits.length === hitsPerPage ? (page + 1) * hitsPerPage : page * hitsPerPage + hits.length;

    const stats = `<h3>${nbHits} Ghost Towns</h3>`;

    if (hits.length === 0) {
        return <div className="italic my-2">'There are no results for that search.'</div>;
    }

    return <h3 className="text-red text-2xl font-semibold mt-3">{nbHits} Ghost Towns</h3>;
};

StateResults.propTypes = {
    searchResults: PropTypes.shape({
        hits: PropTypes.arrayOf(hitType),
        hitsPerPage: PropTypes.number,
        nbHits: PropTypes.number,
        page: PropTypes.number,
    }),
};

const CustomStateResults = connectStateResults(StateResults);

export default CustomStateResults;