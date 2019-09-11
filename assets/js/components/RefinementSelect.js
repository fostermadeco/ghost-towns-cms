import React from 'react';
import { PropTypes } from 'prop-types';
import { connectMenu } from 'react-instantsearch-dom';

const MenuSelect = ({ items, currentRefinement, refine, translations = {} }) => {
    const seeAllOption = translations.seeAllOption ? translations.seeAllOption : 'See All';
    return (
        <select
            className="select-css"
            value={currentRefinement || ''}
            onChange={event => refine(event.currentTarget.value)}
        >
            <option value="">{seeAllOption}</option>
            {items.map(item => (
                <option key={item.label} value={item.isRefined ? currentRefinement : item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );
};

const CustomMenuSelect = connectMenu(MenuSelect);

const RefinementSelect = ({ attribute, defaultLabel = 'See All' }) => (
    <div className="inline-block mr-3">
        <CustomMenuSelect
            attribute={attribute}
            translations={{
                seeAllOption: defaultLabel,
            }}
        />
    </div>
);

RefinementSelect.propTypes = {
    attribute: PropTypes.string.isRequired,
    defaultLabel: PropTypes.string,
};

export default RefinementSelect;
