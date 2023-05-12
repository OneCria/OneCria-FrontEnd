import styled from "styled-components";
import theme from "../../styles/theme";
import { CharBackgrounds } from "../../utils/utils";
export const Container = styled.div`
  .Atirador {
    background-color: ${CharBackgrounds.Atirador.primary};

    button {
      background-color: ${CharBackgrounds.Atirador.secundary};
    }
  }
  .Carateca_Homem_Peixe {
    background-color: ${CharBackgrounds.Carateca_Homem_Peixe.primary};

    button {
      background-color: ${CharBackgrounds.Carateca_Homem_Peixe.secundary};
    }
  }
  .Ciborgue {
    background-color: ${CharBackgrounds.Ciborgue.primary};

    button {
      background-color: ${CharBackgrounds.Ciborgue.secundary};
    }
  }
  .Espadachim {
    background-color: ${CharBackgrounds.Espadachim.primary};

    button {
      background-color: ${CharBackgrounds.Espadachim.secundary};
    }
  }
  .Guerreiro_Oni {
    background-color: ${CharBackgrounds.Guerreiro_Oni.primary};

    button {
      background-color: ${CharBackgrounds.Guerreiro_Oni.secundary};
    }
  }
  .Guerrilheiro {
    background-color: ${CharBackgrounds.Guerrilheiro.primary};

    button {
      background-color: ${CharBackgrounds.Guerrilheiro.secundary};
    }
  }
  .Lutador {
    background-color: ${CharBackgrounds.Lutador.primary};

    button {
      background-color: ${CharBackgrounds.Lutador.secundary};
    }
  }
  .Ninja {
    background-color: ${CharBackgrounds.Ninja.primary};

    button {
      background-color: ${CharBackgrounds.Ninja.secundary};
    }
  }
  .Okama_Kenpo {
    background-color: ${CharBackgrounds.Okama_Kenpo.primary};

    button {
      background-color: ${CharBackgrounds.Okama_Kenpo.secundary};
    }
  }
  .Rokushiki {
    color: white;
    background-color: ${CharBackgrounds.Rokushiki.primary};

    button {
      background-color: ${CharBackgrounds.Rokushiki.secundary};
    }
  }
`;

export const Card = styled.div`
  height: 100%;
  color: black;
  font-weight: bold;
  font-size: 12pt;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 5rem;
  h1 {
    color: white;
    font-size: 42pt;
    font-weight: bold;
    text-shadow: 1px 1px 4px #000000;
  }

  div:nth-child(1){
    position:relative;
  }
  button {
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(83, 83, 83, 0.25);
    border-radius: 5px;
    width: 180px;
    height: 55px;;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 4px #000000;
    position:absolute;
    bottom: 10px;
    left: 0
  }
  div:nth-child(2){
    display:flex;
    padding: 25px 0;
    img{
        height: 80%;
        border: 1px solid #000000;
        border-radius: 15px;
      }
  }
  
`;
