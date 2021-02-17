import React from "react";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
import Card from "../components/Card/index";

export default function ShowFamilies() {
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
  );
}
