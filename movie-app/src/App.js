import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from './MoviesList';
import AddMovie from './AddMovie';
import NavBar from './NavBar';
import './style.css';

function App() {
  // const [movies, setMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => setMovies(data))
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error.message);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
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

