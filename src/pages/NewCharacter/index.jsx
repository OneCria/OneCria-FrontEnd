import React, { useState, useEffect, useMemo } from "react";
import { Container } from "./style";
import { CustomInput } from "../../components/Input";
import axios from "axios";
import { CharCard } from "../../components/List-char-card";

export const NewCharacter = () => {
  const [Name, setName] = useState();
  const [Level, setLevel] = useState();
  const [Career, setCareer] = useState();
  const [Race, setRace] = useState();
  const [Class, setClass] = useState();
  const [Life, setLife] = useState();
  const [Token, setToken] = useState(null);

  const [CharactersOptions, setCharactersOptions] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/characters/options`)
      .then((response) => setCharactersOptions(response.data));
  }, []);

  const validate = () => {
     axios
    .post(`http://localhost:3001/characters`, {
      race: Race,
      class: Class,
      career: Career,
      life: Life,
      level: Level,
      name: Name,
      user_id: 2 // MUDAR PARA PARÂMETRO DO USUÁRIO
    }) 
    axios.post(`src/media/tokens`, Token)
  };

  return (
    <Container>
      <CharCard />
    </Container>
    
  );
};
{/* <Container>
      <h2>Crie seu personagem</h2>
        <CustomInput type={"file"} name={"token"} onSelectImage={(imagem)=>{setToken(imagem)}}/>
      <div className="inputContainer">
        <CustomInput
          type={"text"}
          name={"nome"}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <CustomInput
          type={"select"}
          name={"Raça"}
          selectData={CharactersOptions.races}
          onChange={(e) => {
            setRace(e.target.value);
          }}
        />
        <CustomInput
          type={"select"}
          name={"Classe"}
          selectData={CharactersOptions.classes}
          onChange={(e) => {
            setClass(e.target.value);
          }}
        />
        <CustomInput
          type={"select"}
          name={"Profissão"}
          selectData={CharactersOptions.careers}
          onChange={(e) => {
            setCareer(e.target.value);
          }}
        />
        <CustomInput
          type={"number"}
          name={"Nível"}
          onChange={(e) => {
            setLevel(e.target.value);
          }}
        />
        <CustomInput
          type={"number"}
          name={"Vida Máxima"}
          onChange={(e) => {
            setLife(e.target.value);
          }}
        />
      </div>
      <button onClick={validate}>Criar</button>
    </Container> */}