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
    <>
        <select value={currentValue || ''} onChange={event => onChange(event.currentTarget.value)}>
            <option value="">Select Miles</option>
            {items.map(item => (
                <option key={item.label} value={item.isRefined ? currentValue : item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    </>
);

RadiusSelect.propTypes = {
    currentValue: PropTypes.string,
    onChange: PropTypes.func,
};

export default RadiusSelect;
