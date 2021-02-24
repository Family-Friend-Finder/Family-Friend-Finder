import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery-ajax";
import { Redirect } from "react-router-dom";
import Container from "../components/Container/index";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper";
import Login from "./Login";

export default function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);

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

        setRedirect("/update");
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
                  <div className="row" />
                  <div className="col-sm-1"></div>
                  <div className="col-sm-10">
                    <h1>Welcome to Family Finder!</h1>
                    <br />
                    <div className="card">
                      <div className="card-body">
                        <form>
                          <h2 className="title">Sign-up</h2>
                          <hr />

                          <div className="form-group">
                            <label for="InputName">Name</label>
                            <br />
                            <input
                              type="text"
                              placeholder="username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label for="InputEmail">Password</label>
                            <br />
                            <input
                              type="password"
                              placeholder="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            className="btn btn-info"
                          >
                            Sign-up
                          </button>
                        </form>
                      </div>
                    </div>
                    <Link role="button" to="/">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </center>
          </Wrapper>
        </Container>
        <Navbar />
      </div>
    );
  } else {
    return <Login newuser={true} />;
  }
}

// class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//       redirect:null
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handlePasswordChange = this.handlePasswordChange.bind(this);
//     this.handleUsernameChange = this.handleUsernameChange.bind(this);
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     let username = this.state.username;
//     let password = this.state.password;
//     console.log(this.state.username);
//     $.ajax({
//       method: "POST",
//       url: `/api/signup`,
//       data: {
//         username: username,
//         password: password,
//       },
//     }).then(
//       (res) => {
//         console.log("res is ", res);
//         this.setState({redirect:"/login"})
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }
//   handleUsernameChange(e) {
//     this.setState({ username: e.target.value });
//   }
//   handlePasswordChange(e) {
//     this.setState({ password: e.target.value });
//   }
//   render() {
//     if (!this.state.redirect) {
//     return (
//       <div>
//         <Title />
//         <Container>
//           <Wrapper>
//             <center>
//               <div>
//                 <div className="container">
//                   <div className="row" />
//                   <div className="col-sm-1"></div>
//                   <div className="col-sm-10">
//                     <h1>Welcome to Family Finder!</h1>
//                     <br />
//                     <div className="card">
//                       <div className="card-body">
//                         <form>
//                           <h2 className="title">Sign-up</h2>
//                           <hr />

//                           <div className="form-group">
//                             <label for="InputName">Name</label>
//                             <br />
//                             <input
//                               type="text"
//                               placeholder="username"
//                               value={this.state.username}
//                               onChange={this.handleUsernameChange}
//                             />
//                           </div>
//                           <div className="form-group">
//                             <label for="InputEmail">Password</label>
//                             <br />
//                             <input
//                               type="password"
//                               placeholder="password"
//                               value={this.state.password}
//                               onChange={this.handlePasswordChange}
//                             />
//                           </div>
//                           <button
//                             onClick={this.handleSubmit}
//                             type="submit"
//                             className="btn btn-info"
//                           >
//                             Sign-up
//                           </button>
//                         </form>
//                       </div>
//                     </div>
//                     <Link role="button" to="/">
//                       Login
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </center>
//           </Wrapper>
//         </Container>
//         <Navbar />
//       </div>
//     );
//     } else {
//       return <Redirect to={this.state.redirect} />
//     }
//   }
// }

// export default SignUp;
