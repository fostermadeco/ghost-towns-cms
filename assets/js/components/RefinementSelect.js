import React from 'react';
import { MenuSelect } from 'react-instantsearch-dom';
import { PropTypes } from 'prop-types';

const RefinementSelect = ({ attribute, label, defaultLabel = 'See All' }) => (
    <label>
        <div className="inline-block mr-3">
            <small>
                <MenuSelect
                    attribute={attribute}
                    translations={{
                        seeAllOption: defaultLabel,
                    }}
                />
            </small>
        </div>
    </label>
);

RefinementSelect.propTypes = {
    attribute: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    defaultLabel: PropTypes.string,
};

export default RefinementSelect;
