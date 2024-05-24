import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset_filters } from '../../../redux/actions/filter_actions/actions';
import GenreSelect from './Selects/GenreSelect/GenreSelect';
import YearSelect from './Selects/YearSelect/YearSelect';
import SortBy from './Selects/SortBy/SortBy';
import RatingFrom from './Inputs/RatingFrom/RatingFrom';
import RatingTo from './Inputs/RatingTo/RatingTo';
import './Filter.css';

const Filter = () => {
  const filter = useSelector((state) => state.filter_state);
  const dispatch = useDispatch();

  function isDisabled() {
    if (
      filter.genres == '' &&
      filter.year == '' &&
      filter.rating_from == '' &&
      filter.rating_to == '' &&
      filter.sort_by == '' &&
      filter.page == 1
    ) {
      return false;
    }

    return true;
  }

  return (
    <div className="filter">
      <GenreSelect />
      <YearSelect />
      <span>
        <RatingFrom />
        <RatingTo />
        <SortBy />
        <p
          className={isDisabled() ? 'disabled_filter' : ''}
          onClick={() => dispatch(reset_filters())}
        >
          Reset filters
        </p>
      </span>
    </div>
  );
};

export default Filter;
