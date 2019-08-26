import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// App
import MapSearchResultStatamic from './MapSearchResultStatamic';
import { dispatchFetchSearchResults, getSearchResultsState, reducers } from './reducers/MapSearchStatamicReducer';

const MapSearchStatamicComponent = ({
    searchResults,
    fetchSearchResults,
}) => {
    //----------------------------
    // Helpers
    //----------------------------

    const search = async () => {

    };

    //----------------------------
    // Effects
    //----------------------------

    useEffect(() => {
        fetchSearchResults();
    }, []);

    //----------------------------
    // Render
    //----------------------------

    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <div className="mx-2 mt-3">
                    <form noValidate className="ais-SearchBox-form" action="" role="search">
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
});

const mapDispatchToProps = dispatch => ({
    fetchSearchResults: (...args) => dispatchFetchSearchResults(...args)(dispatch),
});

const MapSearchStatamic = connect(mapStateToProps, mapDispatchToProps)(MapSearchStatamicComponent);
MapSearchStatamic.reducers = {
    MapSearchStatamic: reducers,
};

export default MapSearchStatamic;

            // import useLocalStorage from 'react-use/lib/useLocalStorage';
// import {InstantSearch, SearchBox, Configure } from 'react-instantsearch-dom';
// import {Popup} from 'react-map-gl';
            // import get from 'lodash.get';
            // import qs from 'qs';
            // import useTimeout from '@rooks/use-timeout';

            // import GeoSearchMapbox from './GeoSearchMapbox';
            // import MapMarker from './MapMarker';
            // import CustomStateResults from './CustomStateResults';
            // import TownHits from './TownHits';
            // import LocationFilters from './LocationFilters';
            // import ToggleRefinement from './ToggleRefinement';
            // import RefinementClearButton from './RefinementClearButton';
            // import RefinementSelect from './RefinementSelect';
            // import useElementSize from './hooks/useElementSize';
            // import useURLSearchState from './hooks/useURLSearchState';
            // import useIsMobile from './hooks/useIsMobile';

            // const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);
            // const defaultAroundRadius = '64373';

// const MapSearchStatamic = () => {
//     //----------------------------
//     // Filters
//     //----------------------------

//     const initialSearchState = getSearchStateFromURL();
//     const initialAroundRadius = get(initialSearchState, 'configure.aroundRadius', defaultAroundRadius);
//     const initialAroundLatLng = get(initialSearchState, 'configure.aroundLatLng', null);
//     const initialAroundLatLngViaIP = get(initialSearchState, 'configure.aroundLatLngViaIP', false);

//     const [searchState, searchLocation, setURLSearchState, setURLSearchLocation] = useURLSearchState(
//         initialSearchState
//     );
//     const [aroundRadius, setAroundRadius] = useState(initialAroundRadius);
//     const [aroundLatLng, setAroundLatLng] = useState(initialAroundLatLng);
//     const [aroundLatLngViaIP, setAroundLatLngViaIP] = useState(initialAroundLatLngViaIP);

//     // Set initial location filter tab
//     let initialTab = 1;
//     if (initialAroundLatLngViaIP) {
//         initialTab = 2;
//     } else if (!initialAroundLatLngViaIP && initialAroundLatLng) {
//         initialTab = 3;
//     }

//     const [selectedLocationFilterTab, setSelectedLocationFilterTab] = useState(initialTab);

//     const onSearchStateChange = searchState => {
//         setURLSearchState(searchState);
//     };

//     const onSearchLocationChange = locationName => {
//         setURLSearchLocation(locationName);
//     };

//     const clearFilters = () => {
//         setAroundRadius(defaultAroundRadius);
//         setAroundLatLng(null);
//         setAroundLatLngViaIP(false);
//         setSelectedLocationFilterTab(1);
//         setURLSearchState({});
//         setURLSearchLocation('');
//     };

//     const areFiltersApplied = () => {
//         const tempSearchState = { ...searchState };
//         delete tempSearchState.page;
//         delete tempSearchState.data;

//         return Object.keys(tempSearchState).length > 0;
//     };

//     //----------------------------
//     // UI
//     //----------------------------

//     const [popupHit, setPopupHit] = useState(null);
//     const [mobileViewMode, setMobileViewMode] = useLocalStorage('mobileViewMode', 'list');
//     const [mapWrapRef, mapWidth, mapHeight] = useElementSize();

//     const { start: startPopupHideTimeout, clear: clearPopupHideTimeout } = useTimeout(() => {
//         setPopupHit(null);
//     }, 300);

//     //----------------------------
//     // Render
//     //----------------------------

//     const renderPopup = () =>
//         popupHit && (
//             <div onMouseEnter={clearPopupHideTimeout} onMouseLeave={startPopupHideTimeout}>
//                 <Popup
//                     latitude={popupHit._geoloc.lat}
//                     longitude={popupHit._geoloc.lng}
//                     closeButton={false}
//                     anchor="bottom"
//                     tipSize={5}
//                     closeOnClick={false}
//                     offsetTop={-20}
//                 >
//                     <a href={`/towns/${popupHit.slug}`}>
//                         <span className="mt-2">{popupHit.name}</span>
//                     </a>
//                 </Popup>
//             </div>
//         );

//     const config = {
//         aroundLatLngViaIP,
//         aroundRadius,
//         ...(aroundLatLng !== null ? { aroundLatLng } : {}),
//         hitsPerPage: 10,
//     };

//     const isMobile = useIsMobile();
//     console.log(mapHeight);
//     return (
//         <InstantSearch
//             searchClient={searchClient}
//             searchState={searchState}
//             indexName={process.env.REACT_APP_ALGOLIA_INDEX}
//             onSearchStateChange={onSearchStateChange}
//         >
//             <Configure {...config} />
//             <div className="flex flex-wrap">
//                 <div className="w-full md:w-1/2">
//                     <div className="mx-2 mt-3">
//                         <SearchBox />
//                         <LocationFilters
//                             aroundRadius={aroundRadius}
//                             aroundLocationName={searchLocation}
//                             selectedTab={selectedLocationFilterTab}
//                             onChangeViaIP={setAroundLatLngViaIP}
//                             onChangeRadius={setAroundRadius}
//                             onChangeAroundLatLng={setAroundLatLng}
//                             onChangeLocationName={onSearchLocationChange}
//                             onTabChange={setSelectedLocationFilterTab}
//                         />
//                         <hr className="my-3" />
//                         <div className="mt-2 mb-4">
//                             <div className="inline-block mr-5">
//                                 <ToggleRefinement attribute="featured" label="Featured" value />
//                             </div>

//                             <div className="inline-block ml-5">
//                                 <RefinementSelect attribute="road_condition" label="Road" />
//                             </div>
//                         </div>

//                         {areFiltersApplied() && (
//                             <div className="mb-4">
//                                 <RefinementClearButton onClick={() => clearFilters()} />
//                             </div>
//                         )}

//                         <div className="md:hidden text-right mr-1">
//                             {mobileViewMode === 'map' && (
//                                 <button
//                                     type="button"
//                                     className="underline text-xs"
//                                     onClick={() => setMobileViewMode('list')}
//                                 >
//                                     List
//                                 </button>
//                             )}
//                             {mobileViewMode === 'list' && (
//                                 <button
//                                     type="button"
//                                     className="underline text-xs"
//                                     onClick={() => setMobileViewMode('map')}
//                                 >
//                                     Map
//                                 </button>
//                             )}
//                         </div>
//                         <hr />

//                         {(!isMobile || mobileViewMode === 'list') && (
//                             <div>
//                                 <CustomStateResults />
//                                 <TownHits
//                                     onMouseEnter={hit => setPopupHit(hit)}
//                                     onMouseLeave={() => setPopupHit(null)}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 {(!isMobile || mobileViewMode === 'map') && (
//                     <div className="w-full md:w-1/2">
//                         <div className="mx-2 md:ml-5" style={{ height: '100%' }} ref={mapWrapRef}>
//                             <GeoSearchMapbox width={mapWidth} height={mapHeight}>
//                                 {({ hits }) => (
//                                     <div>
//                                         {renderPopup()}
//                                         {hits.map(hit => (
//                                             <div
//                                                 key={hit.name}
//                                                 onMouseEnter={() => {
//                                                     clearPopupHideTimeout();
//                                                     setPopupHit(hit);
//                                                 }}
//                                                 onMouseLeave={() => {
//                                                     startPopupHideTimeout();
//                                                 }}
//                                             >
//                                                 <MapMarker
//                                                     latitude={hit._geoloc.lat}
//                                                     longitude={hit._geoloc.lng}
//                                                     name={hit.name}
//                                                     isFeatured={!!hit.featured}
//                                                     isSelected={popupHit && popupHit.name === hit.name}
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </GeoSearchMapbox>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </InstantSearch>
//     );
// };

// function getSearchStateFromURL() {
//     const state = qs.parse(window.location.search.slice(1));

//     if (state.configure) {
//         const { aroundLatLngViaIP } = state.configure;

//         if (aroundLatLngViaIP) {
//             state.configure.aroundLatLngViaIP = aroundLatLngViaIP === 'true';
//         }
//     }

//     for (const key in state.toggle) {
//         state.toggle[key] = state.toggle[key] === 'true';
//     }

//     return state;
// }