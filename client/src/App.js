import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ShowFamilies from "./pages/ShowFamilies";
import UpdateProfile from "./pages/UpdateProfile";
import ProtectedRoute from "./components/ProtectedRoute/index";
class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <ProtectedRoute exact={true} path="/" component={ShowFamilies} />
              <ProtectedRoute path="/settings" component={UpdateProfile} />
              <ProtectedRoute path="/findfamilies" component={ShowFamilies} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
