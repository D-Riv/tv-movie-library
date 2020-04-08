import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../shows/show-modal/show-modal.css";

const UpdateShow = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, description, rating, releaseDate, image] = useState("");

  const changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
              onChange={this.changeHandler}
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
            onChange={this.changeHandler}
          />{" "}
          <br /> <br />
          Rating:{" "}
          <input
            className="form-input-field"
            placeholder="Show Rating"
            type="text"
            name="rating"
            value={rating}
            onChange={this.changeHandler}
          />{" "}
          <br /> <br />
          Release Date:{" "}
          <input
            className="form-input-field"
            placeholder="Show Release Date"
            type="text"
            name="releaseDate"
            value={releaseDate}
            onChange={this.changeHandler}
          />
          Image URL:{" "}
          <input
            className="form-input-field"
            placeholder="Show Image URL"
            type="text"
            name="image"
            value={image}
            onChange={this.changeHandler}
          />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={props.edit}>
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
