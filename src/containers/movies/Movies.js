import React from "react";
import Navbar from "../../components/navbar/Navbar";
import MovieDisplay from "./movie-display/MovieDisplay";

const Movies = () => {
  return (
    <div>
      <Navbar />
      <MovieDisplay />
    </div>
  );
};

export default Movies;
