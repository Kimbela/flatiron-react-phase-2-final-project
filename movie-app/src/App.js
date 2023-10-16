import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from './MoviesList';
import AddMovie from './AddMovie';
import NavBar from './NavBar';
import './style.css';

function App() {
  const [movies, setMovies] = useState([]);

  const addMovieToList = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<MoviesList movies={movies} />} 
          />
          <Route
            path="/add"
            element={<AddMovie addMovieToList={addMovieToList} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

