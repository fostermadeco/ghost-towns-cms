import React, { useEffect, useReducer, useState } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import PropTypes from 'prop-types';

// App
import StatamicSearchBar from './StatamicSearchBar';
import StatamicSearchResult from './StatamicSearchResult';
import { getViewportWithNewCenter } from './helpers/map';
import useElementSize from './hooks/useElementSize';
import useMapboxPopup from './hooks/useMapboxPopup';
import {
    dispatchFetchSearchResults,
    getSearchResultsState,
    reducers,
} from './reducers/StatamicSearchAllCollectionsReducer';

import viewportReducer from './reducers/viewportReducer';

const mapInitialHeight = (() => {
    const headerHeight = document.getElementById('nav').offsetHeight;
    const paddingHeight = 0.75 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    return window.innerHeight - headerHeight - paddingHeight * 2;
})();

const StatamicSearchAllCollectionsComponent = ({ searchResults, fetchSearchResults }) => {
    //----------------------------
    // State
    //----------------------------

    const [searchTerm, setSearchTerm] = useState('');
    const [highlightedSearchResult, setHighlightedSearchResult] = useState(null);
    const [mapContainerRef, mapWidth, mapHeight] = useElementSize(500, mapInitialHeight);
    const [viewport, dispatchViewportAction] = useReducer(viewportReducer, {
        width: mapWidth,
        height: mapHeight,
        latitude: 0,
        longitude: 0,
        zoom: 1,
    });

    const [renderPopup, setPopupSearchResult] = useMapboxPopup();

    //----------------------------
    // Helpers
    //----------------------------

    const search = value => {
        setSearchTerm(value);
        fetchSearchResults(value);
    };

    const filterByState = state => {
        fetchSearchResults(searchTerm, state ? `states/${state}` : '');
    };

    const centerInOnMapMarker = searchResult => {
        const boundingBox = getViewportWithNewCenter(viewport, searchResult);
        dispatchViewportAction({
            type: 'UPDATE',
            params: boundingBox,
        });
    };

    const scrollToSelectedSearchResult = searchResult => {
        scroller.scrollTo(searchResult.id, {
            duration: 500,
            smooth: true,
            offset: -10,
        });
    };

    //----------------------------
    // Effects
    //----------------------------

    useEffect(() => {
        fetchSearchResults('');
    }, [fetchSearchResults]);

    useEffect(() => {
        dispatchViewportAction({
            type: 'UPDATE',
            params: {
                width: mapWidth,
            },
        });
    }, [mapWidth]);

    //----------------------------
    // Render
    //----------------------------

    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <div className="mx-2 mt-3">
                    <StatamicSearchBar onSearch={search} />
                    <hr className="my-3" />

                    <div className="search-results-container">
                        <h3 className="text-red text-2xl font-semibold mt-3">
                            {searchResults.length} Ghost Town{searchResults.length !== 1 && 's'}
                        </h3>

                        <div>
                            {searchResults.map(searchResult => (
                                <StatamicSearchResult
                                    key={searchResult.id}
                                    searchResult={searchResult}
                                    highlighted={
                                        highlightedSearchResult && searchResult.id === highlightedSearchResult.id
                                    }
                                    onMarkerClick={() => {
                                        setHighlightedSearchResult(searchResult);
                                        setPopupSearchResult(searchResult);
                                        centerInOnMapMarker(searchResult);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2" id="map-container" ref={mapContainerRef}>
                <div className="fixed mx-2 md:ml-5 pt-3" style={{ height: '100%' }} />
            </div>
        </div>
    );
};

StatamicSearchAllCollectionsComponent.propTypes = {
    // Redux
    searchResults: PropTypes.array.isRequired,
    fetchSearchResults: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    searchResults: getSearchResultsState(state),
});

const mapDispatchToProps = dispatch => ({
    fetchSearchResults: (...args) => dispatchFetchSearchResults(...args)(dispatch),
});

const StatamicSearchAllCollections = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatamicSearchAllCollectionsComponent);

StatamicSearchAllCollections.reducers = {
    StatamicSearchAllCollections: reducers,
};

export default StatamicSearchAllCollections;
