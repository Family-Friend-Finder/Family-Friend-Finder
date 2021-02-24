import React from "react";
const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  image: "",
  email: "",
  phoneNumber: "",
  familyDescription: "",
  lovePets: "",
  handleBtnClick: () => {},
});
export default UserContext;
