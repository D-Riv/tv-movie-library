import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1 className="navbar-title">Chillflix</h1>
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
