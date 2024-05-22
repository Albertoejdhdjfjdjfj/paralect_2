import {
  SELECT_GENRE,
  SELECT_REALEASE_YEAR,
  SELECT_RATING_FROM,
  SELECT_RATING_TO,
  RESET_FILTERS,
  SELECT_SORT_BY,
  SELECT_PAGE
} from '../../actions/filter_actions/actionsTypes';

const initialState = {
  genres: '',
  year: '',
  rating_from: '',
  rating_to: '',
  sort_by: '',
  page: 1
};

export default function filter_state(state = initialState, action) {
  switch (action.type) {
    case SELECT_GENRE:
      return { ...state, genres: action.payload };
    case SELECT_REALEASE_YEAR:
      return { ...state, year: action.payload };
    case SELECT_RATING_FROM:
      return { ...state, rating_from: action.payload };
    case SELECT_RATING_TO:
      return { ...state, rating_to: action.payload };
    case SELECT_SORT_BY:
      return { ...state, sort_by: action.payload };
    case SELECT_PAGE:
      return { ...state, page: action.payload };
    case RESET_FILTERS:
      return initialState;
    default:
      return state;
  }
}
