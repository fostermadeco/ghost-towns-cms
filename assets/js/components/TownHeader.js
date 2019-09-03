import React from 'react';
import Icon from './Icon';
import { hitType } from './types';
import SanitizeHtml from './SanitizeHtml';

const TownHeader = ({ town }) => (
    <>
        <div className="text-brown text-sm mb-2">
            {town.latitude} / {town.longitude}
        </div>
        {town.website && (
            <div className="text-brown text-sm mb-6">
                <a href={town.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <i className="fas fa-external-link-alt fa-sm fa-orange mr-1" /> Website
                </a>
            </div>
        )}
        <div className="text-brown text-lg mb-4">
            <SanitizeHtml html={town.summary_description} />
        </div>
        <div>
            {town.when_to_visit && (
                <div className="mr-10 flex items-center">
                    <img className="mr-3" src="/site/themes/ghosttowns/img/time-clock-circle.svg" width="17" />
                    <div className="text-brown text-sm ml-1">{town.when_to_visit}</div>
                </div>
            )}
            {town.proximity && (
                <div className="flex items-center mt-3 ml-1 mx-3">
                    <img className="mr-4" src="/site/themes/ghosttowns/img/pin.svg" width="13" />
                    <div className="text-brown text-sm">{town.proximity}</div>
                </div>
            )}
            {town.access && (
                <div className="flex items-center mt-3">
                    <img className="mr-1" src="/site/themes/ghosttowns/img/adventure-car-convertible.svg" width="25" />
                    <div className="text-brown text-sm capitalize ml-1">{town.access}</div>
                </div>
            )}
        </div>
        <div className="flex mt-4">
            {town.landmark && <div className="badge badge-blue">Landmark</div>}
            {town.managed_by && <div className="badge badge-blue">Managed</div>}
        </div>
    </>
);

TownHeader.propTypes = {
    town: hitType,
};

export default TownHeader;
