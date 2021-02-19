import React from "react";
import Container from "../components/Container/index";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
import Form from "../components/Form/index";

export default function UpdateProfile(props) {
  return (
    <div>
      <Title />
      <Container>
        <Wrapper>
          <Form />
        </Wrapper>
      </Container>
      <Navbar />
    </div>
  );
}
