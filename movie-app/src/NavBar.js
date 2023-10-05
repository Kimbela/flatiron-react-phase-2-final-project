import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Movie</Link></li>
                <li><a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer">IMDb</a></li>
                <li><a href="https://www.rottentomatoes.com/" target="_blank" rel="noopener noreferrer">Rotten Tomatoes</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
