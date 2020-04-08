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
          <h1 className="form-header">Submit Movie</h1>

          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Movie Title"
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Movie Description"
              type="text"
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Movie Rating"
              type="text"
              name="rating"
              value={rating}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Movie Release Date"
              type="text"
              name="releaseDate"
              value={releaseDate}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Movie Image URL"
              type="text"
              name="image"
              value={image}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-greet">
            <h2>Your movie has been added!</h2>
          </div>
          <button className="form-submit" type="submit">
            Submit
          </button>
        </form>
        <div className="form-returns">
          <Link>
            <button className="form-submit">Return to Movies</button>
          </Link>
          <Link>
            <button className="form-submit">Return to Shows</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Form;
