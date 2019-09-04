import React from 'react';
import { PropTypes } from 'prop-types';
import { hitType } from './types';
import Icon from './Icon';

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
        <div className="w-full fixed border-t-2 border-tan-400 bg-white" style={{ bottom: 0 }}>
            <div className="flex justify-between items-center mx-3" style={{ height: '57px' }}>
                <button className="flex items-center" type="button" onClick={handlePrev}>
                    <img src="/site/themes/ghosttowns/img/arrow-right.svg" alt="next" className="rotate-180 mr-2" />
                    Prev
                </button>
                <button
                    type="button"
                    className="text-lg"
                    onClick={() => {
                        setIsTownOpen(!isTownOpen);
                    }}
                >
                    <Icon name="info-circle" className="mr-1" />
                    {isTownOpen ? 'Less Info' : 'More Info'}
                </button>
                <button className="flex items-center" type="button" onClick={handleNext}>
                    Next
                    <img className="ml-2" src="/site/themes/ghosttowns/img/arrow-right.svg" alt="next" />
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
