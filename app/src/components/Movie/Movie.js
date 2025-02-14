import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovie } from '../../assets/functions/apiFunctions/requestsFunctions';
import MovieInfo from './MovieInfo/MovieInfo';
import MoreMovieInfo from './MoreMovieInfo/MoreMovieInfo';
import Loader from '../../assets/components/Loader/Loader'
import './Movie.css';

const Movie = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  async function getData(id) {
    const res = await getMovie(id);
    if (res.status >= 400) {
      navigate('/not_found');
    }
    setData(await res.json());
  }

  useEffect(() => {
    getData(id);
  }, []);

  return (
    <div className="movie_page">
      {!data&&<Loader/>}
      {data && (
        <nav>
          <a onClick={() => navigate('/')}>Movies</a>/<a>{data.original_title}</a>
        </nav>
      )}
      {data && <MovieInfo data={data} />}
      {data && data?.videos?.results[0] && <MoreMovieInfo data={data} />}
    </div>
  );
};

export default Movie;
