import React, { Component } from "react";
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main/index";
import UpdateProfile from "./pages/UpdateProfile";
import Login from "./components/Login/index";
import ProtectedRoute from "./components/ProtectedRoute/index";
import Container from "./components/Container/index.js";
import Navbar from "./components/Navbar/index";
import Title from "./components/Title/index";
import Card from "./components/Card/index";
import Wrapper from "./components/Wrapper/index";
// import ImageUploader from "./components/ImageUploader/index";

=======

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ShowFamilies from "./pages/ShowFamilies";
import UpdateProfile from "./pages/UpdateProfile";
//import ProtectedRoute from "./components/ProtectedRoute/index";
>>>>>>> Develop
class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact={true} path="/" component={Main} />
            <ProtectedRoute path="/settings" component={UpdateProfile} />
            <ProtectedRoute component={Main} />
          </Switch>
        </BrowserRouter>
        <Title />
        <Container>
          <Wrapper>
            <Card />
          </Wrapper>
        </Container>
        <Navbar />
=======

          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route exact={true} path="/" component={Login} />
              <Route path="/settings" component={UpdateProfile} />
              <Route path="/findfamilies" component={ShowFamilies} />
            </Switch>
          </BrowserRouter>

>>>>>>> Develop
      </div>
    );
  }
}

export default App;
