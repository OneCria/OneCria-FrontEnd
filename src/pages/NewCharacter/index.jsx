import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { CustomInput } from "../../components/Input";

export const NewCharacter = () => {
  const [nome, setNome] = useState();
  const [nivel, setNivel] = useState();
  
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

  const validate = () =>{
    console.log(nome, nivel)
  }

  return (
    <Container>
      <h2>Crie seu personagem</h2>
      <div className="photoContainer">
        <CustomInput type={"file"} name={"token"} />
      </div>
      <div className="inputContainer">
        <CustomInput type={"text"} name={"nome"} onChange={()=>{console.log('e')}}/>
        <CustomInput type={"select"} name={"Raça"} selectData={races} />
        <CustomInput type={"select"} name={"Classe"} selectData={classes} />
        <CustomInput type={"number"} name={"Nível"} />
      </div>
    <button onClick={validate}>Avançar</button>
    </Container>
  );
};
