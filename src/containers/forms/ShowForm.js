import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./forms.css";

const url = "https://tv-movie-api.herokuapp.com/tv";

class ShowForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      rating: "",
      releaseDate: "",
      image: "",
      display: false,
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
        title: this.state.name,
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
    this.setState({
      name: "",
      description: "",
      rating: "",
      releaseDate: "",
      image: "",
    });
    if (this.state.display == false) {
      this.setState({ value: "Your show has been added!" });
    }
  };

  render() {
    const { name, description, rating, releaseDate, image } = this.state;
    return (
      <div className="form-container">
        <Navbar />
        <form className="show-form" onSubmit={this.submitHandler}>
          <h1 className="form-header">Submit Show</h1>

          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Show Title"
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Show Description"
              type="text"
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Show Rating"
              type="text"
              name="rating"
              value={rating}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Show Release Date"
              type="text"
              name="releaseDate"
              value={releaseDate}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-inputs">
            <input
              className="form-input-field"
              placeholder="Show Image URL"
              type="text"
              name="image"
              value={image}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-greet">
            <h2>{this.state.value}</h2>
          </div>
          <button className="form-submit" type="submit">
            Submit
          </button>
        </form>
        <div className="form-returns">
          <Link to="/movies">
            <button className="form-submit">Return to Movies</button>
          </Link>
          <Link to="/shows">
            <button className="form-submit">Return to Shows</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShowForm;
