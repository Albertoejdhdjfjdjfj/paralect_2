import React from 'react';
import Header from './components/Header/Navbar';
import Movies from './components/Movies/Movies';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* {//navbar} */}
      <Header />
      <Movies />
    </div>
  );
}

export default App;
