import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import { createAction, handleActions } from 'redux-actions';
import Guide from './Guide';
import * as fromAPI from '../api/guides';
import { transformGuides } from './helpers/guides';

// declare action names in separate file for easy updating and a way to see all the actions
// create action creators with redux-actions
// name action types like <NOUN>_<VERB>
// name actions like <verb><Noun> - present tense
const requestGuidesFetch = createAction('GUIDES_FETCH_REQUEST');
const receiveGuidesFetch = createAction('GUIDES_FETCH_RECEIVE');
const finishGuidesFetch = createAction('GUIDES_FETCH_FINISH');

const requestGuideFetch = createAction('GUIDE_FETCH_REQUEST');

const fetchGuides = () => dispatch => {
    dispatch(requestGuidesFetch());

    return fromAPI
        .getGuides()
        .then(response => {
            const guides = transformGuides(response.data.data);

            dispatch(receiveGuidesFetch(guides));
        })
        .catch(error => {
            dispatch(receiveGuidesFetch(error));
        })
        .finally(() => {
            dispatch(finishGuidesFetch());
        });
};

// colocate reducers with container so we can dynamically load them with sprinkles
// use redux-actions to create reducers
// compose reducers by state property
const isFetching = handleActions(
    {
        [requestGuidesFetch]() {
            return true;
        },
        [finishGuidesFetch]() {
            return false;
        },
    },
    false
);

const guides = handleActions(
    {
        [receiveGuidesFetch]: {
            next(state, { payload }) {
                return payload;
            },
        },
        [finishGuidesFetch](state) {
            return state;
        },
    },
    []
);

const error = handleActions(
    {
        // don't create an error action type
        [receiveGuidesFetch]: {
            next() {
                return null;
            },
            throw(
                state,
                {
                    payload: { message },
                }
            ) {
                return message;
            },
        },
    },
    null
);

const reducers = combineReducers({
    error,
    isFetching,
    guides,
});

// Use selectors for everything
// name selectors like get<Noun>
const getError = state => state.GuideContainer.error;
const getIsFetching = state => state.GuideContainer.isFetching;
const getGuides = state => state.GuideContainer.guides;

const mapStateToProps = state => ({
    isFetching: getIsFetching(state),
    guides: getGuides(state),
    error: getError(state),
});

const mapDispatchToProps = (dispatch, props) => ({
    requestGuides: () => fetchGuides()(dispatch),
});

const GuideContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Guide);

// add reducer as property to load them dynamically for sprinkles
GuideContainer.reducers = {
    GuideContainer: reducers,
};

export default GuideContainer;
