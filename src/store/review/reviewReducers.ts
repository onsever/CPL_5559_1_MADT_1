import { ADD_MOVIE_REVIEW, SET_MOVIE_REVIEWS  } from "./reviewActions";

const initialState = {
  reviews: []
};

function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE_REVIEWS:
      return { ...state, reviews: action.payload };
    case ADD_MOVIE_REVIEW:
        return { ...state, reviews: [...state.reviews, action.payload] };
    default:
      return state;
  }
}

export default reviewReducer;