import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { PropTypes } from 'prop-types';

const Icon = ({ name, size, ...props }) => <FontAwesomeIcon icon={name} size={size} {...props} />;

Icon.propTypes = {
    name: PropTypes.string,
    // e.g. 'xs', 'sm', 'lg', '2x', etc.
    size: PropTypes.string,
};

export default Icon;
