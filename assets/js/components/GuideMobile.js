import React, { useState } from 'react';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import get from 'lodash.get';
import { Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import GuideHitsMobileMap from './GuideHitsMobileMap';
import GuideMap from './GuideMap';
import MapMarker from './MapMarker';
import GuideNavMobile from './GuideNavMobile';
import Icon from './Icon';
import GuideHitsList from './GuideHitsList';

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY);

const GuideMobileHitsWrapper = styled.div`
    background-color: #fff;
    max-height: ${props => (props.isOpen ? 'none' : '250px')};
    overflow: ${props => (props.isOpen ? 'scroll' : 'hidden')};
    bottom: 0;
    height: 100%;
    &:before {
        content: '';
        width: 100%;
        height: ${props => (props.isOpen ? 0 : '100%')};
        position: absolute;
        left: 0;
        bottom: 50px;
        background: ${props => (props.isOpen ? '' : 'linear-gradient(rgba(255,255,255,0) 170px, #fff)')};
    }
`;

const GuideMobile = ({ slug, name }) => {
    // sets popup, marker as active - used on click of marker or when hit is scrolled to
    const [currentTown, setCurrentTown] = useState(null);
    // on click of marker
    const [chosenTown, setChosenTown] = useState(null);

    const [isTownOpen, setIsTownOpen] = useState(false);

    const [mobileViewMode, setMobileViewMode] = useState('list');

    const { width, height } = useWindowSize();

    const filter = `guides:${slug}`;

    const renderPopup = () =>
        chosenTown && (
            <div>
                <Popup
                    latitude={chosenTown._geoloc.lat}
                    longitude={chosenTown._geoloc.lng}
                    closeButton={false}
                    anchor="bottom"
                    tipSize={5}
                    offsetTop={-20}
                    closeOnClick={false}
                >
                    <div className="mt-2">{chosenTown.name}</div>
                </Popup>
            </div>
        );
    // account for header, hit and bottom nav
    const mapHeight = height - 300;
    const mapWidth = width;

    console.log('current', get(currentTown, 'name'), 'chosen', get(chosenTown, 'name'));

    return (
        <>
            <div className="fixed" style={{ width: '100%', top: 0 }}>
                <div
                    className="flex border-b border-gray-300 bg-white justify-between px-3 content-center items-center"
                    style={{ height: 50 }}
                >
                    <Link to="/" className="no-underline">
                        <Icon name="angle-left" />{' '}
                        <span role="img" aria-label="derelict house">
                            🏚️
                        </span>
                    </Link>
                    <h1 className="text-lg">Guide: {name}</h1>
                    <button
                        type="button"
                        className="text-sm"
                        onClick={() => setMobileViewMode(mobileViewMode === 'list' ? 'map' : 'list')}
                    >
                        {mobileViewMode === 'list' ? 'Map' : 'List'} View
                    </button>
                </div>
            </div>
            <InstantSearch searchClient={searchClient} indexName={process.env.REACT_APP_ALGOLIA_INDEX}>
                <Configure filters={filter} />
                {mobileViewMode === 'list' && (
                    <div className="mx-3">
                        <GuideHitsList chosenTown={chosenTown} setCurrentTown={setCurrentTown} />
                    </div>
                )}
                {mobileViewMode === 'map' && (
                    <>
                        <div className="fixed" style={{ bottom: '250px', top: '50px' }}>
                            <GuideMap width={mapWidth} height={mapHeight} currentTown={chosenTown}>
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
                                                    isSelected={chosenTown !== null && chosenTown.name === hit.name}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </GuideMap>
                        </div>
                        <GuideMobileHitsWrapper className="fixed px-3" isOpen={isTownOpen}>
                            <GuideHitsMobileMap
                                setChosenTown={setChosenTown}
                                currentTown={currentTown}
                                chosenTown={chosenTown}
                                isTownOpen={isTownOpen}
                            />
                        </GuideMobileHitsWrapper>
                        <GuideNavMobile
                            isTownOpen={isTownOpen}
                            setIsTownOpen={setIsTownOpen}
                            chosenTown={chosenTown}
                            setChosenTown={setChosenTown}
                        />
                    </>
                )}
            </InstantSearch>
        </>
    );
};

GuideMobile.propTypes = {
    slug: PropTypes.string,
    name: PropTypes.string,
};

export default GuideMobile;
