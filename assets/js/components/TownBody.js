import React from 'react';
import { PropTypes } from 'prop-types';
import Icon from './Icon';
import { hitType } from './types';
import SanitizeHtml from './SanitizeHtml';

const TownBody = ({ town }) => {
    const locationQuery = town.location_query ? town.location_query : `${town._geoloc.lat},${town._geoloc.lng}`;
    return (
        <>
            {town.narrative_description && (
                <>
                    <h2 className="mt-4 mb-2">Narrative Description</h2>
                    <SanitizeHtml html={town.narrative_description} />
                </>
            )}
            {town.history && (
                <>
                    <h2 className="mt-4 mb-2">History</h2>
                    <SanitizeHtml html={town.history} />
                </>
            )}
            {town.legacy && (
                <>
                    <h2 className="mt-4 mb-2">Legacy</h2>
                    <SanitizeHtml html={town.legacy} />
                </>
            )}
            {town.when_to_visit && (
                <>
                    <h2 className="mt-4 mb-2">When to Visit</h2>
                    <SanitizeHtml html={town.when_to_visit} />
                </>
            )}
            {town.directions && (
                <>
                    <h2 className="mt-4 mb-2">Directions</h2>
                    <SanitizeHtml html={town.directions} />
                </>
            )}
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                    href={`https://www.google.com/maps/search/?api=1&query=${locationQuery}`}
                >
                    <Icon className="mr-1" name="map-marker-alt" size="xs" /> View in Google Maps
                </a>
            </p>
        </>
    );
};

TownBody.propTypes = {
    town: hitType,
};

export default TownBody;
