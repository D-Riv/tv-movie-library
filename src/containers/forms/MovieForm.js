import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./forms.css";

const url = "https://tv-movie-api.herokuapp.com/movie";

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
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(this.state);
    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
        rating: this.state.rating,
        releaseDate: this.state.releaseDate,
        image: this.state.image,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { name, description, rating, releaseDate, image } = this.state;
    return (
      <div className="form-container">
        <Navbar />
        <form className="movie-form" onSubmit={this.submitHandler}>
          <h1>Submit Movie</h1>

          <div className="form-inputs">
            {/* <h1 className="form-header">Movie Title: </h1> */}
            <input
              placeholder="Movie Title"
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            {/* <h1 className="form-header">Movie Description:</h1> */}
            <input
              placeholder="Movie Description"
              type="text"
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            {/* <h1 className="form-header">Movie Rating:</h1> */}
            <input
              placeholder="Movie Rating"
              type="text"
              name="rating"
              value={rating}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            {/* <h1 className="form-header">Movie Release Date:</h1> */}
            <input
              placeholder="Movie Release Date"
              type="text"
              name="releaseDate"
              value={releaseDate}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            {/* <h1 className="form-header">Movie Image URL:</h1> */}
            <input
              placeholder="Movie Image URL"
              type="text"
              name="image"
              value={image}
              onChange={this.changeHandler}
            />
          </div>
          <button className="form-submit" type="submit">
            Submit
          </button>
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
