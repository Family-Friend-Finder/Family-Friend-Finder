//import React, { Component, useState } from "react";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import $ from "jquery-ajax";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
// import { Redirect } from "react-router-dom";
import Wrapper from "../components/Wrapper/index";
import API from "../utils/API"
import { AuthContext } from "../App";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [authStatus, setauthStatus] = useState();

  const { dispatch } = React.useContext(AuthContext);

  const [loginState, setLoginState] = useState({
    isloggedin: false,
    userid: ''
  });



  const handleSubmit = e => {
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
        payload: {userid: res._id}
    });
      setauthStatus(true);
    },
    (err) => {
      console.log("oops!");
      console.log(err);

    }
  );
}


  console.log(`Auth Status is ${authStatus}`);
  //console.log(`${loginState}`);

   return (
    <AuthContext.Provider value={loginState}>
      <div>
        <Title />
        <Container>
            <div>
              <h1>Welcome to Family Finder!</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" value="login">
                  Login
              </button>
              </form>
              <Link role="button" to="signup">
                Signup
            </Link>
            </div>
        </Container>
        <Navbar />
      </div>
    </AuthContext.Provider>
  ) 
   }