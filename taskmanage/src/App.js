import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/login" element={<Login />} />

        <Route path="/main" element={<Main />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;