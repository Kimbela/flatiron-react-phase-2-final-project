import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from './MoviesList';
import AddMovie from './AddMovie';
import NavBar from './NavBar';
import './style.css';  // Import your CSS file

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/add" element={<AddMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
