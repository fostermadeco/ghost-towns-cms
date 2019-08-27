import React, { useEffect } from 'react';

const StateDropdownComponent = (props) => {
    const { statesList, ...rest } = props;

    //----------------------------
    // Render
    //----------------------------

    return (
        <select {...rest}>
            <option>Test 1</option>
            <option>Test 2</option>
            <option>Test 3</option>
        </select >
    )
};

export default StateDropdownComponent;
