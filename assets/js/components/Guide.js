import React from 'react';
import { PropTypes } from 'prop-types';
import useIsMobile from './hooks/useIsMobile';
import GuideMobile from './GuideMobile';
import GuideWide from './GuideWide';

const Guide = ({ prop }) => {
    const guide = get();
    const isMobile = useIsMobile();

    return (
        <>
            {isMobile && <GuideMobile slug={guide.slug} name={guide.name} />}
            {!isMobile && <GuideWide slug={guide.slug} name={guide.name} />}
        </>
    );
};

// Guide.propTypes = {
//     prop: PropTypes.
// };

export default Guide;
