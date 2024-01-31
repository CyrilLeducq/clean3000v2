import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPassage } from '../features/passages/passagesSlice';
import Header from './Header';
import '../stylesheet/PassageForm.scss';
import { useNavigate } from 'react-router-dom';

function PassageForm() {
    const [client, setClient] = useState('');
    const [date, setDate] = useState('');
    const [clientSignature, setClientSignature] = useState(false);
    const [technicianSignature, setTechnicianSignature] = useState(false);
    const [observations, setObservations] = useState('');
    const [message, setMessage] = useState('');

    const clients = useSelector((state) => state.clients.clientsList);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!client || !date || !clientSignature || !technicianSignature) {
            setMessage('Veuillez remplir tous les champs et cocher les cases de signature.');
            return;
        }

        dispatch(addPassage({ client, date, clientSignature, technicianSignature, observations }));
        setMessage('L\'avis de passage a été créé avec succès.');
        setTimeout(() => {
            navigate('/accueil');
        }, 3000);
    };

    return (
        <div className="passage-form-page">
            <Header />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h2>Formulaire avis de passage</h2>
                    <label htmlFor="clientSelect">Choisir un client :</label>
                    <select id="clientSelect" value={client} onChange={(e) => setClient(e.target.value)}>
                        <option value="">Sélectionner un client</option>
                        {clients && clients.map((client) => (
                            <option key={client.id} value={client.name}>{client.name}</option>
                        ))}
                    </select>
                    <label htmlFor="dateInput">Date :</label>
                    <input type="date" id="dateInput" value={date} onChange={(e) => setDate(e.target.value)} />
                    <label htmlFor="observations">Observations :</label>
                    <textarea id="observations" value={observations} onChange={(e) => setObservations(e.target.value)} />
                    <div className="signatures">
                        <div className="signature">
                            <label htmlFor="clientSignatureCheckbox">Signature client :</label>
                            <input type="checkbox" id="clientSignatureCheckbox" checked={clientSignature} onChange={() => setClientSignature(!clientSignature)} />
                        </div>
                        <div className="signature">
                            <label htmlFor="technicianSignatureCheckbox">Signature technicien :</label>
                            <input type="checkbox" id="technicianSignatureCheckbox" checked={technicianSignature} onChange={() => setTechnicianSignature(!technicianSignature)} />
                        </div>
                    </div>

                    <button type="submit">Valider</button>
                </form>
                {message && <p className="confirmation-message">{message}</p>}
            </div>
        </div>
    );
}

export default PassageForm;
