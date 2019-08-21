import React from 'react';
import { Marker } from 'react-map-gl';
import { PropTypes } from 'prop-types';
import HitIcon from './HitIcon';

const classNames = require('classnames');

const MapMarker = ({ latitude, longitude, isFeatured = false, onClick = () => {}, isSelected = false }) => {
    const markerClass = classNames({ 'z-10': isSelected });
    return (
        <div>
            <Marker latitude={latitude} longitude={longitude} offsetLeft={-16} offsetTop={-20} className={markerClass}>
                <button type="button" onClick={onClick}>
                    <HitIcon isFeatured={isFeatured} isSelected={isSelected} />
                </button>
            </Marker>
        </div>
    );
};

MapMarker.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    onClick: PropTypes.func,
    isFeatured: PropTypes.bool,
    isSelected: PropTypes.bool,
};

export default MapMarker;
