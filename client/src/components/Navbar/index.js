import React, { useState } from "react";
import $ from "jquery-ajax";
import { Redirect } from "react-router-dom";
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
  const [redirect, setRedirect] = useState(null);

  const handleLogout = (e) => {
    e.preventDefault();

    $.ajax({
      method: "GET",
      url: `/api/logout`,
    }).then(
      (res) => {
        console.log("res is ", res);
        sessionStorage.removeItem("sessionID");
        setRedirect("/login");
      },
      (err) => {
        console.log("oops!");
        console.log(err);
      }
    );
  };

  if (!redirect) {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={styles.footer}
      >
        <div className="container">
          <a className="navbar-brand" style={styles.font} href="/login">
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
                  Friends{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/updateProfile">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/login"
                  style={styles.logout}
                  onClick={handleLogout}
                >
                  Logout{"  "} <i className="fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return <Redirect to={redirect} />;
  }
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
