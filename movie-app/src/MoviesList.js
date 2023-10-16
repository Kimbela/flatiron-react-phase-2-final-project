import React from 'react';
import './style.css';

function MoviesList({movies}) {
  

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



