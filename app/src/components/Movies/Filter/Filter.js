import React from 'react';
import { useDispatch } from 'react-redux';
import { reset_filters } from '../../../redux/actions/filter_actions/actions';
import GenreSelect from './Selects/GenreSelect/GenreSelect';
import YearSelect from './Selects/YearSelect/YearSelect';
import SortBy from './Selects/SortBy/SortBy';
import RatingFrom from './Inputs/RatingFrom/RatingFrom';
import RatingTo from './Inputs/RatingTo/RatingTo';
import './Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className="filter">
      <GenreSelect />
      <YearSelect />
      <span>
        <RatingFrom />
        <RatingTo />
        <SortBy />
        <p onClick={() => dispatch(reset_filters())}>Reset filters</p>
      </span>
    </div>
  );
};

export default Filter;
