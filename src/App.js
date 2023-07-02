import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ContactPage from './pages/ContactPage';
import JournalPage from './pages/JournalPage';
import HomePage from './pages/HomePage';
import DonatePage from './pages/DonatePage';
import ConnectionsPage from './pages/ConnectionsPage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='journal' element={<JournalPage />} />
        <Route path='connections' element={<ConnectionsPage />} />
        <Route path='donate' element={<DonatePage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
