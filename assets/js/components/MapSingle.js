import React, { useState, useReducer, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Popup } from 'react-map-gl';
import Map from './Map';
import MapMarker from './MapMarker';
import useElementSize from './hooks/useElementSize';
import viewportReducer from './reducers/viewportReducer';

const MapSingle = ({ town }) => {
    const [mapWrapRef, mapWrapWidth] = useElementSize();

    const [viewport, dispatch] = useReducer(viewportReducer, {
        width: mapWrapWidth,
        height: 500,
        zoom: 12,
        latitude: town._geoloc.lat,
        longitude: town._geoloc.lng,
    });

    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        dispatch({
            type: 'UPDATE',
            params: {
                width: mapWrapWidth,
            },
        });
    }, [mapWrapRef, mapWrapWidth]);

    const updateViewport = updatedViewport => {
        dispatch({
            type: 'UPDATE',
            params: updatedViewport,
        });
    };

    const renderPopup = () =>
        showPopup && (
            <Popup
                latitude={town._geoloc.lat}
                longitude={town._geoloc.lng}
                closeButton
                onClose={() => setShowPopup(false)}
                closeOnClick={false}
                offsetTop={-30}
                offsetLeft={-1}
            >
                <h3 className="tagline text-xs">{town.county} county</h3>
                <strong>{town.name}</strong>, {town.state}
            </Popup>
        );

    return (
        <div className="my-3" ref={mapWrapRef}>
            <Map viewport={viewport} onUpdateViewport={updateViewport}>
                {renderPopup()}
                <MapMarker
                    key={town.name}
                    latitude={town._geoloc.lat}
                    longitude={town._geoloc.lng}
                    name={town.name}
                    featured={false}
                    onClick={() => setShowPopup(true)}
                />
            </Map>
        </div>
    );
};

// MapSingle.propTypes = {
//     prop: PropTypes.
// };

export default MapSingle;
