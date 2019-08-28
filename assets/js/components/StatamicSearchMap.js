import React, { useEffect, useReducer } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import useTimeout from '@rooks/use-timeout';
import PropTypes from 'prop-types';
import useDeepCompareEffect from 'use-deep-compare-effect';
import WebMercatorViewport from 'viewport-mercator-project';

// App
import mapStyle from './style.json';
import HitIcon from './HitIcon';
import useMapboxPopup from './hooks/useMapboxPopup';
import viewportReducer from './reducers/viewportReducer';

const token = process.env.REACT_APP_MAPBOX_TOKEN;

const StatamicSearchMap = ({ searchResults, height, width }) => {
    //----------------------------
    // State
    //----------------------------

    const [viewport, dispatch] = useReducer(viewportReducer, {
        width,
        height,
        latitude: 0,
        longitude: 0,
        zoom: 1,
    });

    const { start: startPopupHideTimeout, clear: clearPopupHideTimeout } = useTimeout(() => {
        setPopupSearchResult(null);
    }, 300);

    const [renderPopup, setPopupSearchResult] = useMapboxPopup(startPopupHideTimeout, clearPopupHideTimeout);

    //----------------------------
    // Helpers
    //----------------------------

    const onUpdateViewport = updatedViewport => dispatch({ type: 'UPDATE', params: updatedViewport });
    const getBoundingBoxFromSearchResult = result => ({
        longitude: Number(result.longitude),
        latitude: Number(result.latitude),
        zoom: 9,
    });

    const getBoundingBoxFromSearchResults = results => {
        if (results.length === 1) {
            return getBoundingBoxFromSearchResult(results[0]);
        }

        const lats = results.map(result => result.latitude);
        const lngs = results.map(result => result.longitude);
        const maxLng = lngs.reduce((a, b) => Math.max(a, b));
        const minLng = lngs.reduce((a, b) => Math.min(a, b));
        const maxLat = lats.reduce((a, b) => Math.max(a, b));
        const minLat = lats.reduce((a, b) => Math.min(a, b));
        const bounds = [[minLng, minLat], [maxLng, maxLat]];

        try {
            return new WebMercatorViewport(viewport).fitBounds(bounds, {
                padding: 20,
                offset: [-100, -100],
            });
        } catch (error) {
            console.log(error);
        }
    };

    //----------------------------
    // Effects
    //----------------------------

    useEffect(() => {
        dispatch({
            type: 'UPDATE',
            params: {
                width,
            },
        });
    }, [width]);

    useDeepCompareEffect(() => {
        if (searchResults.length === 0) {
            return;
        }

        const { longitude, latitude, zoom } = getBoundingBoxFromSearchResults(searchResults);
        dispatch({
            type: 'UPDATE',
            params: {
                longitude,
                latitude,
                zoom,
            },
        });
    }, [searchResults]);

    //----------------------------
    // Render
    //----------------------------

    return (
        <ReactMapGL {...viewport} mapStyle={mapStyle} mapboxApiAccessToken={token} onViewportChange={onUpdateViewport}>
            <NavigationControl onViewportChange={onUpdateViewport} />
            <div>
                {renderPopup()}
                {searchResults.map(searchResult => (
                    <div
                        key={searchResult.id}
                        onMouseEnter={() => {
                            clearPopupHideTimeout();
                            setPopupSearchResult(searchResult);
                        }}
                        onMouseLeave={() => {
                            startPopupHideTimeout();
                        }}
                    >
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
    );
};

StatamicSearchMap.propTypes = {
    searchResults: PropTypes.array.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

export default StatamicSearchMap;
