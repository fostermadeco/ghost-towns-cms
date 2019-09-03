import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import PropTypes from 'prop-types';

// App
import StatamicSearchBar from './StatamicSearchBar';
import StatamicSearchMap from './StatamicSearchMap';
import StatamicSearchResult from './StatamicSearchResult';
import StatamicSearchStateDropdown from './StatamicSearchStateDropdown';
import { getViewportWithNewCenter } from './helpers/map';
import useElementSize from './hooks/useElementSize';
import useMapboxPopup from './hooks/useMapboxPopup';
import {
    dispatchFetchSearchResults,
    dispatchFetchStates,
    getSearchResultsState,
    getStatesListState,
    reducers,
} from './reducers/StatamicSearchExplorePageReducer';

import viewportReducer from './reducers/viewportReducer';

const StatamicSearchExplorePageComponent = ({ searchResults, statesList, fetchSearchResults, fetchStates }) => {
    //----------------------------
    // State
    //----------------------------

    const [searchTerm, setSearchTerm] = useState('');
    const [highlightedSearchResult, setHighlightedSearchResult] = useState(null);
    const [mapWrapRef, mapWidth, mapHeight] = useElementSize();
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

    const scrollToSelectedSearchResult = (searchResult) => {
        scroller.scrollTo(searchResult.id, {
            duration: 500,
            smooth: true,
            offset: -10,
        });
    }

    //----------------------------
    // Effects
    //----------------------------

    useEffect(() => {
        fetchSearchResults('');
        fetchStates();
    }, [fetchSearchResults, fetchStates]);

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

                    <div id="search-filters-container" className="mt-3">
                        <small>
                            <span className="inline-block">State: </span>
                            <StatamicSearchStateDropdown
                                className="inline-block ml-2"
                                statesList={statesList}
                                onChange={state => filterByState(state)}
                            />
                        </small>
                    </div>
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

            <div className="w-full md:w-1/2">
                <div className="fixed mx-2 md:ml-5 pt-3" style={{ height: '100%' }} ref={mapWrapRef}>
                    <StatamicSearchMap
                        searchResults={searchResults}
                        viewport={viewport}
                        dispatchViewportAction={dispatchViewportAction}
                        renderPopup={renderPopup}
                        onMarkerClick={searchResult => {
                            setHighlightedSearchResult(searchResult);
                            setPopupSearchResult(searchResult);
                            scrollToSelectedSearchResult(searchResult);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

StatamicSearchExplorePageComponent.propTypes = {
    // Redux
    searchResults: PropTypes.array.isRequired,
    statesList: PropTypes.array.isRequired,
    fetchSearchResults: PropTypes.func.isRequired,
    fetchStates: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    searchResults: getSearchResultsState(state),
    statesList: getStatesListState(state),
});

const mapDispatchToProps = dispatch => ({
    fetchSearchResults: (...args) => dispatchFetchSearchResults(...args)(dispatch),
    fetchStates: (...args) => dispatchFetchStates(...args)(dispatch),
});

const StatamicSearchExplorePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatamicSearchExplorePageComponent);

StatamicSearchExplorePage.reducers = {
    StatamicSearchExplorePage: reducers,
};

export default StatamicSearchExplorePage;
