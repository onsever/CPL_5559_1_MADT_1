import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userProfileReducer from './userProfile/userProfileReducers';
import authReducer from './auth/authReducers';
import reviewReducer from './review/reviewReducers';

const rootReducer = combineReducers({ 
    authReducer,
    userProfileReducer,
    reviewReducer
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));