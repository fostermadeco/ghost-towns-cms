import React, { useEffect } from 'react';

const StatamicSearchStateDropdownComponent = ({ statesList, onChange, ...rest }) => {
    return (
        <select onChange={(event) => onChange(event.target.value)} {...rest}>
            <option value="">All</option>
            {statesList.map(state => (
                <option key={state.id} value={state.slug}>{state.title}</option>
            ))}
        </select >
    )
};

export default StatamicSearchStateDropdownComponent;
