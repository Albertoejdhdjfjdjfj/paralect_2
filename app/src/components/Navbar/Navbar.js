import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import Logo from '../../assets/images/Logo.svg';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    if (location.pathname === path) {
      return true;
    }
    return false;
  };

  return (
    <div className="navbar">
      <h1 onClick={() => navigate('/')}>
        <img src={Logo} />
        ArrowFlicks
      </h1>
      <nav>
        <p className={isActive('/') ? 'active_link' : ''} onClick={() => navigate('/')}>
          Movies
        </p>
        <p className={isActive('/rated') ? 'active_link' : ''} onClick={() => navigate('/rated')}>
          Rated movies
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
