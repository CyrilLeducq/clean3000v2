import Header from './Header';
import '../stylesheet/home-page.scss';
import React from 'react';
import '../stylesheet/header.scss';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="container">
      <div className="button-container">
          <Link to="/ajout-client" className="client-button">
            Ajouter un client
          </Link>
          <Link to="/creer-passage" className="passage-button">
            Créer un avis de passage
          </Link>
          <Link to="/liste-passages" className="passage-list-button">
            Voir la liste des passages
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;