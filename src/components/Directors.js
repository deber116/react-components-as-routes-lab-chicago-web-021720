import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const allDirectors = directors.map(director => {
    const allMovies = director.movies.map(movie => {
      return(
        <li>{movie}</li>
      )
    })

    return(
      <div>
        <h3>{director.name}</h3>
        <p>
          <ul>
            {allMovies}
          </ul>
        </p>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors
