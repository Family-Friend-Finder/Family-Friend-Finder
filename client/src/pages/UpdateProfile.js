<<<<<<< HEAD
import React from "react";
import Container from "./components/Container/index";
import Navbar from "./components/Navbar/index";
import Title from "./components/Title/index";
import ImageUploader from "../components/ImageUploader/index";
=======
import React from 'react';
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
>>>>>>> Develop

export default function UpdateProfile(props) {
  return (
    <Container>
      <Title />
      <Navbar />
      <h2>Lets add some color to your profile</h2>
      <ImageUploader />
    </Container>
  );
}
