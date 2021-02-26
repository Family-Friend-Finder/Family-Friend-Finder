import React from "react";
const UserContext = React.createContext({
  firstName: "",
  lastName: "",
  imageURL: "",
  email: "",
  phoneNumber: "",
  familyDescription: "",
  lovePets: "",
  handleBtnClick: () => {},
});
export default UserContext;
