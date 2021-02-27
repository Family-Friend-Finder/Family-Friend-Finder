import React, { useState, useEffect } from "react";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
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
    const curruserID = sessionStorage.getItem("sessionID");
        const body = { matchid: id }
        console.log(curruserID);
    API.removeMatch(curruserID,body)
      .then((res) => loadMatch(curruserID))
      .catch((err) => console.log(err));
  }


  return (
    <div>
      <Title />
      <Container>
        <Wrapper>
          <ul className="list-group mb-5">
            {matches.map(item => (
              <MatchList key={item._id} id={item._id} firstName={item.firstName} lastName={item.lastName} description={item.familyDescription} imageURL={item.imageURL} phoneNumber={item.phoneNumber} email={item.email} deleteFunc={removeMatch}/>))}
          </ul>
        </Wrapper>
      </Container>
      <Navbar />
    </div>
  );
}
export default Match;
