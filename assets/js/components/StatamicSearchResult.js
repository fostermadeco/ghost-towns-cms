import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
import capitalize from 'capitalize';
import { truncate } from './helpers/strings';

const MapSeachResultStatamic = ({ searchResult }) => {
    return (
        <div className="flex flex-wrap my-3 content-between border rounded border-tan-400 bg-white px-4 py-2 min-h-card">
            <div className="flex-col flex-grow">
                <div className="tagline">
                    {searchResult.county} County
                </div>
                <h3>
                    <a href={searchResult.url}>
                        <span className="font-semibold text-lg">
                            {searchResult.title}
                        </span>
                        {searchResult.states && <span className="text-lg">, {capitalize(searchResult.states)}</span>}
                    </a>
                </h3>
                <div className="flex-grow">
                    <div className="text-brown text-xs mt-2">
                        {ReactHtmlParser(truncate(searchResult.summary_description))}
                    </div>
                </div>
            </div>
            <div className="flex-row mb-3">
                {searchResult.access && <span className="badge badge-blue">{searchResult.access}</span>}
                {/* {searchResult.featured && <span className="badge badge-blue">Landmark</span>} */}
                {/* {searchResult.managed_by && <span className="badge badge-blue">Managed</span>} */}
            </div>
        </div>
    );
};

export default MapSeachResultStatamic;
