import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// App
import MapSearchResultStatamic from './MapSearchResultStatamic';
import StateDropdown from './StateDropdown';
import { dispatchFetchSearchResults, getSearchResultsState, reducers, dispatchFetchStates, getStatesListState } from './reducers/MapSearchStatamicReducer';


const MapSearchStatamicComponent = ({
    searchResults,
    statesList,
    fetchSearchResults,
    fetchStates,
}) => {
    //----------------------------
    // State
    //----------------------------

    const [searchTerm, setSearchTerm] = useState('');

    //----------------------------
    // Helpers
    //----------------------------

    const search = async (e) => {
        e.preventDefault();
        fetchSearchResults(searchTerm);
    };

    const filterByState = state => {
        fetchSearchResults(searchTerm, state ? `states/${state}` : '');
    };

    //----------------------------
    // Effects
    //----------------------------

    useEffect(() => {
        fetchSearchResults('');
        fetchStates();
    }, []);

    //----------------------------
    // Render
    //----------------------------

    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <div className="mx-2 mt-3">
                    <form noValidate className="ais-SearchBox-form" action="" role="search" onSubmit={search}>
                        <input
                            className="ais-SearchBox-input"
                            type="search"
                            placeholder="Search here…"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            required
                            maxLength="512"
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        <button type="submit" title="Submit your search query." className="ais-SearchBox-submit">
                            <svg className="ais-SearchBox-submitIcon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">
                                <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>
                            </svg>
                        </button>
                        <button type="reset" title="Clear the search query." className="ais-SearchBox-reset" hidden="">
                            <svg className="ais-SearchBox-resetIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">
                                <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>
                            </svg>
                        </button>
                    </form>

                    <div id="search-filters-container" className="mt-3">
                        <small>
                            <span className="inline-block">State: </span>
                            <StateDropdown className="inline-block ml-2" statesList={statesList} onChange={state => filterByState(state)} />
                        </small>
                    </div>
                    <hr className="my-3" />

                    <div className="search-results-container">
                        <h3 className="text-red text-2xl font-semibold mt-3">
                            {searchResults.length} Ghost Town{searchResults.length > 1 && 's'}
                        </h3>

                        <div>
                            {searchResults.map(searchResult => (
                                <MapSearchResultStatamic key={searchResult.id} searchResult={searchResult} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <div className="mx-2 md:ml-5" style={{ height: '100%' }}>
                    Map
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    searchResults: getSearchResultsState(state),
    statesList: getStatesListState(state),
});

const mapDispatchToProps = dispatch => ({
    fetchSearchResults: (...args) => dispatchFetchSearchResults(...args)(dispatch),
    fetchStates: (...args) => dispatchFetchStates(...args)(dispatch),
});

const MapSearchStatamic = connect(mapStateToProps, mapDispatchToProps)(MapSearchStatamicComponent);
MapSearchStatamic.reducers = {
    MapSearchStatamic: reducers,
};

export default MapSearchStatamic;
