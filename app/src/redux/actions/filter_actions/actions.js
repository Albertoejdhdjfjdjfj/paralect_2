import {
  SELECT_GENRE,
  SELECT_REALEASE_YEAR,
  SELECT_RATING_FROM,
  SELECT_RATING_TO,
  RESET_FILTERS,
  SELECT_SORT_BY,
  SELECT_PAGE,
  SET_SEARCH
} from './actionsTypes';

import { createAction } from 'redux-actions';

export const select_genre = createAction(SELECT_GENRE);
export const select_realease_year = createAction(SELECT_REALEASE_YEAR);
export const select_rating_from = createAction(SELECT_RATING_FROM);
export const select_rating_to = createAction(SELECT_RATING_TO);
export const reset_filters = createAction(RESET_FILTERS);
export const select_sort_by = createAction(SELECT_SORT_BY);
export const select_page = createAction(SELECT_PAGE);
export const set_search = createAction(SET_SEARCH);
