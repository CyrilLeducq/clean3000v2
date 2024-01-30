import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addClient } from '../features/clients/clientsSlice';
import Header from './Header';
import '../stylesheet/ClientCreationForm.scss';

function ClientCreationForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const clients = useSelector(state => state.clients.clientsList);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setMessage('Veuillez entrer un nom.');
      return;
    }

    // On vérifie si le client existe déjà ou pas!
    const isClientExist = clients.some(client => client.name.toLowerCase() === name.toLowerCase());
    if (isClientExist) {
      setMessage('Ce client existe déjà.');
      return;
    }

    // Si le client n'existe pas, on l'ajoute au store client
    dispatch(addClient({ id: Date.now(), name })); 
    // afin d'avoir un id unique lors de al création j'utilise Date.now 
    setMessage('Client ajouté avec succès.');
    setName('');
  };

  return (
    <div className="add-client-page">
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit}>
        <h2>Formulaire nouveau client</h2>
          <label htmlFor="clientName">Nom entreprise / ou client :</label>
          <input
            id="clientName"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="SARL Sévitrifiant / ou Jean Neymar"
          />
          <button type="submit">Ajouter</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default ClientCreationForm;
