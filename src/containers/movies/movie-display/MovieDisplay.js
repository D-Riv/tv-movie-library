import React from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "./movieDisplay.css";
import MovieModal from "../movie-modal/MovieModal";
import { Link } from "react-router-dom";
// import LibraryData from "../../watch-library/LibraryData";

const movieUrl = "https://tv-movie-api.herokuapp.com/movie";

class MovieDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [],
      libraryData: [],
      search: "",
      display: "none",
    };
    this.searchMovie = this.searchMovie.bind(this);
    this.showSpinner = this.showSpinner.bind(this);
  }
  showSpinner() {
    this.setState({ display: "block" });
  }
  stopSpinner() {
    this.setState({ display: "none" });
  }

  componentDidMount() {
    this.showSpinner();
    fetch(movieUrl)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((movieData) => {
        console.log(movieData);
        this.setState({ movieData: movieData });
        this.stopSpinner();
      })
      .catch((err) => {
        console.error(err);
      });
  }
  searchMovie(e) {
    this.setState({ search: e.target.value });
    if (e.target.value == "") {
      // this.setState({ movieData: [] });
      this.componentDidMount();
    } else {
      let filter = this.state.movieData.filter((movie) =>
        movie.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ movieData: filter });
    }
  }

  render() {
    let movieList = this.state.movieData.map((item) => {
      // const myList = () => {
      //   this.state.movieData.forEach((movie) => {
      //     // console.log(movie._id);
      //     // console.log(item.name);
      //     if (movie.name == item.name) {
      //       this.state.libraryData.push(movie);
      //     }
      //   });
      //   console.log(this.state.libraryData);
      // };

      const deleteMovie = () => {
        console.log(item.name);

        fetch(movieUrl + "/" + item.name, {
          method: "DELETE",
          headers: { "Content-Type": "application/json, charset=UTF-8" },
        })
          .then((res) => {
            res.json();
            // console.log(res);
          })
          .then((res) => {
            console.log(res);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      };

      return (
        <div className="movieList" key={item.id}>
          <Card style={{ width: "15rem", border: "none" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body className="cardfooter">
              <Card.Title></Card.Title>
              <MovieModal
                description={item.description}
                title={item.name}
                rating={item.rating}
                releaseDate={item.releaseDate}
                delete={deleteMovie}
                name={item.name}
              />
            </Card.Body>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <div className="crud-container">
          <input
            className="search-bar"
            placeholder="Search for a movie!"
            type="text"
            onChange={this.searchMovie}
          />
          <Link to="/movieform">
            <button className="add-movie">Add a Movie</button>
          </Link>
        </div>

        <div className="movieContainer">
          {movieList}
          <div
            className="spinner"
            style={{ display: this.state.display }}
          ></div>
          {/* <LibraryData data={this.state.libraryData} />; */}
        </div>
      </div>
    );
  }
}

export default MovieDisplay;
