import React, { useRef } from 'react';
import useWindowScroll from 'react-use/lib/useWindowScroll';

import { PropTypes } from 'prop-types';
import useRefIntersect from './hooks/useRefIntersect';
import useRefScrollTo from './hooks/useRefScrollTo';
import TownBody from './TownBody';
import TownHeader from './TownHeader';
import { hitType } from './types';

const GuideHit = ({ hit, index, setCurrentTown, chosenTown }) => {
    const hitRef = useRef(null);
    const { y } = useWindowScroll();

    useRefIntersect(y, hitRef, () => setCurrentTown(hit));

    const isTownChosen = !!(chosenTown && chosenTown.objectID === hit.objectID);
    useRefScrollTo(hitRef, isTownChosen);

    return (
        <div style={{ minHeight: '500px' }}>
            <div className="my-5 py-2">
                <div ref={hitRef}>
                    <h3 className="tagline text-xs mb-0">{hit.county} county</h3>
                    <h2 className="text-3xl font-normal font-sansserif mr-5 capitalize">
                        {index + 1}. {hit.title}, {hit.state}
                    </h2>
                </div>
                <TownHeader town={hit} />
                {hit.images && hit.images.length > 0 && (
                    <div className="mt-10">
                        {' '}
                        <img src={hit.images[0]} />
                    </div>
                )}
                <TownBody town={hit} />
            </div>
            <hr className="mt-2" />
        </div>
    );
};

GuideHit.propTypes = {
    hit: hitType,
    index: PropTypes.number,
    setCurrentTown: PropTypes.func,
    chosenTown: hitType,
};

const GuideHitsList = ({ hits, setCurrentTown, chosenTown }) => (
    <>
        {hits.map((hit, i) => (
            <GuideHit key={hit.name} hit={hit} index={i} setCurrentTown={setCurrentTown} chosenTown={chosenTown} />
        ))}
    </>
);

GuideHitsList.propTypes = {
    hits: PropTypes.arrayOf(hitType),
    setCurrentTown: PropTypes.func,
    chosenTown: hitType,
};

export default GuideHitsList;
