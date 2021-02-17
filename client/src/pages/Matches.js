import React, { Component } from "react";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
import Card from "../components/Card/index";
import MatchBtn from "../components/MatchBtn/index";

class Match extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    match,
  };
  removeMatch = (id) => {
    const match = this.state.match.filter((match) => match.id !== id);

    this.setState({ match });
  };
  render() {
    return (
      <div>
        <Title />
        <Container>
          <Wrapper>
            {this.state.friends.map((friend) => (
              <Card
                removeMatch={this.removeMatch}
                id={match.id}
                key={match.id}
                name={match.name}
                image={match.image}
              >
                <MatchBtn
                  onClick={props.removeMatch(props.id)}
                  data-value="pass"
                />
                {/* This will need whatever function called we use to contact */}
                <MatchBtn onClick={props.handleBtnClick} data-value="pick" />
              </Card>
            ))}
          </Wrapper>
        </Container>
        <Navbar />
      </div>
    );
  }
}
export default Match;
