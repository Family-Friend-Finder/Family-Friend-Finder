import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from "./components/Main/index";
import UpdateProfile from "./pages/UpdateProfile";
import Login from "./components/Login/index"
import ProtectedRoute from "./components/ProtectedRoute/index";
class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <ProtectedRoute exact={true} path="/" component={Main} />
              <ProtectedRoute path="/settings" component={UpdateProfile} />
              <ProtectedRoute component={Main} />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
