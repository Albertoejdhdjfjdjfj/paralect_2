import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { set_rated_movie } from '../../../redux/actions/movie_actions/actions';
import { image_host } from '../../functions/apiFunctions/confing';
import { getGenres } from '../../functions/apiFunctions/requestsFunctions';
import RatingPopUp from './RatingPopUp/RatingPopUp';
import { ReactComponent as Star } from '../../../assets/images/Star.svg';
import './MoviesList.css';
const MoviesList = ({ data }) => {
  const rated_movie = useSelector((state) => state.movie_state.rated_movie);
  const [genres, setGenres] = useState(false);
  const dispatch = useDispatch();

  function getGenresByIds(genreIds) {
    const list = genres.genres.map((genre) => {
      return genre ? genre.name : '';
    });

    return list.slice(0, 3);
  }

  function parseVote(num) {
    if (num.toString().length >= 4 && num.toString().length <= 7) {
    }
  }

  async function getGenresData() {
    const res = await getGenres();
    setGenres(res);
  }

  useEffect(() => {
    getGenresData();
  }, []);

  return (
    <div className="movies_list">
      {rated_movie && <RatingPopUp />}
      {data &&
        data.results.map((film) => (
          <div key={film.id} className="film">
            <img src={image_host + film.poster_path} />
            <div>
              <span>
                <p>{film.original_title}</p>
                <span>{String(film.release_date).slice(0, 4)}</span>
                <div>
                  <Star className="yellow_star" />
                  <p>{String(film.vote_average).slice(0, 3)}</p>
                  <span>({film.vote_count})</span>
                </div>
                <div>
                  <p>Genres</p>
                  {genres && getGenresByIds(film.genre_ids).join(', ')}
                </div>
              </span>
            </div>
            <div>
              <Star className="rated_star" onClick={() => dispatch(set_rated_movie(film))} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default MoviesList;
