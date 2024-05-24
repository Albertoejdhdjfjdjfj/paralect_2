import React from 'react';
import { useNavigate } from 'react-router';
import EmptyRatedMoviesPhoto from '../../images/EmptyRatedMoviesPhoto.svg';
import './EmptyRatedMovies.css';

const EmptyRatedMovies = () => {
  const navigate = useNavigate();
  return (
    <div className="empty_rated_movies">
      <img src={EmptyRatedMoviesPhoto} />
      <p>You haven't rated any films yet</p>
      <p onClick={() => navigate('/')}>Find movies</p>
    </div>
  );
};

export default EmptyRatedMovies;
