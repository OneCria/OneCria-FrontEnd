import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { CustomInput } from "../../components/Input";
import classes from "dom/lib/classes";

export const NewCharacter = () => {
  const races = [
    "Anão",
    "Celestiai",
    "Gigante",
    "Homem-Peixe",
    "Humano",
    "Kuja",
    "Lunariano",
    "Meio Homem-Peixe",
    "Mink",
    "Sireno",
  ];
  return (
    <Container>
      <h2>Crie seu personagem</h2>
      <div className="inputContainer">
        <CustomInput type={"file"} name={"token"} /><br/>
        <CustomInput type={"text"} name={"nome"} />
        <CustomInput type={"select"} name={"Raça"} selectData={races} />
      </div>
    </Container>
  );
};
