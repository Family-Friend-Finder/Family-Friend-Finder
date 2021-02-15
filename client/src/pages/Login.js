import React, { Component } from 'react';
import {Link} from 'react-router';
import $ from 'jquery-ajax';
import Container from "./components/Container/index.js";
import Navbar from "./components/Navbar/index";
import Title from "./components/Title/index";
import ShowFamilies from "./ShowFamilies"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '', password: '', id:'', isAuthenticated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    $.ajax({
      method: 'POST',
      url: `http://localhost:3000/login`,
      data: {
        username: username,
        password: password
      }
    })
    .then(res => {
      console.log('res is ', res);
      this.setState({isAuthenticated: true, id:res._id});
    }, err => {
      console.log('oops!');
      console.log(err);
    });
  }
  handleLogout(){
      this.setState({isAuthenticated: false, id:''});
  }
  handleUsernameChange(e){
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  getInitialState(){
      return {
        isAuthenticated : false
      }
    }

  render() {
    if(this.state.isAuthenticated === false){
      console.log('user is not logged in')
      return(
          <Container>
          <Title />
          <Navbar />
          <div>
      <h1>Welcome to Family Finder!</h1>
      <form onSubmit={ this.handleSubmit}>
      <Input
        type='text'
        placeholder='username'
        value={ this.state.username }
        onChange={this.handleUsernameChange}
        />
      <Input
        type='password'
        placeholder='password'
        value={ this.state.password }
        onChange={this.handlePasswordChange}
        />
      <Button type='submit'
      value='login'>Login</Button>
        </form>
          <Link role='button' to='signup'>Signup</Link>
      </div>
          </Container>
      
      )
    } else {
      console.log('user is already logged in')
      return(
          <Container>
          <Title />
          <Navbar />
          <div>
        <h1>Welcome to Family Finder</h1>
          <ShowFamilies isAuthenticated={this.state.isAuthenticated} username={this.state.username} id={this.state.id}></ShowFamilies>
          <Button className='logout-button' onClick={this.handleLogout}>Logout</Button>
        </div>
          </Container>
        
      )
    }

  }
}

export default Login;