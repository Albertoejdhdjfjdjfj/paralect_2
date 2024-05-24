import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocalStoragePagination } from '../../assets/functions/hooks/hooks';
import { rated_movies_limit } from '../../assets/constats/constants';
import SearchInput from './SearchInput/SearchInput';
import MoviesList from '../../assets/components/MoviesList/MoviesList';
import Paginator from '../../assets/components/Paginator/Paginator';
import EmptyRatedMovies from '../../assets/components/EmptyRatedMovies/EmptyRatedMovies';
import './RatedMovies.css';

const RatedMovies = () => {
  const filter = useSelector((state) => state.filter_state);
  const data = JSON.parse(localStorage.getItem('rated_movies')) || [];
  const [pageData, setPageData] = useLocalStoragePagination();

  useEffect(() => {
    setPageData(filter.search, filter.page);
  }, [filter]);

  return (
    <div className="rated_movies">
      {data.length !== 0 && (
        <span>
          <h2>Rated movies</h2>
          <SearchInput />
        </span>
      )}
      {data.length == 0 && <EmptyRatedMovies />}
      {data.length !== 0 && <MoviesList data={pageData} />}
      {pageData && pageData.length !== 0 && (
        <Paginator length={data.length} limit={rated_movies_limit} />
      )}
    </div>
  );
};

export default RatedMovies;
