import React, { useState, useEffect, useRef } from 'react';
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
import useRefScrollTop from './hooks/useRefScrollTop';

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

const GuideMobile = ({ guide }) => {
    // sets popup, marker as active - used on click of marker or when hit is scrolled to
    const [currentTown, setCurrentTown] = useState(null);
    // on click of marker
    const [chosenTown, setChosenTown] = useState(null);

    const [isTownOpen, setIsTownOpen] = useState(false);

    const [mobileViewMode, setMobileViewMode] = useState('list');

    const { width, height } = useWindowSize();

    // town info can be opened in map view and scrolled. Reset scroll when closed or when town changes
    const townScrollEl = useRef(null);
    const townHasChanged = get(currentTown, 'name') !== get(chosenTown, 'name');
    const shouldScrollTownTop = !isTownOpen || townHasChanged;
    useRefScrollTop(townScrollEl, shouldScrollTownTop);

    const renderPopup = () =>
        chosenTown && (
            <div>
                <Popup
                    latitude={chosenTown._geoloc.lat}
                    longitude={chosenTown._geoloc.lng}
                    closeButton={false}
                    closeOnClick={false}
                    offsetTop={-30}
                    offsetLeft={-1}
                >
                    <div className="mt-2">
                        <h3 className="tagline text-xs">{chosenTown.county} county</h3>
                        <strong>{chosenTown.name}</strong>, {chosenTown.state}
                    </div>
                </Popup>
            </div>
        );
    // account for header, hit and bottom nav
    const mapHeight = height - 300;
    const mapWidth = width;
    const headerHeight = 58;

    console.log('current', get(currentTown, 'name'), 'chosen', get(chosenTown, 'name'));

    return (
        <>
            <div className="fixed" style={{ width: '100%', top: 0 }}>
                <div
                    className="flex border-b-2 border-tan-400 bg-white justify-between px-3 content-center items-center"
                    style={{ height: headerHeight }}
                >
                    <a className="text-sm" href="/guides">
                        All Guides
                    </a>
                    <div className="no-flex text-center">
                        <h2 className="tagline text-red text-xs mt-0 mb-0">Ghost Town Guide</h2>
                        <h1 className="text-lg">{guide.title}</h1>
                    </div>
                    <button
                        type="button"
                        className="text-sm"
                        onClick={() => setMobileViewMode(mobileViewMode === 'list' ? 'map' : 'list')}
                    >
                        {mobileViewMode === 'list' ? 'Map' : 'List'} View
                    </button>
                </div>
            </div>
            <div className="bg-tan-200 bg-topo pb-10">
                <div className="page-body">
                    {mobileViewMode === 'list' && (
                        <div className="mx-3">
                            <GuideHitsList chosenTown={chosenTown} setCurrentTown={setCurrentTown} hits={guide.towns} />
                        </div>
                    )}
                    {mobileViewMode === 'map' && (
                        <>
                            <div className="fixed" style={{ bottom: '250px', top: `${headerHeight}px` }}>
                                <GuideMap
                                    width={mapWidth}
                                    height={mapHeight}
                                    currentTown={chosenTown}
                                    hits={guide.towns}
                                >
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
                            <GuideMobileHitsWrapper ref={townScrollEl} className="fixed px-3" isOpen={isTownOpen}>
                                <GuideHitsMobileMap
                                    hits={guide.towns}
                                    setChosenTown={setChosenTown}
                                    currentTown={currentTown}
                                    chosenTown={chosenTown}
                                    isTownOpen={isTownOpen}
                                />
                            </GuideMobileHitsWrapper>
                            <GuideNavMobile
                                hits={guide.towns}
                                isTownOpen={isTownOpen}
                                setIsTownOpen={setIsTownOpen}
                                chosenTown={chosenTown}
                                setChosenTown={setChosenTown}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

// GuideMobile.propTypes = {
//     slug: PropTypes.string,
//     name: PropTypes.string,
// };

export default GuideMobile;
