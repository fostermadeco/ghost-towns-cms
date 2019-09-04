import React, { useEffect } from 'react';
import get from 'lodash.get';

import { PropTypes } from 'prop-types';
import TownBody from './TownBody';
import TownHeader from './TownHeader';
import { hitType } from './types';

const Hit = ({ hit, index, chosenTown, isTownOpen }) => (
    <div className={`md:block ${chosenTown && chosenTown.name !== hit.name ? 'hidden' : ''}`}>
        <div className="my-3 pt-2 pb-10 mx-1">
            <h3 className="tagline text-xs mb-0">{hit.county} county</h3>
            <h2 className="text-3xl font-normal font-sansserif mr-5 capitalize">
                {index + 1}. {hit.title}, {hit.state}
            </h2>
            <TownHeader town={hit} />
            {hit.images && hit.images.length > 0 && (
                <div className="mt-10">
                    {' '}
                    <img src={hit.images[0]} />
                </div>
            )}
            {isTownOpen && (
                <>
                    <TownBody town={hit} />
                </>
            )}
        </div>
        <hr className="mt-2" />
    </div>
);

Hit.propTypes = {
    hit: hitType,
    index: PropTypes.number,
    chosenTown: hitType,
    isTownOpen: PropTypes.bool,
};

const GuideHitsMobileMap = ({ hits, setChosenTown, currentTown, chosenTown, isTownOpen }) => {
    // currentTown is already set via the list view, syncs to chosen for map
    useEffect(() => {
        if (hits.length > 0 && !chosenTown) {
            setChosenTown(currentTown);
        }
    }, [chosenTown, setChosenTown, currentTown, hits]);

    // This runs once when switching to map view, syncs scrolled current town with chosen
    useEffect(() => {
        if (get(currentTown, 'name') !== get(chosenTown, 'name')) {
            setChosenTown(currentTown);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {hits.map((hit, i) => (
                <Hit key={hit.name} hit={hit} index={i} chosenTown={chosenTown} isTownOpen={isTownOpen} />
            ))}
        </>
    );
};

GuideHitsMobileMap.propTypes = {
    hits: PropTypes.arrayOf(hitType),
    setChosenTown: PropTypes.func,
    currentTown: hitType,
    chosenTown: hitType,
    isTownOpen: PropTypes.bool,
};

export default GuideHitsMobileMap;
