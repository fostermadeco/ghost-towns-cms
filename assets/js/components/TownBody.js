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
                    <h3 className="text-2xl pt-4 mb-4">Narrative Description</h3>
                    <SanitizeHtml html={town.narrative_description} />
                </>
            )}
            {town.history && (
                <>
                    <h3 className="text-2xl pt-4 mb-4">History</h3>
                    <SanitizeHtml html={town.history} />
                </>
            )}
            {town.legacy && (
                <>
                    <h3 className="text-2xl pt-4 mb-4">Legacy</h3>
                    <SanitizeHtml html={town.legacy} />
                </>
            )}
            {town.directions && (
                <>
                    <h3 className="text-2xl pt-4 mb-4">Directions</h3>
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
                    <img className="mr-2" src="/site/themes/ghosttowns/img/pin.svg" width="13" /> View in Google Maps
                </a>
            </p>
        </>
    );
};

TownBody.propTypes = {
    town: hitType,
};

export default TownBody;
