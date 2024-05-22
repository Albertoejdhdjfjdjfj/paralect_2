import React, { useState, useEffect } from 'react';
import { num_pages } from '../../assets/constats/constants';
import { useSelector } from 'react-redux';
import { getMovies } from '../../assets/functions/apiFunctions/requestsFunctions';
import Filter from './Filter/Filter';
import MoviesList from '../../assets/components/MoviesList/MoviesList';
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
      <MoviesList data={data} />
      <span>
        <Paginator length={num_pages} />
      </span>
    </div>
  );
};

export default Movies;
