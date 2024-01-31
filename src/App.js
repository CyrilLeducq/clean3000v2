import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import ClientCreationForm from './components/ClientCreationForm';
import PassageForm from './components/PassageForm';
import PassageList from './components/PassageList';
import StartPage from './components/StartPage';
import PassageDetails from './components/PassageDetails';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/ajout-client" element={<ClientCreationForm />} />
        <Route path="/creer-passage" element={<PassageForm />} />
        <Route path="/liste-passages" element={<PassageList />} />
        <Route path="/liste-passages" element={<PassageList />} />
        <Route path="/passage/:id" element={<PassageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;