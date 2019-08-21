import React from 'react';
import { PropTypes } from 'prop-types';

const items = [
    {
        label: '30 miles',
        value: '64373',
    },
    {
        label: '100 miles',
        value: '160934',
    },
    {
        label: '500 miles',
        value: '804672',
    },
    {
        label: 'All',
        value: 'all',
    },
];

const RadiusSelect = ({ currentValue, onChange }) => (
    <div>
        <h5 className="mb-2 mr-2 text-xs inline">Search within:</h5>
        <select value={currentValue || ''} onChange={event => onChange(event.currentTarget.value)}>
            <option value="">Select mile radius</option>
            {items.map(item => (
                <option key={item.label} value={item.isRefined ? currentValue : item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    </div>
);

RadiusSelect.propTypes = {
    currentValue: PropTypes.string,
    onChange: PropTypes.func,
};

export default RadiusSelect;
