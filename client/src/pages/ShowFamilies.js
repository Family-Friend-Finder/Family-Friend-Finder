import React from "react";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
import Card from "../components/Card/index";
import { Redirect } from "react-router-dom";

export default function ShowFamilies() {
  const isloggedin = sessionStorage.getItem("sessionID");
  const newuser = sessionStorage.getItem("newuser");

  if (isloggedin) {
     if (!newuser) {
      return (
        <div>
        <Title />
        <Container>
          <Wrapper>
            <Card />
          </Wrapper>
        </Container>
        <Navbar />
      </div>
      )
     } else {
      return (<Redirect to={{ pathname: "/updateProfile" }} />)
     }
    }  else {
    return (<Redirect to={{ pathname: "/login" }} />)
   }
}
