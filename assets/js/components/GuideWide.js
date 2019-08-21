import React, { useState } from 'react';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { Popup } from 'react-map-gl';
import { PropTypes } from 'prop-types';

import GuideHitsList from './GuideHitsList';
import GeoSearchMapBox from './GeoSearchMapbox';
import MapMarker from './MapMarker';
import useElementSize from './hooks/useElementSize';

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);

const GuideWide = ({ slug, name }) => {
    const [mapWrapRef, mapWidth] = useElementSize();
    // The difference between current and chosen is current is a passive
    // selection that happens on scroll. Chosen happens on a specific action.
    // sets popup, marker as active - used on click of marker or when hit is scrolled to
    const [currentTown, setCurrentTown] = useState(null);
    // on click of marker
    const [chosenTown, setChosenTown] = useState();

    const filter = `guides:${slug}`;

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

    return (
        <div>
            <InstantSearch searchClient={searchClient} indexName={process.env.REACT_APP_ALGOLIA_INDEX}>
                <Configure filters={filter} />
                <div className="flex">
                    <div className="w-1/2">
                        <div className="ml-3 sm:ml-0 mr-3 mb-10 pb-20">
                            <h1>Guide: {name}</h1>
                            <p className="md:hidden">View as Map</p>
                            <GuideHitsList setCurrentTown={setCurrentTown} chosenTown={chosenTown} />
                        </div>
                    </div>
                    <div className="w-1/2" id="test" ref={mapWrapRef}>
                        <div className="fixed" style={{ top: '55px' }}>
                            <GeoSearchMapBox width={mapWidth} height={500}>
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
            </InstantSearch>
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
