import React from 'react';
import Close from '../../../images/Close.svg'
import './RatingPopUp.css';

const RatingPopUp = () => {
  return (
    <div className="rating_pop_up_wrapper">
      <div className="rating_pop_up">
          <div><p>Your Rating</p> <img src={Close}></div>
          <p></p>
          <span>
               
          </span>
      </div>
    </div>
  );
};

export default RatingPopUp;
