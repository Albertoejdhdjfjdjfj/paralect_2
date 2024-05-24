import React from 'react';
import { useDispatch } from 'react-redux';
import { set_search } from '../../../redux/actions/filter_actions/actions';
import Glass from '../../../assets/images/Glass.svg';
import './SearchInput.css';

const SearchInput = () => {
  const dispatch = useDispatch();

  return (
    <div className="search_input">
      <div>
        <img src={Glass} />
        <input
          type="text"
          placeholder="Search movie title"
          onChange={(e) => dispatch(set_search(e.target.value))}
        />
      </div>
      <p>Search</p>
    </div>
  );
};

export default SearchInput;
