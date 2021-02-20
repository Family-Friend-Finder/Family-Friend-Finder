import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ShowFamilies from "./pages/ShowFamilies";
import UpdateProfile from "./pages/UpdateProfile";
// import Match from "./pages/Matches";
//import ProtectedRoute from "./components/ProtectedRoute/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact={true} path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact={true} path="/">
            <Login />
          </Route>
          <Route path="/updateProfile">
            <UpdateProfile />
          </Route>
          <Route path="/findfamilies">
            <ShowFamilies />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
