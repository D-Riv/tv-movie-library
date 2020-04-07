import React from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "./movieDisplay.css";
import MovieModal from "../movie-modal/MovieModal";

const movieUrl = "https://tv-movie-api.herokuapp.com/movie";

class MovieDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [],
      libraryData: [],
    };
  }

  componentDidMount() {
    fetch(movieUrl)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((movieData) => {
        console.log(movieData);
        this.setState({ movieData: movieData });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    let movieList = this.state.movieData.map((item) => {
      const myList = () => {
        this.state.movieData.forEach((movie) => {
          // console.log(movie._id);
          // console.log(item.name);
          if (movie.name == item.name) {
            this.state.libraryData.push(movie);
          }
        });
        console.log(this.state.libraryData);
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
                library={myList}
              />
            </Card.Body>
          </Card>
        </div>
      );
    });
    return <div className="movieContainer">{movieList}</div>;
  }
}

export default MovieDisplay;