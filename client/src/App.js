import React, { Component } from "react";
import Container from "./components/Container/index.js";
import Navbar from "./components/Navbar/index";
import Title from "./components/Title/index";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Title />
          <Navbar />
        </Container>
      </div>
    );
  }
}

export default App;
