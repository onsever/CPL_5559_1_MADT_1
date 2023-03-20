import { supabase } from "../../utilities/Supabase";

export const GET_USER_PROFILES = 'GET_USER_PROFILES';
export const GET_SINGLE_USER_PROFILE = 'GET_SINGLE_USER_PROFILE';
export const SET_USER_PROFILES = 'SET_USER_PROFILES';
export const ADD_USER_PROFILE = 'ADD_USER_PROFILE';
export const UPDATE_USER_PROFILE_SUBMIT = 'UPDATE_USER_PROFILE_SUBMIT';
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS';
export const UPDATE_USER_PROFILE_FAILED = 'UPDATE_USER_PROFILE_FAILED';
export const DELETE_USER_PROFILE = 'DELETE_USER_PROFILE';
export const TABLE_NAME = 'profiles';

export const getUserProfiles = () => async dispatch => {
    try {
        let { data: profile, error } = await supabase
        .from(TABLE_NAME)
        .select('*');
        if(error) throw error;
        console.log(profile);
        dispatch({ type: SET_USER_PROFILES, payload: profile });
    } catch (error) {
        console.log(error);
    }
}



export const getSingleUserProfile = (id) => async dispatch => {
    // dispatch({ 
    //     type: GET_SINGLE_USER_PROFILE,
    //     payload: id
    // });

    try {
        let { data: profile, error } = await supabase
        .from(TABLE_NAME)
        .select('*')
        .eq("id",id)
        .single();
        if(error) throw error;
        dispatch({ type: GET_SINGLE_USER_PROFILE, payload: profile });
    } catch (error) {
        console.log(error);
    }
}

export const setUserProfiles = profiles => dispatch => {
    dispatch({
        type: SET_USER_PROFILES,
        payload: profiles,
    });
};

export const addUserProfile = userProfile => async dispatch => {
    try {
        let { data, error } = await supabase
        .from(TABLE_NAME)
        .insert([userProfile]);
        if(error) throw error;
        dispatch({
            type: ADD_USER_PROFILE,
            payload: userProfile,
        });
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}


export const updateUserProfile = userProfile => async dispatch => {
    try {
        dispatch({
            type: UPDATE_USER_PROFILE_SUBMIT,
          });
        let { data: updatedUserProfile, error } = await supabase
        .from(TABLE_NAME)
        .update(userProfile)
        .eq('id', userProfile.id);
        if (!error) {
            dispatch({
                type: UPDATE_USER_PROFILE_SUCCESS,
                payload: userProfile,
            });
        } else {
            dispatch({
                type: UPDATE_USER_PROFILE_FAILED,
                payload: error.message,
            });
      }
    } catch (error) {
        console.log(error);
    }
}
export const deleteUserProfile = userProfile => async dispatch => {
    try {
        let { data: deletedUserProfile, error } = await supabase
        .from(TABLE_NAME)
        .delete()
        .eq('id', userProfile.id);
        if(error) throw error;
        dispatch({
            type: DELETE_USER_PROFILE,
            payload: userProfile,
        });
    } catch (error) {
        console.log(error);
    }
}