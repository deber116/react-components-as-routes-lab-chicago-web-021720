import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const allMovies = movies.map(movie => {
    const genres = movie.genres.map(genre => {
      return(
        <li>{genre}</li>
      )
    })
    return(
      <div>
        <h4>Name: {movie.title}</h4>
        <p>Time: {movie.time}</p>
        <p>Genres: 
          <ul>
            {genres}
          </ul>
        </p>
      </div>
    )
  })

  return (
    <div>
        <h1>Movies Page</h1>
        {allMovies}
    </div>
  );
};

export default Movies;
