import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      rating: "",
      releaseDate: "",
      image: "",
    };
  }

  render() {
    const { name, description, rating, releaseDate, image } = this.state;
    return (
      <div>
        <Navbar />
        <form>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="rating"
              value={rating}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="releaseDate"
              value={releaseDate}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="image"
              value={image}
              onChange={this.changeHandler}
            />
          </div>
        </form>
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
