import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set_search } from '../../../redux/actions/filter_actions/actions';
import Glass from '../../../assets/images/Glass.svg';
import './SearchInput.css';

const SearchInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="search_input">
      <div>
        <img src={Glass} />
        <input
          type="text"
          placeholder="Search movie title"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <p onClick={() => dispatch(set_search(text))}>Search</p>
    </div>
  );
};

export default SearchInput;
