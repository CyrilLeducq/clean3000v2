import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo-clean3000-transparent.png';
import '../stylesheet/start-page.scss';

function StartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="start-page">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default StartPage;
