import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../../assets/functions/apiFunctions/requestsFunctions';
import MovieInfo from './MovieInfo/MovieInfo';
import MoreMovieInfo from './MoreMovieInfo/MoreMovieInfo';
import './Movie.css';

const Movie = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  async function getData(id) {
    const data = await getMovie(id);
    setData(data);
  }

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className="movie_page">
      <nav>
        <a>Movies</a>/<a>{data && data.original_title}</a>
      </nav>
      {data && <MovieInfo data={data} />}
      {data && <MoreMovieInfo data={data} />}
    </div>
  );
};

export default Movie;
