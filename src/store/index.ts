import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userProfileReducer from './userProfile/userProfileReducers';

const rootReducer = combineReducers({ 
    userProfileReducer
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));