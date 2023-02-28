import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userProfileReducer from './userProfile/userProfileReducers';
import authReducer from './auth/authReducers';

const rootReducer = combineReducers({ 
    authReducer,
    userProfileReducer
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));