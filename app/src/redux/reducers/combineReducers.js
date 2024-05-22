import { combineReducers } from 'redux';
import filter_state from './filter_state/reducer';
import movie_state from './movie_state/reducer';

export default combineReducers({
  filter_state,
  movie_state
});
