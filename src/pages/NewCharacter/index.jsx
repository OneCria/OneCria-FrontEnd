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
  const classes = [
    "Atirador",
    "Carateca Homem-Peixe",
    "Ciborgue",
    "Guerreiro-Oni",
    "Guerrilheiro",
    "Lutador",
    "Ninja",
    "Okama Kenpo",
    "Usuário de Rokushiki",
  ];

  return (
    <Container>
      <h2>Crie seu personagem</h2>
      <div className="photoContainer">
        <CustomInput type={"file"} name={"token"} />
      </div>
      <div className="inputContainer">
        <CustomInput type={"text"} name={"nome"} />
        <CustomInput type={"select"} name={"Raça"} selectData={races} />
        <CustomInput type={"select"} name={"Classe"} selectData={classes} />
        <CustomInput type={"select"} name={"Você é gay?"} selectData={['Sim','Sim']} />
      </div>

    </Container>
  );
};
