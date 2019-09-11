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

const getSearchStateFromURL = () => {
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
};

/*
 * Markers:
 *   - default: light blue
 *   - hovered: dark blue (no infobox)         selected
 *   - clicked: dark blue & infobox            selected
 *   - hovered in list: orange (no infobox)    softSelected
 */
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
    const [selectedHitId, setSelectedHitId] = useState(null);
    const [softSelectedHitId, setSoftSelectedHitId] = useState(null);
    const [mobileViewMode, setMobileViewMode] = useLocalStorage('mobileViewMode', 'list');
    const [mapWrapRef, mapWidth, mapHeight] = useElementSize();

    //----------------------------
    // Render
    //----------------------------

    const renderPopup = () =>
        popupHit && (
            <Popup
                latitude={popupHit._geoloc.lat}
                longitude={popupHit._geoloc.lng}
                closeButton={false}
                closeOnClick={false}
                offsetTop={-30}
                offsetLeft={-1}
            >
                <a href={`/towns/${popupHit.slug}`}>
                    <span className="mt-2">
                        <h3 className="tagline text-xs">{popupHit.county} county</h3>
                        <strong>{popupHit.name}</strong>, {popupHit.state}
                    </span>
                </a>
            </Popup>
        );

    const config = {
        aroundLatLngViaIP,
        aroundRadius,
        ...(aroundLatLng !== null ? { aroundLatLng } : {}),
        hitsPerPage: 10,
    };

    const isMobile = useIsMobile();

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
                        <SearchBox
                            translations={{
                                placeholder: 'Search ghost towns',
                            }}
                        />
                        <div>
                            <LocationFilters
                                aroundRadius={aroundRadius}
                                aroundLocationName={searchLocation}
                                onChangeViaIP={setAroundLatLngViaIP}
                                onChangeRadius={setAroundRadius}
                                onChangeAroundLatLng={setAroundLatLng}
                                onChangeLocationName={onSearchLocationChange}
                                aroundLatLngViaIP={aroundLatLngViaIP}
                            />
                        </div>
                        <div className="flex justify-between items-center my-2">
                            <div>
                                <RefinementSelect attribute="road_condition" defaultLabel="All Roads" />
                                <ToggleRefinement attribute="featured" label="Landmarks" value />
                            </div>
                            {areFiltersApplied() && <RefinementClearButton onClick={() => clearFilters()} />}
                        </div>

                        <div className="flex justify-between items-center my-4 mx-2">
                            <CustomStateResults />
                            {isMobile && mobileViewMode === 'map' && (
                                <button
                                    type="button"
                                    className="underline text-sm"
                                    onClick={() => setMobileViewMode('list')}
                                >
                                    View List
                                </button>
                            )}
                            {isMobile && mobileViewMode === 'list' && (
                                <button
                                    type="button"
                                    className="underline text-sm"
                                    onClick={() => setMobileViewMode('map')}
                                >
                                    View Map
                                </button>
                            )}
                        </div>

                        {(!isMobile || mobileViewMode === 'list') && (
                            <div>
                                <TownHits
                                    onMouseEnter={hit => {
                                        setSelectedHitId(null);
                                        setPopupHit(null);
                                        setSoftSelectedHitId(hit.objectID);
                                    }}
                                    onMouseLeave={() => setSoftSelectedHitId(null)}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {(!isMobile || mobileViewMode === 'map') && (
                    <div className="w-full md:w-1/2">
                        <div className="mx-2 md:ml-5" style={{ height: '100%', minHeight: '500px' }} ref={mapWrapRef}>
                            <GeoSearchMapboxAlgolia width={mapWidth} height={mapHeight}>
                                {({ hits }) => (
                                    <div>
                                        {renderPopup()}
                                        {hits.map(hit => (
                                            <div
                                                key={hit.name}
                                                onClick={() => {
                                                    setPopupHit(hit);
                                                }}
                                                onMouseEnter={() => {
                                                    setSelectedHitId(hit.objectID);
                                                }}
                                            >
                                                <MapMarker
                                                    latitude={hit._geoloc.lat}
                                                    longitude={hit._geoloc.lng}
                                                    name={hit.name}
                                                    isSelected={selectedHitId === hit.objectID}
                                                    isSoftSelected={softSelectedHitId === hit.objectID}
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

export default MapSearch;
