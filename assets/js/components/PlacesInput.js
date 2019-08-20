import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import { PropTypes } from 'prop-types';

const PlacesInput = ({ onSelection }) => (
    <AlgoliaPlaces
        placeholder="Where would you like to explore?"
        options={{
            appId: process.env.REACT_APP_ALGOLIA_PLACES_APP_ID,
            apiKey: process.env.REACT_APP_ALGOLIA_PLACES_API_KEY,
            countries: ['us'],
            type: 'city',
            aroundLatLngViaIP: false,
        }}
        onChange={onSelection}
    />
);

PlacesInput.propTypes = {
    onSelection: PropTypes.func,
};

export default PlacesInput;
