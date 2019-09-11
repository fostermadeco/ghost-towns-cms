import React, { useState } from 'react';
import { Popup } from 'react-map-gl';
import { PropTypes } from 'prop-types';

import GuideHitsList from './GuideHitsList';
import GeoSearchMapBox from './GeoSearchMapbox';
import MapMarker from './MapMarker';
import useElementSize from './hooks/useElementSize';

const GuideWide = ({ guide }) => {
    const [mapWrapRef, mapWidth, mapHeight] = useElementSize();
    const [mapFixedRef, mapFixedWidth, mapFixedHeight] = useElementSize();
    // The difference between current and chosen is current is a passive
    // selection that happens on scroll. Chosen happens on a specific action.
    // sets popup, marker as active - used on click of marker or when hit is scrolled to
    const [currentTown, setCurrentTown] = useState(null);
    // on click of marker
    const [chosenTown, setChosenTown] = useState();

    const [hoveredHitId, setHoveredHitId] = useState(null);

    const renderPopup = () =>
        currentTown && (
            <div>
                <Popup
                    latitude={currentTown._geoloc.lat}
                    longitude={currentTown._geoloc.lng}
                    closeButton={false}
                    closeOnClick={false}
                    offsetTop={-30}
                    offsetLeft={-1}
                >
                    <div className="mr-2">
                        <h3 className="tagline text-xs">{currentTown.county} county</h3>
                        <strong>{currentTown.name}</strong>, {currentTown.state}
                    </div>
                </Popup>
            </div>
        );

    if (!guide) {
        return null;
    }
    console.log(mapFixedWidth, mapFixedHeight);
    return (
        <div className="bg-tan-200 bg-topo pb-10">
            <div className="page-body">
                <div className="flex">
                    <div className="w-2/5">
                        <div className="mx:0 md:mx-4" style={{ paddingTop: '80px' }}>
                            <h2 className="tagline text-red">Ghost Town Guide</h2>
                            <h1 className="font-bold text-3xl pb-6">{guide.title}</h1>
                            <div className="mb-10 pb-20">
                                <p className="md:hidden">View as Map</p>
                                <GuideHitsList
                                    setCurrentTown={setCurrentTown}
                                    chosenTown={chosenTown}
                                    hits={guide.towns}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5" ref={mapWrapRef}>
                        <div className="fixed" style={{ height: '100%', top: '70px' }} ref={mapFixedRef}>
                            <GeoSearchMapBox width={mapWidth} height={mapFixedHeight} hits={guide.towns}>
                                {({ hits }) => (
                                    <div>
                                        {renderPopup()}
                                        {hits.map(hit => (
                                            <div
                                                key={hit.name}
                                                onMouseEnter={() => {
                                                    setHoveredHitId(hit.objectID);
                                                }}
                                            >
                                                <MapMarker
                                                    latitude={hit._geoloc.lat}
                                                    longitude={hit._geoloc.lng}
                                                    name={hit.name}
                                                    onClick={() => {
                                                        setCurrentTown(hit);
                                                        setChosenTown(hit);
                                                    }}
                                                    isSelected={
                                                        (currentTown !== null && currentTown.name === hit.name) ||
                                                        hoveredHitId === hit.objectID
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </GeoSearchMapBox>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: '40rem' }} />
            </div>
        </div>
    );
};

GuideWide.propTypes = {
    slug: PropTypes.string,
    name: PropTypes.string,
};

export default GuideWide;
