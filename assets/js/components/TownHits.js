import React from 'react';
import { connectHits, Highlight } from 'react-instantsearch-dom';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import CustomPagination from './CustomPagination';
import HitIcon from './HitIcon';
import Icon from './Icon';
import { hitType } from './types';

const Hit = ({ hit, onMouseEnter = () => {}, onMouseLeave = () => {} }) => (
    <div onMouseEnter={() => onMouseEnter(hit)} onMouseLeave={onMouseLeave}>
        <div className="my-3">
            <div className="flex content-start items-baseline">
                <HitIcon className="mr-1" isFeatured={hit.featured} size={15} />
                <h3>
                    <a href={`/towns/${hit.slug}`}>
                        <Highlight hit={hit} attribute="name" /> <span className="text-sm">{hit.state}</span>
                    </a>
                </h3>
            </div>
            <div className="text-sm mt-1">
                <span className="text-xs uppercase">County:</span> {hit.county}
            </div>
            <div className="text-sm">
                <span className="text-xs uppercase">Road:</span> {hit.road_condition}
            </div>
            <div className="text-sm">
                <span className="text-xs underline">
                    <a href={hit.url}>
                        <Icon name="link" size="xs" /> Website
                    </a>
                </span>
            </div>
            <p className="text-sm mt-2">{hit.structure_description}</p>
        </div>
        <hr className="mt-2" />
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
