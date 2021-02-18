import React, { Component } from "react";
import $ from "jquery-ajax";
import { Redirect } from "react-router-dom";
import Container from "../components/Container/index";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect:null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    console.log(this.state.username);
    $.ajax({
      method: "POST",
      url: `/api/signup`,
      data: {
        username: username,
        password: password,
      },
    }).then(
      (res) => {
        console.log("res is ", res);
        this.setState({redirect:"/login"})
      },
      (err) => {
        console.log(err);
      }
    );
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    if (!this.state.redirect) {
    return (
      <div>
        <Title />
        <Container>
          <Wrapper>
            <div>
              <h2>Signup</h2>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
                <button type="submit" value="signup">
                  Signup
                </button>
              </form>
            </div>
          </Wrapper>
        </Container>
        <Navbar />
      </div>
    );
    } else {
      return <Redirect to={this.state.redirect} />
    }
  }
}

export default SignUp;
