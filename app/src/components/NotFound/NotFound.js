import React from 'react';
import { useNavigate } from 'react-router';
import Logo from '../../assets/images/Logo.svg';
import NotFoundPhoto from '../../assets/images/NotFound.svg';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not_found">
      <h1 onClick={() => navigate('/')}>
        <img src={Logo} />
        ArrowFlicks
      </h1>
      <img src={NotFoundPhoto} />
      <p>We can’t find the page you are looking for</p>
      <p onClick={() => navigate('/')}>Go Home</p>
    </div>
  );
};

export default NotFound;
