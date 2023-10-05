import React, { useState, useEffect } from 'react';
import './style.css';

function MoviesList() {
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

  return (
    <div className="container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          {movie.poster && (
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
          )}
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-description">{movie.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;



