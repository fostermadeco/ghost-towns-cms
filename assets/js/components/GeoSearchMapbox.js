import React, { useReducer, useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { PropTypes } from 'prop-types';
import Map from './Map';

import { getBoundingBoxFromHits } from './helpers/map';
import { hitType } from './types';
import viewportReducer from './reducers/viewportReducer';

const GeoSearchMapBox = ({
    hits,
    children,
    width = 600,
    height = 600,
    initialLatitude = 0,
    initialLongitude = 0,
    initialZoom = 1,
}) => {
    const [viewport, dispatch] = useReducer(viewportReducer, {
        width,
        height,
        latitude: initialLatitude,
        longitude: initialLongitude,
        zoom: initialZoom,
    });

    useEffect(() => {
        dispatch({
            type: 'UPDATE',
            params: {
                width,
            },
        });
    }, [width]);

    useDeepCompareEffect(() => {
        if (hits.length === 0) return;

        const { longitude, latitude, zoom } = getBoundingBoxFromHits(viewport, hits);
        dispatch({
            type: 'UPDATE',
            params: {
                longitude,
                latitude,
                zoom,
            },
        });
    }, [hits]);

    if (hits.length === 0) return null;
    return (
        <Map
            viewport={viewport}
            onUpdateViewport={updatedViewport => dispatch({ type: 'UPDATE', params: updatedViewport })}
        >
            {children({ hits })}
        </Map>
    );
};

GeoSearchMapBox.propTypes = {
    // hits: PropTypes.arrayOf(hitType),
    children: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    initialLatitude: PropTypes.number,
    initialLongitude: PropTypes.number,
    initialZoom: PropTypes.number,
};

export default GeoSearchMapBox;
