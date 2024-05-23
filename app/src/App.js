import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import Movie from './components/Movie/Movie';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
