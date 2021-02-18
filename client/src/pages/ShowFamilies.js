//import React, { useContext } from "react";
import React from "react";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
import Card from "../components/Card/index";
import { Redirect } from "react-router-dom";

export default function ShowFamilies() {
  const isloggedin = sessionStorage.getItem("sessionID");

  //console.log(`Login Status ${isloggedin}`);

  return (isloggedin ?
    (
      <div>
      <Title />
      <Container>
        <Wrapper>
          <Card />
        </Wrapper>
      </Container>
      <Navbar />
    </div>
    ) :
    (
      <Redirect to={{ pathname: "/login" }} />
    ))
}
