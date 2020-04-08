import React from "react";
import { Card, Modal, Button } from "react-bootstrap";

class LibraryData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      libraryData: [],
    };
  }
  componentDidMount() {
    this.addMovie();
  }

  addMovie = () => {
    this.setState({ libraryData: this.props.data });
    // this.state.libraryData.push(this.props.data);
    console.log(this.state.libraryData);
  };

  render() {
    let movieList = this.state.libraryData.map((item) => {
      return (
        <div className="movieList" key={item.id}>
          <Card style={{ width: "15rem", border: "none" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body className="cardfooter">
              <Card.Title></Card.Title>
              {/* <MovieModal
                description={item.description}
                title={item.name}
                rating={item.rating}
                releaseDate={item.releaseDate}
                library={myList}
              /> */}
            </Card.Body>
          </Card>
        </div>
      );
    });
    return <div>{movieList}</div>;
  }
}

export default LibraryData;
