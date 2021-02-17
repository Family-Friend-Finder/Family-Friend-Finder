import React from "react";
import Container from "../components/Container/index";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import ImageUploader from "../components/ImageUploader/index";
import Wrapper from "../components/Wrapper/index";

export default function UpdateProfile(props) {
  return (
    <div>
      <Title />
      <Container>
        <Wrapper>
          <h2>Lets add some color to your profile</h2>
          <ImageUploader />
        </Wrapper>
      </Container>
      <Navbar />
    </div>
  );
}
