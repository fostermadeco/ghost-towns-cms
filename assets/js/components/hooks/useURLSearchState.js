/**
 * Custom hook that syncs Algolia InstantSearch's state with URL
 */
import { useEffect, useState } from 'react';
import get from 'lodash.get';
import qs from 'qs';
import { useDebounce } from 'use-debounce';

const updateURLWithSearchState = searchState => {
    const queryString = qs.stringify(searchState);
    const newUrl = `${window.location.pathname}${queryString.length > 0 ? '?' : ''}${qs.stringify(searchState)}`;
    window.history.pushState(searchState, null, newUrl);
};

const pruneSearchState = searchState => {
    const { configure, menu, toggle, data } = searchState;

    if (configure) {
        const aroundLatLngIsBlank = get(configure, 'aroundLatLng', '').length === 0;
        const aroundLatLngViaIPIsFalse = get(configure, 'aroundLatLngViaIP', false) === false;

        if (aroundLatLngIsBlank) {
            delete searchState.configure.aroundLatLng;
        }

        if (aroundLatLngViaIPIsFalse) {
            delete searchState.configure.aroundLatLngViaIP;
        }

        if (aroundLatLngIsBlank && aroundLatLngViaIPIsFalse) {
            delete searchState.configure.aroundRadius;
        }

        delete searchState.configure.hitsPerPage;
        if (Object.keys(searchState.configure).length === 0) {
            delete searchState.configure;
        }
    }

    if (menu) {
        const roadConditionIsBlank = get(menu, 'road_condition', '').length === 0;

        if (roadConditionIsBlank) {
            delete searchState.menu.road_condition;
        }

        if (Object.keys(searchState.menu).length === 0) {
            delete searchState.menu;
        }
    }

    if (toggle) {
        const featuredIsFalse = get(toggle, 'featured', false) === false;

        if (featuredIsFalse) {
            delete searchState.toggle.featured;
        }

        if (Object.keys(searchState.toggle).length === 0) {
            delete searchState.toggle;
        }
    }

    if (data) {
        if (get(data, 'location', '').length === 0) {
            delete searchState.data.location;
        }

        if (Object.keys(searchState.data).length === 0) {
            delete searchState.data;
        }
    }

    return searchState;
};

const useURLSearchState = (initialSearchState = {}) => {
    const prunedInitialSearchState = pruneSearchState(initialSearchState);
    const [searchState, setSearchState] = useState(prunedInitialSearchState);
    const [searchLocation, setSearchLocation] = useState(get(prunedInitialSearchState, 'data.location', ''));
    const [debouncedSearchState] = useDebounce(searchState, 750);
    const [debouncedSearchLocation] = useDebounce(searchLocation, 750);

    useEffect(() => {
        const urlState = { ...debouncedSearchState };

        if (debouncedSearchLocation.length > 0) {
            urlState.data = {
                ...urlState.data,
                location: debouncedSearchLocation,
            };
        }

        updateURLWithSearchState(urlState);
    }, [debouncedSearchState, debouncedSearchLocation]);

    const handleSearchStateChange = newSearchState => {
        const prunedSearchState = pruneSearchState(newSearchState);
        setSearchState(prunedSearchState);
    };

    const handleSearchLocationChange = newLocation => {
        setSearchLocation(newLocation);
    };

    return [searchState, searchLocation, handleSearchStateChange, handleSearchLocationChange];
};

export default useURLSearchState;
