import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.title}`}>
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
