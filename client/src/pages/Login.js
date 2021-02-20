import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery-ajax";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import { Redirect } from "react-router-dom";
import Wrapper from "../components/Wrapper/index";
import AuthContext from "../utils/AuthContext"
//import { AuthContext } from "../App";

export default function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  //const [authStatus, setauthStatus] = useState();
  const [redirect, setRedirect] = useState(null);

  const [loginState, setLoginState] = useState({
    isloggedin: false,
    newuser:'',
    userid: '',
    username: ''
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
        sessionStorage.setItem("sessionID", res._id);
        if (props.newuser) {
          setLoginState({...loginState,
            isloggedin:true,
            newuser:true,
            userid: res._id,
            username: res.username
          });
          setRedirect("/updateProfile");
        }
         else {
          setLoginState({...loginState,
            isloggedin:true,
            newuser:false,
            userid: res._id,
            username: res.username
          });
          setRedirect("/findfamilies");
         }
      },
      (err) => {
        console.log("oops!");
        console.log(err);
      }
    );
  };

  if (!redirect) {
    return (
      <div>
        <Title />
        <Container>
          <Wrapper>
            <center>
              <div>
                <div className="container">
                  <AuthContext.Provider value={loginState}>
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
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                              />
                            </div>
                            <div className="form-group">
                              <label for="InputEmail">Password</label>
                              <br />
                              <input
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                              />
                            </div>
                            <button
                              onClick={handleSubmit}
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
                  </AuthContext.Provider>
                </div>
              </div>
            </center>
          </Wrapper>
        </Container>
        <Navbar />
      </div>
    )
  } else {
    return <Redirect to={redirect} />
  }
}
