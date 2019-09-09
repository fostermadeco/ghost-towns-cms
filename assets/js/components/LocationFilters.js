import React, { useRef, useEffect } from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import PropTypes from 'prop-types';
import RadiusSelect from './RadiusSelect';

const classNames = require('classnames');

const LocationFilters = ({
    aroundRadius,
    aroundLocationName,
    onChangeViaIP,
    onChangeRadius,
    onChangeAroundLatLng,
    onChangeLocationName,
    aroundLatLngViaIP,
}) => {
    const placesRef = useRef(null);
    const currentLocationText = 'Current Location';

    useEffect(() => {
        if (!placesRef || !placesRef.current) return;

        const placesInput = placesRef.current.autocompleteElem;

        if (aroundLatLngViaIP) {
            // since AlgoliaPlaces is a 3rd-party, not sure there is a better way?
            placesInput.value = currentLocationText;
        }

        if (!aroundLatLngViaIP && aroundLocationName === '') {
            placesInput.value = '';
        }
    }, [aroundLatLngViaIP, placesRef, aroundLocationName, currentLocationText]);

    const handlePlacesFocus = event => {
        if (aroundLatLngViaIP) {
            event.target.value = '';
            onChangeViaIP(false);
        }
    };

    const handlePlaceSelection = ({ suggestion }) => {
        onChangeAroundLatLng(`${suggestion.latlng.lat},${suggestion.latlng.lng}`);
        console.log(suggestion);
        onChangeLocationName(suggestion.value);
    };

    const searchByMyLocation = () => {
        onChangeAroundLatLng('');
        onChangeLocationName('');
        onChangeViaIP(true);
    };

    console.log('aroundLocationName', aroundLocationName, 'aroundLatLngViaIP', aroundLatLngViaIP);

    return (
        <div className="clearfix my-2">
            <div className="w-1/3 float-left flex justify-around items-center" style={{ minHeight: '40px' }}>
                <RadiusSelect onChange={onChangeRadius} currentValue={aroundRadius} />
                <div className="mx-3 text-sm">from</div>
            </div>
            <div className="w-2/3 float-left relative">
                <AlgoliaPlaces
                    ref={placesRef}
                    placeholder="Search by city"
                    defaultValue={aroundLocationName}
                    options={{
                        appId: process.env.REACT_APP_ALGOLIA_PLACES_APP_ID,
                        apiKey: process.env.REACT_APP_ALGOLIA_PLACES_API_KEY,
                        countries: ['us'],
                        type: 'city',
                        aroundLatLngViaIP: false,
                    }}
                    onFocus={handlePlacesFocus}
                    onChange={handlePlaceSelection}
                />
                <button
                    type="button"
                    className="absolute"
                    style={{ top: '10px', right: '15px' }}
                    onClick={searchByMyLocation}
                >
                    <img
                        alt="Use current location"
                        src="/site/themes/ghosttowns/img/target.svg"
                        width="20"
                        height="20"
                    />
                </button>
            </div>
        </div>
    );
};

LocationFilters.propTypes = {
    aroundRadius: PropTypes.string,
    // e.g. Philipsburg, Montana, United States of America
    aroundLocationName: PropTypes.string,
    onChangeViaIP: PropTypes.func,
    onChangeRadius: PropTypes.func,
    onChangeAroundLatLng: PropTypes.func,
    onChangeLocationName: PropTypes.func,
    aroundLatLngViaIP: PropTypes.bool,
};

export default LocationFilters;
