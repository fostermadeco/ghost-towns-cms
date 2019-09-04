import React, { useState } from 'react';
import { Popup } from 'react-map-gl';
import { PropTypes } from 'prop-types';

import GuideHitsList from './GuideHitsList';
import GeoSearchMapBox from './GeoSearchMapbox';
import MapMarker from './MapMarker';
import useElementSize from './hooks/useElementSize';

const GuideWide = ({ guide }) => {
    const [mapWrapRef, mapWidth] = useElementSize();
    // The difference between current and chosen is current is a passive
    // selection that happens on scroll. Chosen happens on a specific action.
    // sets popup, marker as active - used on click of marker or when hit is scrolled to
    const [currentTown, setCurrentTown] = useState(null);
    // on click of marker
    const [chosenTown, setChosenTown] = useState();

    const renderPopup = () =>
        currentTown && (
            <div>
                <Popup
                    latitude={currentTown._geoloc.lat}
                    longitude={currentTown._geoloc.lng}
                    closeButton={false}
                    anchor="bottom"
                    offsetTop={-20}
                    tipSize={5}
                    closeOnClick={false}
                >
                    <div className="mt-2">{currentTown.name}</div>
                </Popup>
            </div>
        );

    if (!guide) {
        return null;
    }

    return (
        <div>
            <div className="flex">
                <div className="w-1/2">
                    <div className="pt-6">
                        <h2 className="tagline text-red">Ghost Town Guide</h2>
                        <h1 className="font-bold text-3xl pb-6">{guide.title}</h1>
                    </div>
                    <div className="ml-3 sm:ml-0 mr-3 mb-10 pb-20">
                        <p className="md:hidden">View as Map</p>
                        <GuideHitsList setCurrentTown={setCurrentTown} chosenTown={chosenTown} hits={guide.towns} />
                    </div>
                </div>
                <div className="w-1/2" id="test" ref={mapWrapRef}>
                    <div className="fixed" style={{ top: '70px' }}>
                        <GeoSearchMapBox width={mapWidth} height={500} hits={guide.towns}>
                            {({ hits }) => (
                                <div>
                                    {renderPopup()}
                                    {hits.map(hit => (
                                        <div key={hit.name}>
                                            <MapMarker
                                                latitude={hit._geoloc.lat}
                                                longitude={hit._geoloc.lng}
                                                name={hit.name}
                                                onClick={() => {
                                                    setCurrentTown(hit);
                                                    setChosenTown(hit);
                                                }}
                                                isSelected={currentTown !== null && currentTown.name === hit.name}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </GeoSearchMapBox>
                    </div>
                </div>
            </div>
            <div style={{ marginBottom: '40rem' }}>
                <h2>More Content</h2>
                <p>To buffer hits so they can be scrolled with map on larger screens</p>
            </div>
        </div>
    );
};

GuideWide.propTypes = {
    slug: PropTypes.string,
    name: PropTypes.string,
};

export default GuideWide;
