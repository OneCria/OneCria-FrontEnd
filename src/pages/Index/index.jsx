import React, { useState, useEffect, useContext } from "react";
import { Container } from "./style";
import { Books } from "../../components/ListOfBooks";
import UserContext from "../../contexts/user.context";

const Index = () => {    
  return (
    <Container>
      <h2>PDFS para Download</h2>
      <div className="cont">
        <Books />
      </div>
    </Container>
  );
};
export default Index;
