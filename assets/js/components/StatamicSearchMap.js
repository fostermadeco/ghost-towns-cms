import React, { useReducer } from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import mapStyle from './style.json';
import viewportReducer from './reducers/viewportReducer';

const token = process.env.REACT_APP_MAPBOX_TOKEN;

const StatamicSearchMap = ({ searchResults, height, width }) => {
    const [viewport, dispatch] = useReducer(viewportReducer, {
        width,
        height,
        latitude: 0,
        longitude: 0,
        zoom: 1,
    });

    const onUpdateViewport = updatedViewport => dispatch({ type: 'UPDATE', params: updatedViewport });

    return (
        <ReactMapGL {...viewport} mapStyle={mapStyle} mapboxApiAccessToken={token} onViewportChange={onUpdateViewport}>
            <NavigationControl onViewportChange={onUpdateViewport} />
        </ReactMapGL>
    )
};

export default StatamicSearchMap;
