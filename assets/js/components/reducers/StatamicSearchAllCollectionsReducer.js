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

const dispatchFetchSearchResults = (query, taxonomy) => async dispatch => {
    dispatch(initSearchResultsFetch());

    try {
        dispatch(requestSearchResultsFetch());

        let searchResults = [];
        let taxonomyQuery = '';

        if (query.trim() === '') {
            if (taxonomy) {
                taxonomyQuery = `?taxonomy=${encodeURI(taxonomy)}`;
            }

            const {
                data: { data: results },
            } = await axios.get(`/!/Fetch/collection/towns${taxonomyQuery}`);
            searchResults = results;
        } else {
            if (taxonomy) {
                taxonomyQuery = `&taxonomy=${encodeURI(taxonomy)}`;
            }

            // const {
            //     data: { data: results },
            // } = await axios.get(`/!/Fetch/search?index=collections/towns&query=${encodeURI(query)}${taxonomyQuery}`);

            const {
                data: { data: results },
            } = await axios.get(`/!/Fetch/search?index=default&query=${encodeURI(query)}`);

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

const searchResults = handleActions(
    {
        [receiveSearchResultsFetch](state, { payload }) {
            return payload;
        },
    },
    []
);

const reducers = combineReducers({
    searchResults,
});

//----------------------------
// Selectors
//----------------------------

const getSearchResultsState = state => {
    return state.StatamicSearchAllCollections.searchResults;
}

//----------------------------
// Exports
//----------------------------

export { dispatchFetchSearchResults, getSearchResultsState, reducers };
