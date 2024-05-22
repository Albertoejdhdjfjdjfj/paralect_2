import { SET_RATED_MOVIE } from '../../actions/movie_actions/actionsTypes';

const initialState = {
  rated_movie: null
};

export default function movie_state(state = initialState, action) {
  switch (action.type) {
    case SET_RATED_MOVIE:
      return { ...state, rated_movie: action.payload };
    default:
      return state;
  }
}
