import React, { useContext } from "react";
import Container from "../components/Container/index.js";
import Navbar from "../components/Navbar/index";
import Title from "../components/Title/index";
import Wrapper from "../components/Wrapper/index";
import Card from "../components/Card/index";
import { AuthContext } from "../App";
import { Redirect } from "react-router-dom";

export default function ShowFamilies(props) {
  console.log("Entering Show Families");
  console.log(`Login Status ${props.loginstatus}`);
  // return (props.loginstatus ? 
  //   (<div>
  //     <Title />
  //     <Container>
  //       <Wrapper>
  //         <Card />
  //       </Wrapper>
  //     </Container>
  //     <Navbar />
  //   </div>) :
  //   (<Redirect to={{ pathname: "/login" }} />)
  // );  return (props.loginstatus ? 
   return (<div>
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
