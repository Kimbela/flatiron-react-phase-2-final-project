# flatiron-react-phase-2-final-project

# Movie Directory - React Single Page Application

This project is a single-page application built using React that allows users to view a list of movies and add new movies to the list. The data is stored and retrieved from a `json-server` backend.

## Features

- View a list of movies with details such as title, description, and poster.
- Add a new movie with a title and description through a controlled form.
- Navigation bar for easy routing and access to external movie-related websites, IMDb and Rotten Tomatoes.

## Project Structure

- **App.js**: Root component that wraps the application with React Router and defines the main routes.
- **MoviesList.js**: Displays a list of movies retrieved from the backend.
- **AddMovie.js**: Contains a form to add a new movie to the list.
- **NavBar.js**: Navigation component that includes links to Home, Add Movie, IMDb, and Rotten Tomatoes.
- **style.css**: Contains the styling for the application.
- **db.json**: Contains the initial data for the `json-server` backend.

## Installation and Running

1. Clone this repository.
2. Install the necessary npm packages using `npm install`.
3. Start the `json-server` using `json-server --watch db.json --port 3000`.
4. Run the React app in development mode using `npm start`.
5. Open [http://localhost:3001](http://localhost:3001) to view the app in the browser.

## External Links

The navigation bar includes links to:
- [IMDb](https://www.imdb.com/)
- [Rotten Tomatoes](https://www.rottentomatoes.com/)

## Future Enhancements

- Integrate with an actual backend for more persistent data storage.
- Add features to edit and delete movies from the list.
- Implement search and filter functionalities to easily navigate through the movie list.