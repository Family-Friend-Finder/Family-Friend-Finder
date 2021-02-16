import React from "react";
import CardBtn from "../CardBtn";

function Card(props) {
  return (
    <center>
      <div
        className="card"
        style={{
          width: "25rem",
          top: 50,
          marginBottom: 100,
          background: "lightgrey",
          position: "relative",
        }}
      >
        <img
          src={"https://placeimg.com/200/200/people"}
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            Persons Name
          </h5>
          <hr />
          <p className="card-text" style={{ textAlign: "center" }}>
            Some jibber jabber about the person.
          </p>
          <br />
          <br />
          <CardBtn onClick={props.handleBtnClick} data-value="pass" />
          <CardBtn onClick={props.handleBtnClick} data-value="pick" />
        </div>
      </div>
    </center>
  );
}

export default Card;
