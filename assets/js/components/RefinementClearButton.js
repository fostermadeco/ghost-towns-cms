import React from 'react';
import { connectCurrentRefinements } from 'react-instantsearch-dom';
import { PropTypes } from 'prop-types';
import { ButtonSmall } from './StyledComponents';

const RefinementClearButton = ({ refine, items, onClick }) => (
    <ButtonSmall
        onClick={() => {
            refine(items);
            onClick();
        }}
    >
        Clear Filters
    </ButtonSmall>
);

RefinementClearButton.propTypes = {
    refine: PropTypes.func,
    items: PropTypes.array,
    onClick: PropTypes.func,
};

export default connectCurrentRefinements(RefinementClearButton);
