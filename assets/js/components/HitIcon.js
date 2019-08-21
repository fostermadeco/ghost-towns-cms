import React from 'react';

import { PropTypes } from 'prop-types';
import markerIcon from '../../../images/marker-15.svg';
import markerIconSelected from '../../../images/marker-15-selected.svg';
import starIcon from '../../../images/star-15.svg';
import starIconSelected from '../../../images/star-15-selected.svg';

const HitIcon = ({ className, size = 30, isFeatured, isSelected, ...props }) => {
    let icon = markerIcon;
    if (isFeatured) {
        icon = isSelected ? starIconSelected : starIcon;
    } else if (isSelected) {
        icon = markerIconSelected;
    }
    return <img alt="icon" className={className} src={icon} width={size} {...props} />;
};

HitIcon.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
    isFeatured: PropTypes.bool,
    isSelected: PropTypes.bool,
};

export default HitIcon;
