import React from 'react';
import { connectRefinementList } from 'react-instantsearch-dom';
import { PropTypes } from 'prop-types';

const RefinementList = ({ items, label, refine }) => (
    <div>
        <small>
            <b>{label}</b>
        </small>
        <ul>
            {items.map(item => (
                <li key={item.label}>
                    <label>
                        <input checked={item.isRefined} type="checkbox" onChange={() => refine(item.value)} />
                        <span className="ml-2">
                            <small>
                                {item.label} ({item.count})
                            </small>
                        </span>
                    </label>
                </li>
            ))}
        </ul>
    </div>
);

const ItemPropType = PropTypes.shape({
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.string.isRequired,
    isRefined: PropTypes.bool.isRequired,
});

RefinementList.propTypes = {
    items: PropTypes.arrayOf(ItemPropType).isRequired,
    refine: PropTypes.func.isRequired,
    label: PropTypes.string,
};

export default connectRefinementList(RefinementList);
