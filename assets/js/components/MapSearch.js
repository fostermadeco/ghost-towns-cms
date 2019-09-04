import React, { useState } from 'react';
import useLocalStorage from 'react-use/lib/useLocalStorage';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Configure } from 'react-instantsearch-dom';
import { Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';
import get from 'lodash.get';
import qs from 'qs';
import useTimeout from '@rooks/use-timeout';

import GeoSearchMapboxAlgolia from './GeoSearchMapboxAlgolia';
import MapMarker from './MapMarker';
import CustomStateResults from './CustomStateResults';
import TownHits from './TownHits';
import LocationFilters from './LocationFilters';
import ToggleRefinement from './ToggleRefinement';
import RefinementClearButton from './RefinementClearButton';
import RefinementSelect from './RefinementSelect';
import useElementSize from './hooks/useElementSize';
import useURLSearchState from './hooks/useURLSearchState';
import useIsMobile from './hooks/useIsMobile';

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);
const defaultAroundRadius = '64373';

const MapSearch = () => {
    //----------------------------
    // Filters
    //----------------------------

    const initialSearchState = getSearchStateFromURL();
    const initialAroundRadius = get(initialSearchState, 'configure.aroundRadius', defaultAroundRadius);
    const initialAroundLatLng = get(initialSearchState, 'configure.aroundLatLng', null);
    const initialAroundLatLngViaIP = get(initialSearchState, 'configure.aroundLatLngViaIP', false);

    const [searchState, searchLocation, setURLSearchState, setURLSearchLocation] = useURLSearchState(
        initialSearchState
    );
    const [aroundRadius, setAroundRadius] = useState(initialAroundRadius);
    const [aroundLatLng, setAroundLatLng] = useState(initialAroundLatLng);
    const [aroundLatLngViaIP, setAroundLatLngViaIP] = useState(initialAroundLatLngViaIP);

    // Set initial location filter tab
    let initialTab = 1;
    if (initialAroundLatLngViaIP) {
        initialTab = 2;
    } else if (!initialAroundLatLngViaIP && initialAroundLatLng) {
        initialTab = 3;
    }

    const [selectedLocationFilterTab, setSelectedLocationFilterTab] = useState(initialTab);

    const onSearchStateChange = searchState => {
        setURLSearchState(searchState);
    };

    const onSearchLocationChange = locationName => {
        setURLSearchLocation(locationName);
    };

    const clearFilters = () => {
        setAroundRadius(defaultAroundRadius);
        setAroundLatLng(null);
        setAroundLatLngViaIP(false);
        setSelectedLocationFilterTab(1);
        setURLSearchState({});
        setURLSearchLocation('');
    };

    const areFiltersApplied = () => {
        const tempSearchState = { ...searchState };
        delete tempSearchState.page;
        delete tempSearchState.data;

        return Object.keys(tempSearchState).length > 0;
    };

    //----------------------------
    // UI
    //----------------------------

    const [popupHit, setPopupHit] = useState(null);
    const [mobileViewMode, setMobileViewMode] = useLocalStorage('mobileViewMode', 'list');
    const [mapWrapRef, mapWidth, mapHeight] = useElementSize();

    const { start: startPopupHideTimeout, clear: clearPopupHideTimeout } = useTimeout(() => {
        setPopupHit(null);
    }, 300);

    //----------------------------
    // Render
    //----------------------------

    const renderPopup = () =>
        popupHit && (
            <div onMouseEnter={clearPopupHideTimeout} onMouseLeave={startPopupHideTimeout}>
                <Popup
                    latitude={popupHit._geoloc.lat}
                    longitude={popupHit._geoloc.lng}
                    closeButton={false}
                    anchor="bottom"
                    tipSize={5}
                    closeOnClick={false}
                    offsetTop={-20}
                >
                    <a href={`/towns/${popupHit.slug}`}>
                        <span className="mt-2">{popupHit.name}</span>
                    </a>
                </Popup>
            </div>
        );

    const config = {
        aroundLatLngViaIP,
        aroundRadius,
        ...(aroundLatLng !== null ? { aroundLatLng } : {}),
        hitsPerPage: 10,
    };

    const isMobile = useIsMobile();
    console.log(mapHeight);
    return (
        <InstantSearch
            searchClient={searchClient}
            searchState={searchState}
            indexName={process.env.REACT_APP_ALGOLIA_INDEX}
            onSearchStateChange={onSearchStateChange}
        >
            <Configure {...config} />
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <div className="mx-2 mt-3">
                        <SearchBox />
                        <LocationFilters
                            aroundRadius={aroundRadius}
                            aroundLocationName={searchLocation}
                            selectedTab={selectedLocationFilterTab}
                            onChangeViaIP={setAroundLatLngViaIP}
                            onChangeRadius={setAroundRadius}
                            onChangeAroundLatLng={setAroundLatLng}
                            onChangeLocationName={onSearchLocationChange}
                            onTabChange={setSelectedLocationFilterTab}
                        />
                        <hr className="my-3" />
                        <div className="mt-2 mb-4">
                            <div className="inline-block mr-5">
                                <ToggleRefinement attribute="featured" label="Featured" value />
                            </div>

                            <div className="inline-block ml-5">
                                <RefinementSelect attribute="road_condition" label="Road" />
                            </div>
                        </div>

                        {areFiltersApplied() && (
                            <div className="mb-4">
                                <RefinementClearButton onClick={() => clearFilters()} />
                            </div>
                        )}

                        <div className="md:hidden text-right mr-1">
                            {mobileViewMode === 'map' && (
                                <button
                                    type="button"
                                    className="underline text-xs"
                                    onClick={() => setMobileViewMode('list')}
                                >
                                    List
                                </button>
                            )}
                            {mobileViewMode === 'list' && (
                                <button
                                    type="button"
                                    className="underline text-xs"
                                    onClick={() => setMobileViewMode('map')}
                                >
                                    Map
                                </button>
                            )}
                        </div>
                        <hr />

                        {(!isMobile || mobileViewMode === 'list') && (
                            <div>
                                <CustomStateResults />
                                <TownHits
                                    onMouseEnter={hit => setPopupHit(hit)}
                                    onMouseLeave={() => setPopupHit(null)}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {(!isMobile || mobileViewMode === 'map') && (
                    <div className="w-full md:w-1/2">
                        <div className="mx-2 md:ml-5" style={{ height: '100%' }} ref={mapWrapRef}>
                            <GeoSearchMapboxAlgolia width={mapWidth} height={mapHeight}>
                                {({ hits }) => (
                                    <div>
                                        {renderPopup()}
                                        {hits.map(hit => (
                                            <div
                                                key={hit.name}
                                                onMouseEnter={() => {
                                                    clearPopupHideTimeout();
                                                    setPopupHit(hit);
                                                }}
                                                onMouseLeave={() => {
                                                    startPopupHideTimeout();
                                                }}
                                            >
                                                <MapMarker
                                                    latitude={hit._geoloc.lat}
                                                    longitude={hit._geoloc.lng}
                                                    name={hit.name}
                                                    isFeatured={!!hit.featured}
                                                    isSelected={popupHit && popupHit.name === hit.name}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </GeoSearchMapboxAlgolia>
                        </div>
                    </div>
                )}
            </div>
        </InstantSearch>
    );
};

function getSearchStateFromURL() {
    const state = qs.parse(window.location.search.slice(1));

    if (state.configure) {
        const { aroundLatLngViaIP } = state.configure;

        if (aroundLatLngViaIP) {
            state.configure.aroundLatLngViaIP = aroundLatLngViaIP === 'true';
        }
    }

    for (const key in state.toggle) {
        state.toggle[key] = state.toggle[key] === 'true';
    }

    return state;
}

export default MapSearch;
