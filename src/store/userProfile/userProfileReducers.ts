import { ADD_USER_PROFILE, DELETE_USER_PROFILE, GET_SINGLE_USER_PROFILE, SET_USER_PROFILES, 
  UPDATE_USER_PROFILE_SUBMIT, UPDATE_USER_PROFILE_SUCCESS,UPDATE_USER_PROFILE_FAILED } from "./userProfileActions";

const initialState = {
  userProfiles: [],
  selectedUserProfile: {},
  error: null,
  updatedUserProfile: {},
};

function userProfileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_USER_PROFILE:
      return { ...state, selectedUserProfile: action.payload};
    case SET_USER_PROFILES:
      return { ...state, userProfiles: action.payload };
    case ADD_USER_PROFILE:
        return { ...state, userProfiles: [...state.userProfiles, action.payload] };
    case UPDATE_USER_PROFILE_SUBMIT:
          return { ...state, error:null, updatedUserProfile:null};
    case UPDATE_USER_PROFILE_SUCCESS:
          return { ...state, 
            updatedUserProfile: action.payload,
            userProfiles: state.userProfiles.map(x => x.id === action.payload.id ? action.payload : x) };
    case UPDATE_USER_PROFILE_FAILED:
            return { ...state, error: action.payload };
    case DELETE_USER_PROFILE:
        return { ...state, userProfiles: state.userProfiles.filter(x => x.id !== action.payload.id) };
    default:
      return state;
  }
}

export default userProfileReducer;