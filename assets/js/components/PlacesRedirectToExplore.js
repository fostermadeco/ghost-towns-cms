import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import PlacesInput from './PlacesInput';

const PlacesRedirectToExplore = () => {
    const handlePlaceSelection = ({ suggestion }) => {
        if (suggestion.value) {
            window.location.href = `/explore?query=${suggestion.value}`;
        }
    };

    return <PlacesInput onSelection={handlePlaceSelection} />;
};

export default PlacesRedirectToExplore;
