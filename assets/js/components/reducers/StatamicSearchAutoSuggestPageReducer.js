import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const test = handleActions({
    // 
}, null);

const reducers = combineReducers({
    test,
});

export { reducers }
