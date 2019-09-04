import React, { useCallback, useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import useDebouncedCallback from 'use-debounce/lib/callback';

// App
import {
    dispatchFetchSearchAutoSuggest,
    getSearchAutoSuggestionsState,
    reducers,
} from './reducers/StatamicSearchAutoSuggestPageReducer';

const StatamicSearchAutoSuggestPageComponent = ({ searchAutoSuggestions, fetchSearchAutoSuggest }) => {
    //----------------------------
    // State
    //----------------------------

    const [searchText, setSearchText] = useState('');

    //----------------------------
    // Functions
    //----------------------------

    const [onSuggestionsFetchRequested] = useDebouncedCallback(async event => {
        fetchSearchAutoSuggest(event.value);
    }, 100);

    const onSuggestionsClearRequested = () => {
        //
    };

    const getSuggestionValue = suggestion => suggestion.title;

    //----------------------------
    // Render
    //----------------------------

    const renderSuggestion = suggestion => <span>{suggestion.title}</span>;

    const inputProps = {
        value: searchText,
        onChange: event => {
            if (event.target.tagName === 'INPUT') {
                setSearchText(event.target.value);
            } else if (event.target.tagName === 'LI') {
                setSearchText(event.target.innerText);
            }
        },
    };

    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <div className="mx-2 mt-3">
                    <Autosuggest
                        suggestions={searchAutoSuggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2" />
        </div>
    );
};

StatamicSearchAutoSuggestPageComponent.propTypes = {
    searchAutoSuggestions: PropTypes.array.isRequired,
    fetchSearchAutoSuggest: PropTypes.func.isRequired,
};

//----------------------------
// Redux
//----------------------------

const mapStateToProps = state => ({
    searchAutoSuggestions: getSearchAutoSuggestionsState(state),
});

const mapDispatchToProps = dispatch => ({
    fetchSearchAutoSuggest: (...args) => dispatchFetchSearchAutoSuggest(...args)(dispatch),
});

const StatamicSearchAutoSuggestPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatamicSearchAutoSuggestPageComponent);

StatamicSearchAutoSuggestPage.reducers = {
    StatamicSearchAutoSuggestPage: reducers,
};

export default StatamicSearchAutoSuggestPage;
