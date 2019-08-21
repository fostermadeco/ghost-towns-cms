import React, { useRef } from 'react';
import { connectHits } from 'react-instantsearch-dom';
import useWindowScroll from 'react-use/lib/useWindowScroll';

import { PropTypes } from 'prop-types';
import useRefIntersect from './hooks/useRefIntersect';
import useRefScrollTo from './hooks/useRefScrollTo';
import TownBody from './TownBody';
import TownHeader from './TownHeader';
import { hitType } from './types';

const Hit = ({ hit, index, setCurrentTown, chosenTown }) => {
    const hitRef = useRef(null);
    const { y } = useWindowScroll();

    useRefIntersect(y, hitRef, () => setCurrentTown(hit));

    const isTownChosen = !!(chosenTown && chosenTown.objectID === hit.objectID);
    useRefScrollTo(hitRef, isTownChosen);

    return (
        <div>
            <div className="my-5 py-2" style={{ minHeight: '500px' }}>
                <div ref={hitRef} className="flex content-start items-baseline">
                    <h3>
                        {index + 1}. {hit.name}
                    </h3>
                </div>
                <TownHeader town={hit} />
                <p className="text-sm mt-2">{hit.structure_description}</p>
                <TownBody town={hit} />
            </div>
            <hr className="mt-2" />
        </div>
    );
};

Hit.propTypes = {
    hit: hitType,
    index: PropTypes.number,
    setCurrentTown: PropTypes.func,
    chosenTown: hitType,
};

const Hits = ({ hits, setCurrentTown, chosenTown }) => (
    <>
        {hits.map((hit, i) => (
            <Hit key={hit.name} hit={hit} index={i} setCurrentTown={setCurrentTown} chosenTown={chosenTown} />
        ))}
    </>
);

Hits.propTypes = {
    hits: PropTypes.arrayOf(hitType),
    setCurrentTown: PropTypes.func,
    chosenTown: hitType,
};

const GuideHitsList = connectHits(Hits);

export default GuideHitsList;
