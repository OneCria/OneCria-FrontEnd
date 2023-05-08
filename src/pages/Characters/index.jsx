import { useState, useMemo } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

export function Characters() {
  const [characters, setCharacters] = useState([]);

  const fetchDados = async () => {
    const response = await axios.get(`http://localhost:3001/characters?user=2`);
    return response.data;
  };

  const charList = useMemo(() => fetchDados(), []);
  charList.then((data) => {
    setCharacters(data);
  });

  return (
    <>
      <Accordion allowMultiple>
        {characters.map((char) => (
          <AccordionItem key={char.id}>
            <AccordionButton>
              <h2>{char.name}</h2>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <center>
                <h1>Nome: {char.name}</h1>
                <p>Raça: {char.race}</p>
                <p>Classe: {char.class}</p>
                <p>Nível: {char.level}</p>
                <p>Profissão: {char.career}</p>
                <p>Akuma no mi: {char.akuma ?? "Nenhuma"}</p>
                <p>Vida máxima: {char.life}</p>
                <p>Vida atual: {char.currentlife}</p>
              </center>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
