import React from 'react';
import { render } from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import store from './configureStore';
import { getSprinklesComponent } from './sprinkles';

library.add([faAngleRight, faAngleDown]);

document.addEventListener('DOMContentLoaded', () => {
    const sprinkles = getSprinklesComponent();
    for (const sprinkle of sprinkles) {
        const { Comp, props, node } = sprinkle;
        render(<Comp store={store} {...props} />, node);
    }
});
