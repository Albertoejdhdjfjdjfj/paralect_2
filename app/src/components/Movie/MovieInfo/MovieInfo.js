import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { image_host } from '../../../assets/functions/apiFunctions/confing';
import { set_rated_movie } from '../../../redux/actions/movie_actions/actions';
import { ReactComponent as Star } from '../../../assets/images/Star.svg';
import NoPoster from '../../../assets/images/NoPoster.svg';
import './MovieInfo.css';

const MovieInfo = ({ data }) => {
  const [rated_movies, setRatedMovies] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function isRated(id) {
    return rated_movies.some((movie) => movie.id === id);
  }

  function getRating(id) {
    const data = localStorage.getItem('rated_movies');
    const rated_movies = JSON.parse(data) || [];
    const rated_movie = rated_movies.find((el) => el.id === id);
    return String(rated_movie?.local_rating || '');
  }

  function parseVote(num) {
    const strNum = String(num);
    if (strNum.length >= 4 && strNum.length < 7) {
      return String(Math.round(num / 1000)) + 'K';
    } else if (strNum.length >= 7) {
      return String(Math.round(num / 100000) / 10) + 'M';
    }

    return String(num);
  }

  function parseBudget(budget) {
    return '$' + budget.toLocaleString('en-US');
  }

  function parseDate(date) {
    const new_date = new Date(date);
    const format = { year: 'numeric', month: 'long', day: 'numeric' };
    return new_date.toLocaleDateString('en-US', format);
  }

  function parseTime(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const formatHours = String(hours);
    const formatMinutes = String(minutes).padStart(2, '0');
    return `${formatHours}h ${formatMinutes}m`;
  }

  useEffect(() => {
    const array = JSON.parse(localStorage.getItem('rated_movies')) || [];
    setRatedMovies(array);
  }, []);

  return (
    <div className="movie_info">
      <img
        src={data.poster_path ? image_host + data.poster_path : NoPoster}
        onClick={() => navigate('/' + data.id)}
      />
      <div>
        <span>
          <p>
            {data.original_title}
            <span>
              <Star
                className={isRated(data.id) ? 'rated_star' : 'rating_star'}
                onClick={() => dispatch(set_rated_movie(data))}
              />

              {getRating(data.id)}
            </span>
          </p>
          <span>{String(data.release_date).slice(0, 4)}</span>
          <div>
            <Star className="yellow_star" />
            <p>{String(data.vote_average).slice(0, 3)}</p>
            <span>({parseVote(data.vote_count)})</span>
          </div>
        </span>
        <div>
          <div>
            Duration
            <p>{parseTime(data.runtime)}</p>
          </div>
          <div>
            Premiere
            <p>{parseDate(data.release_date)}</p>
          </div>
          <div>
            Budget
            <p>{parseBudget(data.budget)}</p>
          </div>
          <div>
            Gross worldwide
            <p>{parseBudget(data.revenue)}</p>
          </div>
          <div>
            Genres
            <p>{data.genres.map((genre) => genre.name).join(', ')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
