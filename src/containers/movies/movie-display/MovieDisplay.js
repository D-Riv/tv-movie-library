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
    const myList = () => {
      this.state.libraryData.push(this.state.movieData);
    };
    console.log(myList);
    let movieList = this.state.movieData.map((item) => {
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
