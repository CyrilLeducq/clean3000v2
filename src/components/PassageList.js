import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../stylesheet/PassageList.scss';
import { format } from 'date-fns';

function PassageList() {
    const passages = useSelector(state => state.passages.passages);

    return (
        <div className="passage-list-page">
            <Header />
            <div className="container">
                <div className="liste">
                    <h2>Liste des avis de passage</h2>
                    <ul>
                        {passages.map(passage => (
                            <li key={passage.id}>
                                <Link to={`/passage/${passage.id}`}>
                                    <div className="name">Client: {passage.client}</div>
                                    <div className="details">Observations: {passage.observations}</div>
                                    <div className="date"> Date: {format(new Date(passage.date), 'dd-MM-yyyy')}</div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PassageList;