import React from 'react';
import { connectHits, Highlight } from 'react-instantsearch-dom';
import { PropTypes } from 'prop-types';
import CustomPagination from './CustomPagination';
import { hitType } from './types';
import { truncate } from './helpers/strings';

const Hit = ({ hit, onMouseEnter = () => {}, onMouseLeave = () => {} }) => (
    <div
        className="flex flex-wrap my-3 content-between border rounded border-tan-400 bg-white px-4 py-2 min-h-card hover:shadow-full"
        onMouseEnter={() => onMouseEnter(hit)}
        onMouseLeave={onMouseLeave}
    >
        <div className="flex-col flex-grow">
            <div className="tagline text-xs">
                <Highlight hit={hit} attribute="county" /> County
            </div>
            <h3>
                <a href={`/towns/${hit.slug}`}>
                    <span className="font-semibold text-lg">
                        <Highlight hit={hit} attribute="name" />,
                    </span>
                    <span className="text-lg"> {hit.state}</span>
                </a>
            </h3>
            <div className="flex-grow">
                <p className="text-brown text-xs mt-2">{truncate(hit.structure_description)}</p>
            </div>
        </div>
        <div className="flex-row mb-3">
            {hit.road_condition && <span className="badge badge-blue">{hit.road_condition}</span>}
            {hit.featured && <span className="badge badge-blue">Landmark</span>}
            {hit.managed_by && <span className="badge badge-blue">Managed</span>}
        </div>
    </div>
);

Hit.propTypes = {
    hit: hitType,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

const Hits = ({ hits, onMouseEnter = () => {}, onMouseLeave = () => {} }) => (
    <div>
        {hits.map(hit => (
            <Hit key={hit.name} hit={hit} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
        ))}

        {hits.length > 0 && (
            <div className="my-6">
                <CustomPagination />
            </div>
        )}
    </div>
);

Hits.propTypes = {
    hits: PropTypes.array,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
};

const TownHits = connectHits(Hits);

export default TownHits;
