import React from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import { PropTypes } from 'prop-types';
import mapStyle from './style.json';

const token = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = ({ children, onUpdateViewport = () => {}, viewport }) => (
    <ReactMapGL {...viewport} mapStyle={mapStyle} mapboxApiAccessToken={token} onViewportChange={onUpdateViewport}>
        <NavigationControl onViewportChange={onUpdateViewport} />
        {children}
    </ReactMapGL>
);

Map.propTypes = {
    onUpdateViewport: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Map;
