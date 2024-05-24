import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_rated_movie } from '../../../redux/actions/movie_actions/actions';
import { useNavigate } from 'react-router-dom';
import { image_host } from '../../functions/apiFunctions/confing';
import { getGenres } from '../../functions/apiFunctions/requestsFunctions';
import { ReactComponent as Star } from '../../../assets/images/Star.svg';
import EmptyMovies from './EmptyMovies/EmptyMovies';
import NoPoster from '../../../assets/images/NoPoster.svg';
import './MoviesList.css';

const MoviesList = ({ data }) => {
  const rated_movie = useSelector((state) => state.movie_state.rated_movie);
  const [genres, setGenres] = useState(null);
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

  function getGenresByIds(genreIds) {
    const list = genreIds?.map((id) => {
      const genre = genres.genres.find((el) => el.id === id);
      return genre ? genre.name : '';
    });

    return list?.join(', ');
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

  async function getGenresData() {
    const res = await getGenres();
    setGenres(res);
  }

  useEffect(() => {
    const array = JSON.parse(localStorage.getItem('rated_movies')) || [];
    setRatedMovies(array);
    getGenresData();
  }, [rated_movie]);

  return (
    <div className="movies_list">
      {data.map((movie) => (
        <div key={movie.id} className="movie">
          <img
            src={movie.poster_path ? image_host + movie.poster_path : NoPoster}
            onClick={() => navigate('/movie/' + movie.id)}
          />
          <div>
            <span>
              <p>
                {movie.original_title}
                <span>
                  <Star
                    className={isRated(movie.id) ? 'rated_star' : 'rating_star'}
                    onClick={() => dispatch(set_rated_movie(movie))}
                  />

                  {getRating(movie.id)}
                </span>
              </p>
              <span>{String(movie.release_date).slice(0, 4)}</span>
              <div>
                <Star className="yellow_star" />
                <p>{String(movie.vote_average).slice(0, 3)}</p>
                <span>({parseVote(movie.vote_count)})</span>
              </div>
            </span>
            <div>
              Genres
              <p>{genres && getGenresByIds(movie.genre_ids)}</p>
            </div>
          </div>
        </div>
      ))}
      {data && data.length == 0 && <EmptyMovies />}
    </div>
  );
};

export default MoviesList;
