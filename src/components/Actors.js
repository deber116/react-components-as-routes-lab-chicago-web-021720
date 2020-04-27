import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const allActors = actors.map(actor => {
    const allMovies = actor.movies.map(movie => {
      return(
        <li>{movie}</li>
      )
    })

    return(
      <div>
        <h3>{actor.name}</h3>
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
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
