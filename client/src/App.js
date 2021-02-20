import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ShowFamilies from "./pages/ShowFamilies";
import UpdateProfile from "./pages/UpdateProfile";
// import Match from "./pages/Matches";
//import ProtectedRoute from "./components/ProtectedRoute/index";

// const initialState = {
//   isloggedin: false,
//   userid: null
// };

// export const AuthContext = React.createContext(initialState);

// const reducer = (state, action) => {
//   console.log("Entering reducer function");
//   console.log(JSON.stringify(action));
//   console.log(JSON.stringify(state));
//   switch (action.type) {
//     case "LOGIN":
//       console.log(`userid in reducer function is ${action.payload.userid} ` )
//       return {
//         ...state,
//         isloggedin: true,
//         userid: action.payload.userid,
//       };
//     case "LOGOUT":
//       return {
//         ...state,
//         isloggedin: false,
//         userid: null
//       };
//     default:
//       return state;
//   }
// }

function App() {
  //const [state, dispatch] = React.useReducer(reducer, initialState);
  //console.log(`Logged in State ${state.isloggedin}`);
  // console.log(`userid: ${state.userid}`);
  return (
    //<AuthContext.Provider value={{state,dispatch}}>
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
          <Route path="/updateProfile">
            <UpdateProfile />
          </Route>
          <Route path="/findfamilies">
            <ShowFamilies />
          </Route>
          <Route path="/matches">
            <Match />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    //</AuthContext.Provider>
  );
}

export default App;
