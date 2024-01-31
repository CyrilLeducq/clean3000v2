import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import '../stylesheet/PassageDetails.scss'; 

function PassageDetails() {
  const { id } = useParams();
  const passage = useSelector(state =>
    state.passages.passages.find(passage => passage.id === id)
  );

  if (!passage) {
    return <div>Passage introuvable</div>;
  }

  return (
    <div className="passage-details-page">
      <Header />
      <div className="container">
        <h2>Détails du passage</h2>
        <div className="passage-info">
          <p>Nom du client: {passage.client}</p>
          <p>Notre technicien est passé chez vous</p>
          <p>Date: {passage.date}</p>
        </div>
      </div>
    </div>
  );
}

export default PassageDetails;