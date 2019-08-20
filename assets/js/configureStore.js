import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import isEmpty from 'lodash.isempty';
import { getSprinkleReducers } from './sprinkles';

const loggerMiddleware = createLogger();
const sprinkleReducers = getSprinkleReducers();

// check to see if this works with actual reducers
const getStore = reducers => {
    if (isEmpty(reducers)) {
        return createStore(composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)));
    }
    return createStore(
        combineReducers(reducers),
        composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
    );
};

export default getStore(sprinkleReducers);
