import React from "react";

const AuthContext = React.createContext({
  isloggedin: false,
  userid: '',
});

export default AuthContext;
