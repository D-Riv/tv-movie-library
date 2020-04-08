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
          className="fas fa-trash-alt"
          onClick={props.delete}
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: "#ffffff",
            margin: "5px",
          }}
        ></i>
      </div>

      <Modal show={show} onHide={handleClose} centered className="modal">
        <Modal.Header
          // closeButton
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Modal.Title className="modalhead">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black", color: "white" }}>
          {props.description} <br /> <br />
          Rating: {props.rating} <br /> <br />
          Release Date: {props.releaseDate}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={props.edit}>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowModal;
