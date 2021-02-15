import React from "react";

const styles = {
  logout: {
    color: "red",
  },
  font: {
    fontFamily: "Ranchers",
    fontSize: 20,
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%",
  },
};

function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={styles.footer}
    >
      <div className="container">
        <a className="navbar-brand" style={styles.font}>
          Family Friend Finder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul
            className="nav justify-content-end navbar-nav ml-auto mt-2 mt-lg-0"
            style={styles.font}
          >
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Find a Family{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Matches{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link " href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={styles.logout}>
                Logout{"  "} <i className="fas fa-sign-out-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
