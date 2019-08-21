import React from 'react';
import { MenuSelect } from 'react-instantsearch-dom';
import { PropTypes } from 'prop-types';

const RefinementSelect = ({ attribute, label }) => (
    <label>
        <span className="inline-block">
            <small>{label}:</small>
        </span>
        <div className="inline-block ml-2">
            <small>
                <MenuSelect attribute={attribute} />
            </small>
        </div>
    </label>
);

RefinementSelect.propTypes = {
    attribute: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default RefinementSelect;
