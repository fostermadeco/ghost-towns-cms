import React from 'react';
import { connectPagination } from 'react-instantsearch-dom';
import { PropTypes } from 'prop-types';

const Pagination = ({ currentRefinement, nbPages, refine }) => {
    const pages = [];
    for (let i = 1; i <= nbPages; i++) {
        pages.push(i);
    }

    const renderLink = (text, ariaLabel, displayAsLink, clickHandler) => {
        if (displayAsLink) {
            return (
                <button
                    type="button"
                    aria-label={ariaLabel}
                    style={{ textDecoration: 'underline' }}
                    onClick={clickHandler}
                >
                    {text}
                </button>
            );
        }
        return <span>{text}</span>;
    };

    if (nbPages === 1) {
        return null;
    }

    return (
        <div>
            <ul>
                <li className="inline-block ml-3">
                    {renderLink('‹', 'Previous Page', currentRefinement !== 1, () => {
                        refine(currentRefinement - 1);
                    })}
                </li>

                {pages.map(page => (
                    <li className="inline-block ml-3" key={page}>
                        {renderLink(page, `Page ${page}`, currentRefinement !== page, () => {
                            refine(page);
                        })}
                    </li>
                ))}

                <li className="inline-block ml-3">
                    {renderLink('›', 'Next page', currentRefinement !== nbPages, () => {
                        refine(currentRefinement + 1);
                    })}
                </li>
            </ul>
        </div>
    );
};

Pagination.propTypes = {
    currentRefinement: PropTypes.number,
    nbPages: PropTypes.number,
    refine: PropTypes.func,
};

const CustomPagination = connectPagination(Pagination);

export default CustomPagination;
