import { useState, useMemo } from "react";
import { Container } from "./style";
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

  const backgrounds = {
    Atirador: { primary: "#806000", secundary: "#ffd966", third: "#bf8f00" },
    //"Carateca Homem-Peixe": { primary: "#833c0b", secundary: "#9cc2e5" },
    Ciborgue: { primary: "#833c0b", secundary: "#f4b083", third: "#ed7d31" },
    Okama_Kenpo: { primary: "#833c0b", secundary: "#f4b083", third: "#ed7d31" },
    Guerrilheiro: {primary:"#085452", secundary:"#8ef4bf", third: "#8ef4bf"}
  };

  return (
    <Container>
      <h2>Seus personagens</h2>
      <Accordion allowToggle id="accord">
        {characters.map((char) => (
          <AccordionItem key={char.id}>
            <AccordionButton
              _expanded={{ bg: backgrounds[char.class]?.primary, color: "white" }}
              bg={"#DBDFEA"}
            >
              <h2>{char.name}</h2>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <h1 style={{ backgroundColor: backgrounds[char.class]?.secundary }}>Nome: {char.name}</h1>
                <p style={{ backgroundColor: backgrounds[char.class]?.third }}>Raça: {char.race}</p>
                <p style={{ backgroundColor: backgrounds[char.class]?.secundary }}>Classe: {char.class}</p>
                <p style={{ backgroundColor: backgrounds[char.class]?.third }}>Nível: {char.level}</p>
                <p style={{ backgroundColor: backgrounds[char.class]?.secundary }}>Profissão: {char.career}</p>
                <p style={{ backgroundColor: backgrounds[char.class]?.third }}>Akuma no mi: {char.akuma ?? "Nenhuma"}</p>
                <p style={{ backgroundColor: backgrounds[char.class]?.secundary }}>Vida máxima: {char.life}</p>
                <p style={{ backgroundColor: backgrounds[char.class]?.third }}>Vida atual: {char.currentlife}</p>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
