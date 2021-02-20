import React from "react";

const AuthContext = React.createContext({
  isloggedin: false,
  userid: '',
  username: ''
});

export default AuthContext;
