import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set_rated_movie } from '../../../../redux/actions/movie_actions/actions';
import Close from '../../../images/Close.svg';
import { ReactComponent as Star } from '../../../images/Star.svg';
import './RatingPopUp.css';

const RatingPopUp = () => {
  const movie = useSelector((state) => state.movie_state.rated_movie);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const saveRating = () => {
    const data = localStorage.getItem('rated_movies');
    const rated_movies = JSON.parse(data) || [];
    const index = rated_movies.findIndex((item) => item.id === movie.id);

    if (index !== -1) {
      rated_movies[index] = { ...movie, local_rating: rating };
    } else {
      rated_movies.push({ ...movie, local_rating: rating });
    }

    localStorage.setItem('rated_movies', JSON.stringify(rated_movies));
    dispatch(set_rated_movie(null));
  };

  const removeRating = () => {
    const data = localStorage.getItem('rated_movies');
    const rated_movies = JSON.parse(data) || [];
    const new_rated_movies = JSON.stringify(rated_movies.filter((item) => item.id !== movie.id));
    localStorage.setItem('rated_movies', new_rated_movies);
    dispatch(set_rated_movie(null));
  };

  useEffect(() => {
    const data = localStorage.getItem('rated_movies');
    const rated_movies = JSON.parse(data) || [];
    const rated_movie = rated_movies.find((el) => el.id === movie.id);
    setRating(rated_movie?.local_rating || 0);
  }, []);

  const isMarked = (index) => rating >= index + 1;

  return (
    <div className="rating_pop_up_wrapper">
      <div className="rating_pop_up">
        <div>
          <p>Your Rating</p> <img src={Close} onClick={() => dispatch(set_rated_movie(null))} />
        </div>
        <div>
          <p>{movie.original_title}</p>
          <span>
            {Array.from({ length: 10 }, (_, index) => (
              <Star
                key={index}
                className={isMarked(index) ? 'marked_star' : 'unmarked_star'}
                onClick={() => setRating(index + 1)}
              />
            ))}
          </span>
          <div>
            <p onClick={saveRating}>Save</p>
            <p onClick={removeRating}>Remove rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingPopUp;
