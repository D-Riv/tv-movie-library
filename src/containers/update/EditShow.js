import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../shows/show-modal/show-modal.css";

const url = "https://tv-movie-api.herokuapp.com/tv";

const UpdateShow = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, description, rating, releaseDate, image] = useState("");

  const changeHandler = (e) => {
    const { value } = e.target.name;
    // const(e.target.value);
  };

  const saveUpdate = (e) => {
    e.preventDefault();
    // console.log(this.state);
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        title: { name },
        description: { description },
        rating: { rating },
        releaseDate: { releaseDate },
        image: { image },
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

  // const { name, description, rating, releaseDate, image } = this.state;

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        <i
          class="fas fa-edit"
          // onClick={props.edit}
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: "#ffffff",
          }}
        ></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered className="modal">
        <Modal.Header
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Modal.Title className="modalhead">
            <input
              className="form-input-field"
              placeholder="Show Title"
              type="text"
              name="name"
              value={name}
              onChange={changeHandler}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          <input
            className="form-input-field"
            placeholder="Show Description"
            type="text"
            name="description"
            value={description}
            onChange={changeHandler}
          />{" "}
          <br /> <br />
          Rating:{" "}
          <input
            className="form-input-field"
            placeholder="Show Rating"
            type="text"
            name="rating"
            value={rating}
            onChange={changeHandler}
          />{" "}
          <br /> <br />
          Release Date:{" "}
          <input
            className="form-input-field"
            placeholder="Show Release Date"
            type="text"
            name="releaseDate"
            value={releaseDate}
            onChange={changeHandler}
          />
          Image URL:{" "}
          <input
            className="form-input-field"
            placeholder="Show Image URL"
            type="text"
            name="image"
            value={image}
            onChange={changeHandler}
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={saveUpdate}>
            <i
              class="far fa-save"
              // onClick={props.edit}
              style={{
                fontSize: "20px",
                cursor: "pointer",
                color: "#ffffff",
              }}
            ></i>
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateShow;
