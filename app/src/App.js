import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import Movie from './components/Movie/Movie';
import RatedMovies from './components/RatedMovies/RatedMovies';
import './App.css';

function App() {
  return (
    <div className="App">
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
