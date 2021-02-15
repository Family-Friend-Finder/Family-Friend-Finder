import React, { Component } from "react";
import Container from "./components/Container/index.js";
import Navbar from "./components/Navbar/index";
import Title from "./components/Title/index";
import Card from "./components/Card/index";
import Wrapper from "./components/Wrapper/index";
class App extends Component {
  render() {
    return (
      <div className="App">
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
}

export default App;
