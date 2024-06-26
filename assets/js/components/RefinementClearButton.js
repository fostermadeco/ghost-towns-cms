import React from 'react';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { PropTypes } from 'prop-types';
import { ButtonSmall } from './StyledComponents';

const RefinementClearButton = ({ refine, items, onClick }) => (
    <button
        type="button"
        className="button button-white button-sm hover:bg-tan-100 text-xs"
        onClick={() => {
            refine(items);
            onClick();
        }}
    >
        Clear Filters
    </button>
);

RefinementClearButton.propTypes = {
    refine: PropTypes.func,
    items: PropTypes.array,
    onClick: PropTypes.func,
};

export default connectCurrentRefinements(RefinementClearButton);
