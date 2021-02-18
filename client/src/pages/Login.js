//import React, { Component, useState } from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery-ajax";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
// import { Redirect } from "react-router-dom";
import Wrapper from "../components/Wrapper/index";
import API from "../utils/API";
import { AuthContext } from "../App";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [authStatus, setauthStatus] = useState();

  const { dispatch } = React.useContext(AuthContext);

  const [loginState, setLoginState] = useState({
    isloggedin: false,
    userid: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);

    $.ajax({
      method: "POST",
      url: `/api/login`,
      data: {
        username: username,
        password: password,
      },
    }).then(
      (res) => {
        console.log("res is ", res);
        dispatch({
          type: "LOGIN",
          payload: { userid: res._id },
        });
        setauthStatus(true);
      },
      (err) => {
        console.log("oops!");
        console.log(err);
      }
    );
  };

  console.log(`Auth Status is ${authStatus}`);
  //console.log(`${loginState}`);

  return (
    <AuthContext.Provider value={loginState}>
      <div>
        <Title />
        <Container>
          <Wrapper>
            <center>
              <div>
                <div className="container">
                  <div className="row" />
                  <div className="col-sm-1"></div>
                  <div className="col-sm-10">
                    <h1>Welcome to Family Finder!</h1>
                    <br />
                    <div className="card">
                      <div className="card-body">
                        <form>
                          <h2 className="title">Login</h2>
                          <hr />

                          <div className="form-group">
                            <label for="InputName">Name</label>
                            <br />
                            <input
                              type="text"
                              placeholder="username"
                              value={this.state.username}
                              onChange={this.handleUsernameChange}
                            />
                          </div>
                          <div className="form-group">
                            <label for="InputEmail">Password</label>
                            <br />
                            <input
                              type="password"
                              placeholder="password"
                              value={this.state.password}
                              onChange={this.handlePasswordChange}
                            />
                          </div>
                          <button
                            onClick={this.handleSubmit}
                            type="submit"
                            className="btn btn-info"
                          >
                            Login
                          </button>
                        </form>
                      </div>
                    </div>
                    <Link role="button" to="signup">
                      Sign-up
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </Wrapper>
        </Container>
        <Navbar />
      </div>
    </AuthContext.Provider>
  );
}
