import React from "react";
// import { Link, useLocation } from "react-router-dom";
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
              <a className="nav-link" href="/findfamilies">
                Find a Family{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/viewmatches">
                Matches{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link " href="/updateProfile">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/api/logout" style={styles.logout}>
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

// This will need to be swapped out for the list items once routes are set.

// <li className="nav-item">
// <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
// Find a Family{" "}
// </Link>
// </li>
// <li className="nav-item">
// <Link
//   to="/about"
//   className={location.pathname === "/matches" ? "nav-link active" : "nav-link"}
// >
//   Matches{" "}
// </Link>
// </li>
// <li className="nav-item">
// <Link
//   to="/blog"
//   className={location.pathname === "/profile" ? "nav-link active" : "nav-link"}
// >
//   Profile{" "}
// </Link>
// </li>
// <li className="nav-item">
// <Link
//   to="/contact"
//   className={location.pathname === "/logout" ? "nav-link active" : "nav-link"}
//   style={styles.logout}
// >
//   Logout{"  "} <i className="fas fa-sign-out-alt"></i>
// </Link>
// </li>
