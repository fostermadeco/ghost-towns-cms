import React from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import PropTypes from 'prop-types';
import useDeepCompareEffect from 'use-deep-compare-effect';

// App
import mapStyle from './style.json';
import HitIcon from './HitIcon';
import { getBoundingBoxFromSearchResults } from './helpers/map';

const token = process.env.REACT_APP_MAPBOX_TOKEN;

const StatamicSearchMap = ({
    searchResults,
    viewport,
    dispatchViewportAction,
    renderPopup,
    setPopupSearchResult,
    startPopupHideTimeout,
    clearPopupHideTimeout,
}) => {
    //----------------------------
    // State
    //----------------------------

    //----------------------------
    // Helpers
    //----------------------------

    const onUpdateViewport = updatedViewport => dispatchViewportAction({ type: 'UPDATE', params: updatedViewport });

    //----------------------------
    // Effects
    //----------------------------

    useDeepCompareEffect(() => {
        if (searchResults.length === 0) {
            return;
        }

        const { longitude, latitude, zoom } = getBoundingBoxFromSearchResults(viewport, searchResults);

        dispatchViewportAction({
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
    viewport: PropTypes.object.isRequired,
    dispatchViewportAction: PropTypes.func.isRequired,
    renderPopup: PropTypes.func.isRequired,
    setPopupSearchResult: PropTypes.func.isRequired,
    startPopupHideTimeout: PropTypes.func.isRequired,
    clearPopupHideTimeout: PropTypes.func.isRequired,
};

export default StatamicSearchMap;
