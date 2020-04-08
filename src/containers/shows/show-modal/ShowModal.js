import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./show-modal.css";

const ShowModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="buttons">
        <i
          className="fas fa-question-circle"
          onClick={handleShow}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "red",
          }}
        ></i>

        <i
          className="fas fa-plus-circle"
          onClick={props.delete}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "lightblue",
          }}
        ></i>
      </div>

      <Modal show={show} onHide={handleClose} centered className="modal">
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title className="modalhead">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          {props.description} <br /> <br />
          Rating: {props.rating} <br /> <br />
          Release Date: {props.releaseDate}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowModal;
