import { useState, useMemo, useContext, useEffect } from "react";
import { Container } from "./style";
import { CharBackgrounds } from "../../utils/utils";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import UserContext from "../../contexts/user.context";

export function Characters() {
  const {UserLogged} = useContext(UserContext)
  const [ID, setID] = useState(UserLogged.id);
  useEffect(() => {
    setID(UserLogged.id);
  }, [UserLogged.id]);

  const [characters, setCharacters] = useState([]);
  const fetchDados = async () => {
    const response = await axios.get(`http://localhost:3001/characters?user=${ID}`);
    return response.data;
  };

  const charList = useMemo(() => fetchDados(), []);
  charList.then((data) => {
    setCharacters(data);
  });

  return (
    <Container>
      <h2>Seus personagens</h2>
      <Accordion allowToggle id="accord">
        {characters.map((char) => (
          <AccordionItem key={char.id}>
            <AccordionButton
              _expanded={{
                bg: CharBackgrounds[char.class]?.primary,
                color: "white",
                textShadow: "2px 1px black"
              }}
              bg={"#DBDFEA"}
            >
              <h2>{char.name}</h2>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} className={char.class}>
              <h1>Nome: {char.name}</h1>
              <p>Raça: {char.race}</p>
              <p>Classe: {char.class}</p>
              <p>Nível: {char.level}</p>
              <p>Profissão: {char.career}</p>
              <p>Akuma no mi: {char.akuma ?? "Nenhuma"}</p>
              <p>Vida máxima: {char.life}</p>
              <p>Vida atual: {char.currentlife}</p>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
