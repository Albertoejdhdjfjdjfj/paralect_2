import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDisplay } from '../../../../../assets/functions/hooks/hooks';
import { select_rating_to } from '../../../../../redux/actions/filter_actions/actions';
import InputArrow from '../../../../../assets/images/InputArrow.svg';
import './RatingTo.css';

const RatingTo = () => {
  const rating_to = useSelector((state) => state.filter_state.rating_to);
  const [focus, changeFocus] = useDisplay();
  const dispatch = useDispatch();

  const handleInput = (event) => {
    if (event.target.value >= 0 && event.target.value <= 10) {
      dispatch(select_rating_to(event.target.value));
    }
  };

  function incValue() {
    if (rating_to + 1 <= 10) {
      dispatch(select_rating_to(Number(rating_to) + 1));
    }
  }

  function decValue() {
    if (rating_to - 1 >= 0) {
      dispatch(select_rating_to(Number(rating_to) - 1));
    }
  }

  return (
    <div className="input_number">
      <div className={focus ? 'input_active' : ''}>
        <input
          value={rating_to}
          onFocus={changeFocus}
          onBlur={changeFocus}
          onChange={handleInput}
          type="number"
          placeholder="To"
        />
        <div>
          <img src={InputArrow} onClick={incValue} />
          <img src={InputArrow} onClick={decValue} />
        </div>
      </div>
    </div>
  );
};

export default RatingTo;
