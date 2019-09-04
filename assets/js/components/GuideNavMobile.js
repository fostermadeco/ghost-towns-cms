import React from 'react';
import { PropTypes } from 'prop-types';
import { hitType } from './types';

const GuideNavMobile = ({ hits, setIsTownOpen, isTownOpen, chosenTown, setChosenTown }) => {
    const getChosenHitIndex = currentTownName => {
        const currentHit = hits.find(hit => hit.name === currentTownName);
        return hits.indexOf(currentHit);
    };

    const handleNext = () => {
        const index = getChosenHitIndex(chosenTown.name);
        const nextIndex = index + 1;
        if (nextIndex >= hits.length) {
            setChosenTown(hits[0]);
        } else {
            setChosenTown(hits[nextIndex]);
        }
    };

    const handlePrev = () => {
        const index = getChosenHitIndex(chosenTown.name);
        const prevIndex = index - 1;
        if (prevIndex < 0) {
            setChosenTown(hits[hits.length - 1]);
        } else {
            setChosenTown(hits[prevIndex]);
        }
    };

    return (
        <div className="w-full fixed border border-tan-400 bg-white" style={{ bottom: 0 }}>
            <div className="flex justify-between items-center mx-3" style={{ height: '50px' }}>
                <button type="button" onClick={handlePrev}>
                    Prev
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setIsTownOpen(!isTownOpen);
                    }}
                >
                    {isTownOpen ? 'Less Info' : 'More Info'}
                </button>
                <button type="button" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

GuideNavMobile.propTypes = {
    hits: PropTypes.arrayOf(hitType),
    setIsTownOpen: PropTypes.func,
    isTownOpen: PropTypes.bool,
    chosenTown: hitType,
    setChosenTown: PropTypes.func,
};

export default GuideNavMobile;
