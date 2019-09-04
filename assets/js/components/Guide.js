import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import useIsMobile from './hooks/useIsMobile';
import GuideMobile from './GuideMobile';
import GuideWide from './GuideWide';

const Guide = props => {
    const isMobile = useIsMobile();

    useEffect(() => {
        // Update the document title using the browser API
        props.requestGuides(props.guideId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const guide = props.guides[props.guideId];

    if (!guide) {
        return null;
    }

    return (
        <>
            {isMobile && <GuideMobile guide={guide} />}
            {!isMobile && <GuideWide guide={guide} />}
        </>
    );
};

// Guide.propTypes = {
//     prop: PropTypes.
// };

export default Guide;
