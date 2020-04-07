import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/movies">
          <li>Movies</li>
        </Link>
        <Link to="/shows">
          <li>Shows</li>
        </Link>
        <li>Library</li>
      </ul>
    </div>
  );
};

export default Navbar;
