import React from "react";
import Container from "../components/Container/index";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import { Redirect } from "react-router-dom";
import Wrapper from "../components/Wrapper/index";
import Form from "../components/Form/index";
// import ImageUploader from "../components/ImageUploader/index";
export default function UpdateProfile(props) {
  const isloggedin = sessionStorage.getItem("sessionID");

  return isloggedin ? (
    <div>
      <Title />
      <Container>
        <Wrapper>
          <Form />
        </Wrapper>
      </Container>
      <Navbar />
    </div>
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
}
