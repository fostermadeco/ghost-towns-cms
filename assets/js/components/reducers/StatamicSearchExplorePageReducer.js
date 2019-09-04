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

const initStatesFetch = createAction('STATES_FETCH_INIT');
const requestStatesFetch = createAction('STATES_FETCH_REQUEST');
const receiveStatesFetch = createAction('STATES_FETCH_RECEIVE');
const errorStatesFetch = createAction('STATES_FETCH_ERROR');
const finishStatesFetch = createAction('STATES_FETCH_FINISH');

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

            const {
                data: { data: results },
            } = await axios.get(`/!/Fetch/search?index=collections/towns&query=${encodeURI(query)}${taxonomyQuery}`);
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

const dispatchFetchStates = () => async dispatch => {
    dispatch(initStatesFetch());

    try {
        dispatch(requestStatesFetch());
        const { data: states } = await axios.get(`/!/Fetch/taxonomy/states`);
        dispatch(receiveStatesFetch(states));
        return states;
    } catch (error) {
        dispatch(errorStatesFetch(error));
        throw new Error(error);
    } finally {
        dispatch(finishStatesFetch());
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

const statesList = handleActions(
    {
        [receiveStatesFetch](state, { payload }) {
            return payload;
        },
    },
    []
);

const reducers = combineReducers({
    searchResults,
    statesList,
});

//----------------------------
// Selectors
//----------------------------

const getSearchResultsState = state => state.StatamicSearchExplorePage.searchResults;
const getStatesListState = state => state.StatamicSearchExplorePage.statesList;

//----------------------------
// Exports
//----------------------------

export { dispatchFetchSearchResults, dispatchFetchStates, getSearchResultsState, getStatesListState, reducers };
