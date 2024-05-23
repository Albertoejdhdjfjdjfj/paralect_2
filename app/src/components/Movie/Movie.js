import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { image_host } from '../../assets/functions/apiFunctions/confing';
import { getMovie, getGenres } from '../../assets/functions/apiFunctions/requestsFunctions';
import { set_rated_movie } from '../../redux/actions/movie_actions/actions';
import { ReactComponent as Star } from '../../assets/images/Star.svg';
import NoPoster from '../../assets/images/NoPoster.svg';
import MovieInfo from './MovieInfo/MovieInfo';
import './Movie.css';

const Movie = () => {
  const [rated_movies, setRatedMovies] = useState([]);
  const [data, setData] = useState(null);
  const { id } = useParams();
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

  async function getData(id) {
    const data = await getMovie(id);
    setData(data);
  }

  useEffect(() => {
    const array = JSON.parse(localStorage.getItem('rated_movies')) || [];
    setRatedMovies(array);
    getData(id);
  }, []);

  return (
    <div className="movie_page">
      <h2>
        <a>Movies</a>/<a>{data && data.original_title}</a>
      </h2>
      {data&&<MovieInfo data={data}/> }
    </div>
  );
};

export default Movie;
