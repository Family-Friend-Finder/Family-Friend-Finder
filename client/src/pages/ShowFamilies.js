import React from 'react';
import Container from "./components/Container/index.js";
import Navbar from "./components/Navbar/index";
import Title from "./components/Title/index";

export default function ShowFamilies(props) {
  return(
    <Container>
    <Title />
    <Navbar />
    <h2>Welcome to Family Finder</h2>
    </Container>
  );
}
