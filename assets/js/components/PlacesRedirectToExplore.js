import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import PlacesInput from './PlacesInput';

const PlacesRedirectToExplore = () => {
    const handlePlaceSelection = ({ suggestion }) => {
        if (suggestion.value) {
            const url = `/explore?configure[aroundRadius]=64373&configure[aroundLatLng]=${suggestion.latlng.lat},${suggestion.latlng.lng}&data[location]=${suggestion.value}`;
            window.location.href = url;
        }
    };

    return <PlacesInput onSelection={handlePlaceSelection} />;
};

export default PlacesRedirectToExplore;
