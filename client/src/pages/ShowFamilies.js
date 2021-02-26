import React, { useState, useEffect } from "react";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
import Card from "../components/Card/index";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import UserContext from "../utils/userContext";

export default function ShowFamilies() {
  const isloggedin = sessionStorage.getItem("sessionID");
  const newuser = sessionStorage.getItem("newuser");
  const [families, setFamilies] = useState([]);
  const [family, setFamily] = useState({});
  const [familyIndex, setFamilyIndex] = useState(0);

  useEffect(() => {
    loadFamily();
  }, []);
  function loadFamily() {
    API.allfamilies()
      .then((families) => {
        //console.log(families);
        setFamilies(families.data);
        setFamily(families.data[0]);
      })
      .catch((err) => console.log(err));
  }

  function nextFamily(familyIndex) {
    if (familyIndex >= families.length) {
      familyIndex = 0;
    }
    setFamilyIndex(familyIndex);
    setFamily(families[familyIndex]);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "pass") {
      const newFamilyIndex = familyIndex + 1;
      nextFamily(newFamilyIndex);
    } else
      if (btnName === "pick") {
         console.log("Inside Pick");
        const curruserID = sessionStorage.getItem("sessionID");
        const body = { matchid: curruserID }
        const likedfamilyID = family._id;

        if (!(family.matches.includes(curruserID))) {
          console.log("Family Match" + JSON.stringify(family.matches));

          API.updateMatches(likedfamilyID, body).then((res) => {
            console.log("res is ", res);
            const newFamilyIndex = familyIndex + 1;
            nextFamily(newFamilyIndex);
          },
            (err) => {
              console.log("oops!");
              console.log(err);
            }
          );
        } else {
          const newFamilyIndex = familyIndex + 1;
          nextFamily(newFamilyIndex);
        }
      }
  }

  if (isloggedin) {
    if (!newuser) {
      //console.log(family);
      return (
        <UserContext.Provider value={{ ...family, handleBtnClick }}>
          <div>
            <Title />
            <Container>
              <Wrapper>
                <Card />
              </Wrapper>
            </Container>
            <Navbar />
          </div>
        </UserContext.Provider>
      );
    } else {
      return <Redirect to={{ pathname: "/updateProfile" }} />;
    }
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
}
