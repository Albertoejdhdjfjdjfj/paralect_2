import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>
        <img src={Logo} />
        ArrowFlicks
      </h1>
      <nav>
        <p>Movies</p>
        <p>Rated movies</p>
      </nav>
    </div>
  );
};

export default Navbar;
