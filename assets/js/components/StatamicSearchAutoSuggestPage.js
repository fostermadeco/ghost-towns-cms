import React, { useCallback, useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

// App
import {
    reducers,
} from './reducers/StatamicSearchAutoSuggestPageReducer';

const StatamicSearchAutoSuggestPageComponent = () => {
    useEffect(() => {
        // 
    }, []);

    const inputProps = {
        value: '',
        onChange: () => { }
    }

    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
                <div className="mx-2 mt-3">
                    <Autosuggest
                        suggestions={[]}
                        onSuggestionsFetchRequested={() => { }}
                        onSuggestionsClearRequested={() => { }}
                        getSuggestionValue={() => { }}
                        renderSuggestion={suggestion => (<span>{suggestion.name}</span>)}
                        inputProps={inputProps} />
                </div>
            </div>

            <div className="w-full md:w-1/2"></div>
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
