import React, { useState, useEffect } from "react";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
import Card from "../components/Card/index";
import MatchBtn from "../components/MatchBtn/index";
import API from "../utils/API";

function Match() {
  const [matches, setMatch] = useState([]);
  useEffect(() => {
    loadMatch(matches);
  }, []);
  function loadMatch() {
    API.getMatch(matches)
      .then((res) => setMatch(res.data))
      .catch((err) => console.log(err));
  }

  function removeMatch(id) {
    API.removeMatch(id)
      .then((res) => loadMatch())
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Title />
      <Container>
        <Wrapper>
          {/* {this.match.map((matches) => ( */}
          <Card
            id={matches.id}
            familyDescription={matches.description}
            firstName={matches.name}
            image={matches.image}
          >
            {/* This will need whatever function called we use to contact */}
            <MatchBtn data-value="pick" />
            <MatchBtn
              onClick={() => removeMatch(matches.id)}
              data-value="pass"
            />
          </Card>
          {/* ))} */}
        </Wrapper>
      </Container>
      <Navbar />
    </div>
  );
}
export default Match;
