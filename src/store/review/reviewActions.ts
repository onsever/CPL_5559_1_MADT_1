import { supabase } from "../../utilities/Supabase";

export const GET_MOVIE_REVIEWS = 'GET_MOVIE_REVIEWS';
export const SET_MOVIE_REVIEWS = 'SET_MOVIE_REVIEWS';
export const ADD_MOVIE_REVIEW = 'ADD_MOVIE_REVIEW';
export const TABLE_NAME = 'reviews';

export const getMovieReviews = (id) => async dispatch => {
    try {
        let { data: reviews, error } = await supabase
        .from(TABLE_NAME)
        .select(`review, profiles (first_name, last_name, image) `)
        .order('creation_date', {ascending:true})
        .eq('movie_id', id);

        if(error) throw error;
        dispatch({ type: SET_MOVIE_REVIEWS, payload: reviews });
    } catch (error) {
        console.log(error);
    }
}

export const setMovieReviews = reviews => dispatch => {
    dispatch({
        type: SET_MOVIE_REVIEWS,
        payload: reviews,
    });
};

export const addMovieReview = review => async dispatch => {
    try {
        let { data, error } = await supabase
        .from(TABLE_NAME)
        .insert({review:review.review, movie_id:review.movie_id, user_id: review.user_id});
        if(error) throw error;
        dispatch({
            type: ADD_MOVIE_REVIEW,
            payload: review,
        });
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}

