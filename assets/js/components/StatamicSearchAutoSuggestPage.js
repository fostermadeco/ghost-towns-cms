import React, { useCallback, useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

// App
import { reducers } from './reducers/StatamicSearchAutoSuggestPageReducer';

const languages = [
    {
        name: 'C',
        year: 1972,
    },
    {
        name: 'Elm',
        year: 2012,
    },
];

const StatamicSearchAutoSuggestPageComponent = () => {
    //----------------------------
    // State
    //----------------------------

    const [searchText, setSearchText] = useState('');

    //----------------------------
    // Functions
    //----------------------------

    const onSuggestionsFetchRequested = () => {
        //
    };

    const onSuggestionsClearRequested = () => {
        //
    };

    const getSuggestionValue = () => {
        //
    };

    //----------------------------
    // Render
    //----------------------------

    const inputProps = {
        value: searchText,
        onChange: (event) => setSearchText(event.target.value),
    };

    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <div className="mx-2 mt-3">
                    <Autosuggest
                        suggestions={languages}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
                        inputProps={inputProps}
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2" />
        </div>
    );
};

const mapStateToProps = state => ({
    //
});

const mapDispatchToProps = dispatch => ({
    //
});

const StatamicSearchAutoSuggestPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(StatamicSearchAutoSuggestPageComponent);

StatamicSearchAutoSuggestPage.reducers = {
    StatamicSearchAutoSuggestPage: reducers,
};

export default StatamicSearchAutoSuggestPage;
