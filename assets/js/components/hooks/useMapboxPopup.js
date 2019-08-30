import React, { useCallback, useState } from 'react';
import { Popup } from 'react-map-gl';
import capitalize from 'capitalize';

const useMapboxPopup = () => {
    const [searchResult, setSearchResult] = useState(null);
    const renderPopup = useCallback(
        () =>
            searchResult && (
                <div>
                    <Popup
                        latitude={Number(searchResult.latitude)}
                        longitude={Number(searchResult.longitude)}
                        closeButton={false}
                        anchor="bottom"
                        tipSize={5}
                        closeOnClick={false}
                        offsetTop={-20}
                    >
                        <a href={searchResult.url}>
                            <span className="mt-2">{`${searchResult.title}, ${capitalize(searchResult.states)}`}</span>
                        </a>
                    </Popup>
                </div>
            ),
        [searchResult]
    );

    return [renderPopup, setSearchResult];
};

export default useMapboxPopup;
