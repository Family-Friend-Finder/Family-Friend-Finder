import React from "react";

const styles = {
  h1: {
    marginBottom: "0px",
    textAlign: "center",
    fontFamily: "Ranchers",
  },
};

function Title(props) {
  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ backgroundColor: "#47a8ce" }}
    >
      <h1 className="display-4" style={styles.h1}>
        <i className="fas fa-users"></i> {"..."}Family Friend Finder{"..."}
        <i className="fas fa-users"></i>
      </h1>
    </div>
  );
}

export default Title;
