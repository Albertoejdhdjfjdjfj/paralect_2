import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import Movie from './components/Movie/Movie';
import RatedMovies from './components/RatedMovies/RatedMovies';
import RatingPopUp from './assets/components/MoviesList/RatingPopUp/RatingPopUp';
import './App.css';

function App() {
  const rated_movie = useSelector((state) => state.movie_state.rated_movie);

  return (
    <div className="App">
      {rated_movie && <RatingPopUp />}
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/rated" element={<RatedMovies />} />
          <Route path="/:id" element={<Movie />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
