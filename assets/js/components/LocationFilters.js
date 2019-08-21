import React from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import PropTypes from 'prop-types';
import RadiusSelect from './RadiusSelect';

const classNames = require('classnames');

const LocationFilters = ({
    aroundRadius,
    aroundLocationName,
    selectedTab,
    onChangeViaIP,
    onChangeRadius,
    onChangeAroundLatLng,
    onChangeLocationName,
    onTabChange,
}) => {
    const getButtonClasses = tabNumber => {
        const buttonClassesNormal = 'mt-2 inline mx-2';
        const buttonClassesSelected = 'underline';

        return classNames({
            [buttonClassesNormal]: true,
            [buttonClassesSelected]: selectedTab === tabNumber,
        });
    };

    const openFilterByAllTab = () => {
        onTabChange(1);
        onChangeAroundLatLng('');
        onChangeLocationName('');
        onChangeViaIP(false);
    };

    const openFilterByMyLocationTab = () => {
        onTabChange(2);
        onChangeAroundLatLng('');
        onChangeLocationName('');
        onChangeViaIP(true);
    };

    const openFilterByAnyLocationTab = () => {
        onTabChange(3);
        onChangeViaIP(false);
    };

    const handlePlaceSelection = ({ suggestion }) => {
        onChangeAroundLatLng(`${suggestion.latlng.lat},${suggestion.latlng.lng}`);
        onChangeLocationName(suggestion.value);
    };

    return (
        <div>
            <div>
                <small className="mr-3">Search by:</small>
                <button type="button" className={getButtonClasses(1)} onClick={openFilterByAllTab}>
                    all
                </button>

                <button type="button" className={getButtonClasses(2)} onClick={openFilterByMyLocationTab}>
                    my location
                </button>

                <button type="button" className={getButtonClasses(3)} onClick={openFilterByAnyLocationTab}>
                    a location
                </button>
            </div>
            {selectedTab === 2 && (
                <div className="mt-2 mb-6">
                    <RadiusSelect onChange={onChangeRadius} currentValue={aroundRadius} />
                </div>
            )}
            {selectedTab === 3 && (
                <div className="mt-3 mb-6">
                    <div className="mb-2">
                        <AlgoliaPlaces
                            defaultValue={aroundLocationName}
                            options={{
                                appId: process.env.REACT_APP_ALGOLIA_PLACES_APP_ID,
                                apiKey: process.env.REACT_APP_ALGOLIA_PLACES_API_KEY,
                                countries: ['us'],
                                type: 'city',
                                aroundLatLngViaIP: false,
                            }}
                            onChange={handlePlaceSelection}
                        />
                    </div>

                    <RadiusSelect onChange={onChangeRadius} currentValue={aroundRadius} />
                </div>
            )}
        </div>
    );
};

LocationFilters.propTypes = {
    aroundRadius: PropTypes.string,
    // e.g. Philipsburg, Montana, United States of America
    aroundLocationName: PropTypes.string,
    // e.g. 1, 2, 3
    selectedTab: PropTypes.number,
    onChangeViaIP: PropTypes.func,
    onChangeRadius: PropTypes.func,
    onChangeAroundLatLng: PropTypes.func,
    onChangeLocationName: PropTypes.func,
    onTabChange: PropTypes.func,
};

export default LocationFilters;
