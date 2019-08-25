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

const dispatchFetchSearchResults = () => async (dispatch) => {
    dispatch(initSearchResultsFetch());

    try {
        dispatch(requestSearchResultsFetch());
        const { data: { data: searchResults } } = await axios.get('/!/Fetch/search?collection=towns&query=lion');
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
// Exports
//----------------------------

export { dispatchFetchSearchResults, reducers };