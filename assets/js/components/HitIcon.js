import React from 'react';

import { PropTypes } from 'prop-types';
import markerIcon from '../../../images/pin-default.svg';
import markerIconSelected from '../../../images/pin-selected.svg';

const HitIcon = ({ className, size = 30, isSelected, ...props }) => {
    let icon = markerIcon;
    if (isSelected) {
        icon = markerIconSelected;
    }
    return <img alt="icon" className={className} src={icon} width={size} {...props} />;
};

HitIcon.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
    isSelected: PropTypes.bool,
};

export default HitIcon;
