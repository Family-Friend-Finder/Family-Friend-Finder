import React, { useContext } from "react";
import CardBtn from "../CardBtn";
import "../CardBtn/style.css";
import UserContext from "../../utils/userContext";

function Card(props) {
  const {
    image,
    firstName,
    lastName,
    familyDescription,
    lovePets,
  } = useContext(UserContext);
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
        <img src={image} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            {firstName} {lastName}
          </h5>
          <hr />
          <p className="card-text" style={{ textAlign: "center" }}>
            {familyDescription}
            {lovePets}
          </p>
          <br />
          <br />
          <CardBtn onClick={handleBtnClick} data-value="pass" />
          <CardBtn onClick={handleBtnClick} data-value="pick" />
        </div>
      </div>
    </center>
  );
}

export default Card;
