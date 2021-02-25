import React, { useState, useEffect } from "react";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
//import Card from "../components/Card/index";
//import MatchBtn from "../components/MatchBtn/index";
import MatchList from "../components/MatchList";
import API from "../utils/API";

function Match() {
  const [matches, setMatch] = useState([]);

  useEffect(() => {
    const curUserID = sessionStorage.getItem("sessionID");
    loadMatch(curUserID);
  }, []);

  function loadMatch(id) {
    API.getMatch(id)
      .then((res) => {
        console.log(res);
        setMatch(res.data.matches)
      })
      .catch((err) => console.log(err));
  }

  function removeMatch(id) {
    API.removeMatch(id)
      .then((res) => loadMatch())
      .catch((err) => console.log(err));
  }

  // {/* {this.match.map((matches) => ( */}
  //   <Card
  //   id={matches.id}
  //   familyDescription={matches.description}
  //   firstName={matches.name}
  //   image={matches.image}
  // >
  //   {/* This will need whatever function called we use to contact */}
  //   <MatchBtn data-value="pick" />
  //   <MatchBtn
  //     onClick={() => removeMatch(matches.id)}
  //     data-value="pass"
  //   />
  // </Card>
  // {/* ))} */}

  return (
    <div>
      <Title />
      <Container>
        <Wrapper>
          <ul className="list-group mb-5">
            {matches.map(item => (
              <MatchList key={item._id} id={item._id} firstName={item.firstName} lastName={item.lastName} description={item.familyDescription} imageURL={item.imageURL} deleteFunc={removeMatch}/>))}
          </ul>
        </Wrapper>
      </Container>
      <Navbar />
    </div>
  );
}
export default Match;
