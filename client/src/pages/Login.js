<<<<<<< HEAD
import React, { Component } from "react";
import { Link } from "react-router";
import $ from "jquery-ajax";
import Container from "./components/Container/index.js";
import Navbar from "./components/Navbar/index";
import Title from "./components/Title/index";
import ShowFamilies from "./ShowFamilies";
=======
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery-ajax';
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import { Redirect } from 'react-router-dom';
>>>>>>> Develop

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      username: "",
      password: "",
      id: "",
      isAuthenticated: false,
=======
      username: '', password: '', id: '', isAuthenticated: false
>>>>>>> Develop
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    $.ajax({
<<<<<<< HEAD
      method: "POST",
      url: `http://localhost:3000/login`,
      data: {
        username: username,
        password: password,
      },
    }).then(
      (res) => {
        console.log("res is ", res);
        this.setState({ isAuthenticated: true, id: res._id });
      },
      (err) => {
        console.log("oops!");
        console.log(err);
      }
    );
  }
  handleLogout() {
    this.setState({ isAuthenticated: false, id: "" });
  }
=======
      method: 'POST',
      url: `http://localhost:3000/api/login`,
      data: {
        username: username,
        password: password 
      }
    })
      .then(res => {
        console.log('res is ', res);
        this.setState({ isAuthenticated: true, id: res._id });
      }, err => {
        console.log('oops!');
        console.log(err);
      });
  }

>>>>>>> Develop
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
<<<<<<< HEAD
  }
  getInitialState() {
    return {
      isAuthenticated: false,
    };
  }

  render() {
    if (this.state.isAuthenticated === false) {
      console.log("user is not logged in");
=======
  }
  getInitialState() {
    return {
      isAuthenticated: false
    }
  }

  render() {
    if (this.state.isAuthenticated === false) {
      console.log('user is not logged in')
>>>>>>> Develop
      return (
        <Container>
          <Title />
          <Navbar />
          <div>
            <h1>Welcome to Family Finder!</h1>
            <form onSubmit={this.handleSubmit}>
<<<<<<< HEAD
              <Input
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
              <Input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <Button type="submit" value="login">
                Login
              </Button>
            </form>
            <Link role="button" to="signup">
              Signup
            </Link>
          </div>
        </Container>
      );
    } else {
      console.log("user is already logged in");
      return (
        <Container>
          <Title />
          <Navbar />
          <div>
            <h1>Welcome to Family Finder</h1>
            <ShowFamilies
              isAuthenticated={this.state.isAuthenticated}
              username={this.state.username}
              id={this.state.id}
            ></ShowFamilies>
            <Button className="logout-button" onClick={this.handleLogout}>
              Logout
            </Button>
          </div>
        </Container>
      );
=======
              <input
                type='text'
                placeholder='username'
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
              <input
                type='password'
                placeholder='password'
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
              <button type='submit'
                value='login'>Login</button>
            </form>
            <Link role='button' to='signup'>Signup</Link>
          </div>
        </Container>

      )
    } else {
      console.log('user is already logged in')
      return (
        <Redirect to={{ pathname: '/findfamilies' }} />
      )
>>>>>>> Develop
    }
  }
}

export default Login;
