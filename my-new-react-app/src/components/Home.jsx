// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = ({ movies }) => {
  return (
    <div>
      <h1>Movie App</h1>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <div className="movie-card">
            <h2>{movie.title}</h2>
            {/* Display other movie information */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
