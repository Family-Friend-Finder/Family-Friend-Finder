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
    <div className="jumbotron jumbotron-fluid">
      <h1 className="display-4" style={styles.h1}>
        <i class="fas fa-users"></i> {"..."}Family Friend Finder{"..."}
        <i class="fas fa-users"></i>
      </h1>
    </div>
  );
}

export default Title;
