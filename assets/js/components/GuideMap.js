import React, { useReducer, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Map from './Map';
import { getBoundingBoxFromHit } from './helpers/map';
import { hitType } from './types';

function reducer(state, action) {
    switch (action.type) {
        case 'UPDATE':
            return {
                viewport: {
                    ...state.viewport,
                    ...action.params,
                },
            };
        default:
            return state;
    }
}

const GuideMap = ({
    hits,
    children,
    width = 600,
    height = 600,
    initialLatitude = 0,
    initialLongitude = 0,
    initialZoom = 1,
    currentTown,
}) => {
    const [state, dispatch] = useReducer(reducer, {
        viewport: {
            width,
            height,
            latitude: initialLatitude,
            longitude: initialLongitude,
            zoom: initialZoom,
        },
    });

    useEffect(() => {
        dispatch({
            type: 'UPDATE',
            params: {
                width,
            },
        });
    }, [width]);

    useEffect(() => {
        if (hits.length === 0 || !currentTown) return;

        const { longitude, latitude, zoom } = getBoundingBoxFromHit(currentTown);
        dispatch({
            type: 'UPDATE',
            params: {
                longitude,
                latitude,
                zoom,
            },
        });
    }, [currentTown, hits.length]);

    if (hits.length === 0) return null;
    return (
        <Map
            viewport={state.viewport}
            onUpdateViewport={updatedViewport => dispatch({ type: 'UPDATE', params: updatedViewport })}
        >
            {children({ hits })}
        </Map>
    );
};

GuideMap.propTypes = {
    // hits: PropTypes.arrayOf(hitType),
    children: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    initialLatitude: PropTypes.number,
    initialLongitude: PropTypes.number,
    initialZoom: PropTypes.number,
    currentTown: hitType,
};

export default GuideMap;
