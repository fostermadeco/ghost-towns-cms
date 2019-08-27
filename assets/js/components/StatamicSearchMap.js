import React, { useReducer } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import mapStyle from './style.json';
import HitIcon from './HitIcon';
import viewportReducer from './reducers/viewportReducer';

const token = process.env.REACT_APP_MAPBOX_TOKEN;
const classNames = require('classnames');

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
            <div>
                {searchResults.map(searchResult => (
                    <div key={searchResult.id}>
                        <Marker
                            latitude={Number(searchResult.latitude)}
                            longitude={Number(searchResult.longitude)}
                            offsetLeft={-16}
                            offsetTop={-20}
                        >
                            <button type="button">
                                <HitIcon />
                            </button>
                        </Marker>
                    </div>
                ))}
            </div>
        </ReactMapGL>
    )
};

export default StatamicSearchMap;
