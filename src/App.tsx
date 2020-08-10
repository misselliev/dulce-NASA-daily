import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Components/Navbar';

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes />
  </Router>
);

export default App;
