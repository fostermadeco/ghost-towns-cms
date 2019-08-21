import React from 'react';
import Icon from './Icon';
import { hitType } from './types';

const TownHeader = ({ town }) => (
    <>
        <div className="text-sm mt-1">
            <span className="text-xs uppercase">County:</span> {town.county}
        </div>
        <div className="text-sm">
            <span className="text-xs uppercase">Road:</span> {town.road_condition}
        </div>
        {town.managed_by && (
            <div className="text-sm">
                <span className="text-xs uppercase">Managed by:</span> {town.managed_by}
            </div>
        )}
        {town.url && (
            <div className="text-sm">
                <span className="text-xs underline">
                    <a href={town.url} target="_blank" rel="noopener noreferrer">
                        <Icon name="link" size="xs" /> Website
                    </a>
                </span>
            </div>
        )}
    </>
);

TownHeader.propTypes = {
    town: hitType,
};

export default TownHeader;
