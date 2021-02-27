import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
function MatchList(props) {
  console.log(props);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className="list-group-item list-group-item-action"
      style={{ fontFamily: "Ranchers" }}
    >
      <div className="row">
        <div className="col-10 col-md-10 col-sm-10">
          <div>
            {props.firstName} {props.lastName}
          </div>
        </div>
        <div className="col-2 col-md-2 col-sm-2">
          <button class="btn" onClick={handleShow}>
            <i class="fa fa-2x fa-address-card"></i>
          </button>
          <button class="btn" onClick={() => props.deleteFunc(props.id)}>
            <i class="fa fa-2x fa-trash"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-3 col-md-3 col-sm-3">
          <img
            src={props.imageURL}
            height="200"
            e
            width="200"
            alt="Profile Pic Thumbnail"
          />
        </div>
        <div className="col-9 col-md-9 col-sm-9">
          <p>{props.description}</p>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Name: {props.firstName} {props.lastName}{" "}
          </p>
          <p>
            Phone Number: <a href="tel:">{props.phoneNumber}</a>{" "}
          </p>
          <p>
            Email Address: <a href="mailto:">{props.email}</a>{" "}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default MatchList;
