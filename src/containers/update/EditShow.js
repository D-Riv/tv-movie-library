import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../shows/show-modal/show-modal.css";

const url = "https://tv-movie-api.herokuapp.com/tv";

const UpdateShow = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [image, setImage] = useState("");

  const saveUpdate = (e) => {
    e.preventDefault();
    // console.log(this.state);
    fetch(url + "/" + props.title, {
      method: "PUT",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        title: name,
        description: description,
        rating: rating,
        releaseDate: releaseDate,
        image: image,
      }),
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
              onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
          />{" "}
          <br /> <br />
          Rating:{" "}
          <input
            className="form-input-field"
            placeholder="Show Rating"
            type="text"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />{" "}
          <br /> <br />
          Release Date:{" "}
          <input
            className="form-input-field"
            placeholder="Show Release Date"
            type="text"
            name="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
          Image URL:{" "}
          <input
            className="form-input-field"
            placeholder="Show Image URL"
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
