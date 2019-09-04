import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

//----------------------------
// Action Types
//----------------------------

const initSearchAutoSuggestFetch = createAction('SEARCH_AUTO_SUGGEST_FETCH_INIT');
const requestSearchAutoSuggestFetch = createAction('SEARCH_AUTO_SUGGEST_FETCH_REQUEST');
const receiveSearchAutoSuggestFetch = createAction('SEARCH_AUTO_SUGGEST_FETCH_RECEIVE');
const errorSearchAutoSuggestFetch = createAction('SEARCH_AUTO_SUGGEST_FETCH_ERROR');
const finishSearchAutoSuggestFetch = createAction('SEARCH_AUTO_SUGGEST_FETCH_FINISH');

//----------------------------
// Action Dispatch
//----------------------------

const dispatchFetchSearchAutoSuggest = query => async dispatch => {
    dispatch(initSearchAutoSuggestFetch());

    try {
        dispatch(requestSearchAutoSuggestFetch(query));

        const {
            data: { data: results },
        } = await axios.get(`/!/Fetch/search?index=collections/towns&query=${encodeURI(query)}`);

        dispatch(receiveSearchAutoSuggestFetch(results));
        return results;
    } catch (error) {
        dispatch(errorSearchAutoSuggestFetch(error));
    } finally {
        dispatch(finishSearchAutoSuggestFetch());
    }
};

//----------------------------
// Reducers
//----------------------------

const searchAutoSuggestions = handleActions(
    {
        [receiveSearchAutoSuggestFetch](state, { payload }) {
            return payload;
        },
    },
    []
);

const reducers = combineReducers({
    searchAutoSuggestions,
});

const getSearchAutoSuggestionsState = state => state.StatamicSearchAutoSuggestPage.searchAutoSuggestions;

//----------------------------
// Exports
//----------------------------

export { dispatchFetchSearchAutoSuggest, getSearchAutoSuggestionsState, reducers };
