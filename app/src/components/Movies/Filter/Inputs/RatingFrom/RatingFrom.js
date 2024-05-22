import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDisplay } from '../../../../../assets/functions/hooks/hooks';
import { select_rating_from } from '../../../../../redux/actions/filter_actions/actions';
import InputArrow from '../../../../../assets/images/InputArrow.svg';
import './RatingFrom.css';

const RatingFrom = () => {
  const rating_from = useSelector((state) => state.filter_state.rating_from);
  const [focus, changeFocus] = useDisplay();
  const dispatch = useDispatch();
  const handleInput = (event) => {
    if (event.target.value >= 0 && event.target.value <= 10) {
      dispatch(select_rating_from(event.target.value));
    } else {
      dispatch(select_rating_from(''));
    }
  };

  function incValue() {
    if (rating_from + 1 <= 10) {
      dispatch(select_rating_from(Number(rating_from) + 1));
    }
  }

  function decValue() {
    if (rating_from - 1 >= 0) {
      dispatch(select_rating_from(Number(rating_from) - 1));
    }
  }

  return (
    <div className="input_number">
      <p>Ratings</p>
      <div className={focus ? 'input_active' : ''}>
        <input
          value={rating_from}
          onFocus={changeFocus}
          onBlur={changeFocus}
          onChange={handleInput}
          type="number"
          placeholder="From"
        />
        <div>
          <img src={InputArrow} onClick={incValue} />
          <img src={InputArrow} onClick={decValue} />
        </div>
      </div>
    </div>
  );
};

export default RatingFrom;
