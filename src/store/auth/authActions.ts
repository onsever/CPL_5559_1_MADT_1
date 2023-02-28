import {supabase} from '../../utilities/Supabase';
import {addUserProfile} from '../userProfile/userProfileActions';

export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT = 'LOGOUT';

export const SIGN_UP_SUBMIT = 'SIGN_UP_SUBMIT';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

export const loginUser = (email, password) => async dispatch => {
  try {
    dispatch({
      type: LOGIN_SUBMIT,
    });
    const {error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: '',
      });
    } else {
      dispatch({
        type: LOGIN_FAILED,
        payload: error.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => async dispatch => {
  const {error} = await supabase.auth.signOut();
};

export const signUp =
  (email, password, firstName, lastName) => async dispatch => {
    try {
      dispatch({
        type: SIGN_UP_SUBMIT,
      });
      const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (!error) {
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: '',
        });
        [];
        dispatch(
          addUserProfile({
            id: data.session?.user?.id,
            first_name: firstName,
            last_name: lastName,
          }),
        );
        dispatch(loginUser(email, password));
      } else {
        dispatch({
          type: SIGN_UP_FAILED,
          payload: error.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
 