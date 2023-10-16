import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddMovie({ addMovieToList }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [poster, setPoster] = useState(''); // Add poster state
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError("Title and description cannot be empty.");
      return;
    }

    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, poster }), // Include poster in the request
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTitle('');
        setDescription('');
        setPoster('');
        addMovieToList(data);
        navigate('/');
      })
      .catch((err) => setError(err.message));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input value={poster} onChange={(e) => setPoster(e.target.value)} placeholder="Poster URL" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
