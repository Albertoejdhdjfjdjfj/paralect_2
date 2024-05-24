import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocalStoragePagination } from '../../assets/functions/hooks/hooks';
import SearchInput from './SearchInput/SearchInput';
import MoviesList from '../../assets/components/MoviesList/MoviesList';
import Paginator from '../../assets/components/Paginator/Paginator';
import './RatedMovies.css';

const RatedMovies = () => {
  const filter = useSelector((state) => state.filter_state);
  const [pageData, setPageData] = useLocalStoragePagination();

  useEffect(() => {
    setPageData(filter.search, filter.page);
  }, [filter]);

  return (
    <div className="rated_movies">
      <span>
        <h2>Rated movies</h2>
        <SearchInput />
      </span>
      <MoviesList data={pageData} />
      <Paginator length={500} />
    </div>
  );
};

export default RatedMovies;
