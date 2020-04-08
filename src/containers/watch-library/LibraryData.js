import React from "react";
import { Card, Modal, Button } from "react-bootstrap";

class LibraryData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      libraryData: this.props.data,
    };
  }
  // componentDidMount() {
  //   // this.addMovie();
  //   this.setState({ libraryData: this.props.data });
  // }
  addMovie = (e) => {
    e.preventDefault();
    this.setState({ libraryData: this.props.data });

    console.log(this.state.libraryData);
  };

  render() {
    // let movieList = this.state.libraryData.map((item) => {
    //   return (
    //     <div className="movieList" key={item.id}>
    //       <Card style={{ width: "15rem", border: "none" }}>
    //         <Card.Img variant="top" src={item.image} />
    //         <Card.Body className="cardfooter">
    //           <Card.Title></Card.Title>
    //           {/* <MovieModal
    //             description={item.description}
    //             title={item.name}
    //             rating={item.rating}
    //             releaseDate={item.releaseDate}
    //             library={myList}
    //           /> */}
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   );
    // });
    return (
      <div>
        {this.state.libraryData}
        <button onClick={this.addMovie}></button>
      </div>
    );
  }
}

export default LibraryData;
