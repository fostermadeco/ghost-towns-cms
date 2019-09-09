import React, { useEffect, useRef } from 'react';
import { Marker } from 'react-map-gl';
import { PropTypes } from 'prop-types';
import HitIcon from './HitIcon';

const classNames = require('classnames');

const MapMarker = ({ latitude, longitude, onClick = () => {}, isSelected = false, isSoftSelected = false }) => {
    const buttonRef = useRef(null);
    const markerClass = classNames({ 'z-10': isSelected || isSoftSelected });
    useEffect(() => {
        if (!buttonRef.current) return;
        buttonRef.current.blur();
        if (isSelected) {
            buttonRef.current.focus();
        }
    }, [isSelected, buttonRef]);
    return (
        <div>
            <Marker latitude={latitude} longitude={longitude} offsetLeft={-16} offsetTop={-20} className={markerClass}>
                <button className="outline-none focus:outline-none" ref={buttonRef} type="button" onClick={onClick}>
                    <HitIcon isSelected={isSelected} isSoftSelected={isSoftSelected} />
                </button>
            </Marker>
        </div>
    );
};

MapMarker.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
    isSoftSelected: PropTypes.bool,
};

export default MapMarker;
