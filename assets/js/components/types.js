import { PropTypes } from 'prop-types';

export const hitType = PropTypes.shape({
    county: PropTypes.string,
    directions: PropTypes.string,
    history: PropTypes.string,
    legacy: PropTypes.string,
    location_query: PropTypes.string,
    name: PropTypes.string,
    objectID: PropTypes.string,
    road_condition: PropTypes.string,
    slug: PropTypes.string,
    state: PropTypes.string,
    structure_description: PropTypes.string,
    url: PropTypes.string,
    _geoloc: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
    }),
    featured: PropTypes.bool,
    managed_by: PropTypes.string,
    guides: PropTypes.arrayOf(PropTypes.string),
});
