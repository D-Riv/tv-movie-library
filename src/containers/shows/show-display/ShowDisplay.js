import React from "react";
import { Card, Modal, Button } from "react-bootstrap";
import "./show-display.css";
import ShowModal from "../show-modal/ShowModal";
// import LibraryData from "../../watch-library/LibraryData";

const showsUrl = "https://tv-movie-api.herokuapp.com/tv";

class MovieDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showsData: [],
      libraryData: [],
      search: "",
    };
    this.searchShows = this.searchShows.bind(this);
  }

  componentDidMount() {
    fetch(showsUrl)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((showsData) => {
        console.log(showsData);
        this.setState({ showsData: showsData });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  searchShows(e) {
    this.setState({ search: e.target.value });
    if (e.target.value == "") {
      // this.setState({ movieData: [] });
      this.componentDidMount();
    } else {
      let filter = this.state.showsData.filter((shows) =>
        shows.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ showsData: filter });
    }
  }

  render() {
    let showList = this.state.showsData.map((item) => {
      const myList = () => {
        this.state.showsData.forEach((show) => {
          // console.log(movie._id);
          // console.log(item.name);
          if (show.name == item.name) {
            this.state.libraryData.push(show);
          }
        });
        console.log(this.state.libraryData);
      };
      return (
        <div className="showList" key={item.id}>
          <Card style={{ width: "15rem", border: "none" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body className="cardfooter">
              <Card.Title></Card.Title>
              <ShowModal
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

    return (
      <div>
        <div className="crud-container">
          <input
            className="search-bar"
            placeholder="Search for a movie!"
            type="text"
            onChange={this.searchMovie}
          />
        </div>
        <div className="showsContainer">
          {showList}
          {/* <LibraryData data={this.state.libraryData} />; */}
        </div>
      </div>
    );
  }
}

export default MovieDisplay;