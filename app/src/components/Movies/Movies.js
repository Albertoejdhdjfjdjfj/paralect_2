import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../assets/functions/apiFunctions/requestsFunctions';
import { num_movies, movies_limit } from '../../assets/constats/constants';
import Filter from './Filter/Filter';
import MoviesList from '../../assets/components/MoviesList/MoviesList';
import Loader from '../../assets/components/Loader/Loader';
import Paginator from '../../assets/components/Paginator/Paginator';
import './Movies.css';

const Movies = () => {
  const filter = useSelector((state) => state.filter_state);
  const [data, setData] = useState(null);

  async function getData(filter) {
    const movies = await getMovies(filter);
    setData(movies);
  }

  useEffect(() => {
    getData(filter);
  }, [filter]);

  return (
    <div className="movies">
      <h2>Movies</h2>
      <Filter />
      {data ? <MoviesList data={data?.results} /> : <Loader />}
      <span>
        {data && data.results.length !== 0 && (
          <Paginator length={num_movies} limit={movies_limit} />
        )}
      </span>
    </div>
  );
};

export default Movies;
