import React, { useEffect } from 'react';

const StateDropdownComponent = ({ statesList, onChange, ...rest }) => {
    return (
        <select onChange={() => onChange(state.slug)} {...rest}>
            <option value="">All</option>
            {statesList.map(state => (
                <option value={state.slug}>{state.title}</option>
            ))}
        </select >
    )
};

export default StateDropdownComponent;
