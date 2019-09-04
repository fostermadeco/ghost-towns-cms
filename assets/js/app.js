import React from 'react';
import { render } from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faAngleLeft, faAngleRight, faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import store from './configureStore';
import { getSprinklesComponent } from './sprinkles';

library.add([faLink, faAngleLeft, faAngleRight, faMapMarkerAlt, faInfoCircle]);

document.addEventListener('DOMContentLoaded', () => {
    const sprinkles = getSprinklesComponent();
    for (const sprinkle of sprinkles) {
        const { Comp, props, node } = sprinkle;
        render(<Comp store={store} {...props} />, node);
    }
});
