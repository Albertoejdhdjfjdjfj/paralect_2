import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDisplay } from '../../../../../assets/functions/hooks/hooks';
import { select_realease_year } from '../../../../../redux/actions/filter_actions/actions';
import { ReactComponent as SelectArrow } from '../../../../../assets/images/SelectArrow.svg';
import './YearSelect.css';

const YearSelect = () => {
  const release_year = useSelector((state) => state.filter_state.year);
  const [display, changeDisplay] = useDisplay();
  const dispatch = useDispatch();

  function isSelected(year) {
    return year === release_year;
  }

  function handleSelect(year) {
    if (isSelected(year)) {
      dispatch(select_realease_year(''));
    } else {
      dispatch(select_realease_year(year));
    }
  }

  return (
    <div className="year_select">
      <p>Release year</p>
      <div className={display ? 'select_active' : ''}>
        {release_year === '' ? (
          <p>Select release year</p>
        ) : (
          <p className="selected_release_year">{release_year}</p>
        )}
        <SelectArrow className="select_arrow" onClick={changeDisplay} />
      </div>
      {display && (
        <span>
          <div>
            {Array.from(
              { length: new Date().getFullYear() + 1 - 1950 },
              (_, index) => new Date().getFullYear() - index
            ).map((year) => (
              <p
                className={isSelected(year) ? 'selected_year' : ''}
                onClick={() => handleSelect(year)}
                key={year}
              >
                {year}
              </p>
            ))}
          </div>
        </span>
      )}
    </div>
  );
};

export default YearSelect;
