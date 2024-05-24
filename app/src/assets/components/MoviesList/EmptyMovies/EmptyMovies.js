import React from 'react';
import EmptyMoviesPhoto from '../../../images/EmptyMovies.svg';
import './EmptyMovies.css';

const EmptyMovies = () => {
  return (
    <div className="empty_movies">
      <img src={EmptyMoviesPhoto} />
      <p>We don't have such movies, look for another one</p>
    </div>
  );
};

export default EmptyMovies;
