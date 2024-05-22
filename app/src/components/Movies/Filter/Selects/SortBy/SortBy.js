import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDisplay } from '../../../../../assets/functions/hooks/hooks';
import { select_sort_by } from '../../../../../redux/actions/filter_actions/actions';
import { ReactComponent as SelectArrow } from '../../../../../assets/images/SelectArrow.svg';
import { data } from './data/data';
import './SortBy.css';

const SortBy = () => {
  const sort_by = useSelector((state) => state.filter_state.sort_by);
  const [display, changeDisplay] = useDisplay();
  const [selectedSort, setSelectedSort] = useState('');
  const dispatch = useDispatch();

  function isSelected(option) {
    return option.value === sort_by;
  }

  function handleSelect(option) {
    if (isSelected(option)) {
      setSelectedSort('');
      dispatch(select_sort_by(''));
    } else {
      setSelectedSort(option.name);
      dispatch(select_sort_by(option.value));
    }
  }

  return (
    <div className="sort_select">
      <p>Sort by</p>
      <div className={display ? 'select_active' : ''}>
        {sort_by.length === 0 ? (
          <p>Select sort by</p>
        ) : (
          <p className="selected_sort_by">{selectedSort}</p>
        )}
        <SelectArrow className="select_arrow" onClick={changeDisplay} />
      </div>
      {display && (
        <span>
          <div>
            {data.map((option, index) => (
              <p
                className={isSelected(option) ? 'selected_option' : ''}
                key={index}
                onClick={() => handleSelect(option)}
              >
                {option.name}
              </p>
            ))}
          </div>
        </span>
      )}
    </div>
  );
};

export default SortBy;
