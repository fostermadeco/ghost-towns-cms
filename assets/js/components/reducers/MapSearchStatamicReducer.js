import axios from 'axios';
import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

//----------------------------
// Action Types
//----------------------------

const initSearchResultsFetch = createAction('SEARCH_RESULTS_FETCH_INIT');
const requestSearchResultsFetch = createAction('SEARCH_RESULTS_FETCH_REQUEST');
const receiveSearchResultsFetch = createAction('SEARCH_RESULTS_FETCH_RECEIVE');
const errorSearchResultsFetch = createAction('SEARCH_RESULTS_FETCH_ERROR');
const finishSearchResultsFetch = createAction('SEARCH_RESULTS_FETCH_FINISH');

//----------------------------
// Action Dispatch
//----------------------------

const dispatchFetchSearchResults = (query) => async (dispatch) => {
    dispatch(initSearchResultsFetch());

    try {
        dispatch(requestSearchResultsFetch());

        let searchResults = [];
        if (query.trim() === '') {
            const { data: { data: results } } = await axios.get(`/!/Fetch/collection/towns`);
            searchResults = results;
        } else {
            const { data: { data: results } } = await axios.get(`/!/Fetch/search?index=collections/towns&query=${encodeURI(query)}`);
            searchResults = results;
        }

        dispatch(receiveSearchResultsFetch(searchResults));
        return searchResults;
    } catch (error) {
        dispatch(errorSearchResultsFetch(error));
        throw new Error(error);
    } finally {
        dispatch(finishSearchResultsFetch());
    }
};

//----------------------------
// Reducers
//----------------------------

const searchResults = handleActions({
    [receiveSearchResultsFetch](action, { payload }) {
        return payload;
    }
}, []);

const reducers = combineReducers({
    searchResults,
});

//----------------------------
// Selectors
//----------------------------

const getSearchResultsState = state => state.MapSearchStatamic.searchResults;

//----------------------------
// Exports
//----------------------------

export { dispatchFetchSearchResults, getSearchResultsState, reducers };