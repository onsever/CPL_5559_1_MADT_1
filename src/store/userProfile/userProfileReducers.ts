import { ADD_USER_PROFILE, DELETE_USER_PROFILE, GET_SINGLE_USER_PROFILE, SET_USER_PROFILES, UPDATE_USER_PROFILE } from "./userProfileActions";

const initialState = {
  userProfiles: [],
  selectedUserProfile: {},
};

function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_USER_PROFILE:
        return {...state, selectedUserProfile: state.userProfiles.filter(x => x.id === action.payload)[0]};
    case SET_USER_PROFILES:
      return { ...state, userProfiles: action.payload };
    case ADD_USER_PROFILE:
        return { ...state, userProfiles: [...state.userProfiles, action.payload] };
    case UPDATE_USER_PROFILE:
        return { ...state, userProfiles: state.userProfiles.map(x => x.id === action.payload.id ? action.payload : x) };
    case DELETE_USER_PROFILE:
        return { ...state, userProfiles: state.userProfiles.filter(x => x.id !== action.payload.id) };
    default:
      return state;
  }
}

export default userProfileReducer;