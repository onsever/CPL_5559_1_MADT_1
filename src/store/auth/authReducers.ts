import {
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  SIGN_UP_SUBMIT,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
} from './authActions';

const initialState = {
  auth: null,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {...state, error: null};
    case LOGIN_SUCCESS:
      return {...state, auth: action.payload};
    case LOGIN_FAILED:
      return {...state, auth: null, error: action.payload};
    case LOGOUT:
      return {...state, auth: null};
    case SIGN_UP_SUBMIT:
      return {...state, error: null};
    case SIGN_UP_SUCCESS:
      return {...state, auth: action.payload};
    case SIGN_UP_FAILED:
      return {...state, auth: null, error: action.payload};
    default:
      return state;
  }
}

export default authReducer;
 