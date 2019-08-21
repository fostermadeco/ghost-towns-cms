import React from 'react';
import { connectToggleRefinement } from 'react-instantsearch-dom';
import { PropTypes } from 'prop-types';

const ToggleRefinement = ({ currentRefinement, label, refine }) => (
    <label>
        <div className="inline-block">
            <input
                checked={currentRefinement === true || currentRefinement === 'true'}
                type="checkbox"
                onChange={() => refine(!currentRefinement)}
            />
        </div>
        <span className="ml-1">
            <small>{label}</small>
        </span>
    </label>
);

ToggleRefinement.propTypes = {
    currentRefinement: PropTypes.bool,
    refine: PropTypes.func.isRequired,
    label: PropTypes.string,
};

export default connectToggleRefinement(ToggleRefinement);
