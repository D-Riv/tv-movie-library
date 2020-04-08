import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Form extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Link>
          <button>Return to Movies</button>
        </Link>
        <Link>
          <button>Return to Shows</button>
        </Link>
      </div>
    );
  }
}

export default Form;
