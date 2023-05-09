import styled from "styled-components";
import theme from "../../styles/theme";
import { CharBackgrounds } from "../../utils/utils";
export const Container = styled.div`
  padding: 0 4rem;

  #accord{
    width:40rem;
  }
  p, h1{
    margin: 0;
    padding: 5px;
    border: 1px solid #00000040;
    font-weight: bold;
  }

  .Atirador {
    color: white;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Atirador.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Atirador.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Atirador.third};
    }
  }
  .Carateca_Homem_Peixe {
    color: white;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Carateca_Homem_Peixe.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Carateca_Homem_Peixe.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Carateca_Homem_Peixe.third};
    }
  }
  .Ciborgue {
    color: white;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Ciborgue.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Ciborgue.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Ciborgue.third};
    }
  }
  .Espadachim {
    color: white;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Espadachim.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Espadachim.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Espadachim.third};
    }
  }
  .Guerreiro_Oni {
    color: white;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Guerreiro_Oni.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Guerreiro_Oni.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Guerreiro_Oni.third};
    }
  }
  .Guerrilheiro {
    color: white;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Guerrilheiro.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Guerrilheiro.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Guerrilheiro.third};
    }
  }

  .Lutador {
    color: white;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Lutador.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Lutador.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Lutador.third};
    }
  }
  .Ninja {
    color: white;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Ninja.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Ninja.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Ninja.third};
    }
  }
  .Okama_Kenpo {
    color: white;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Okama_Kenpo.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Okama_Kenpo.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Okama_Kenpo.third};
    }
  }
  .Rokushiki {
    color: black;
    text-shadow: 2px 1px black;

    p:nth-child(3),
    p:nth-child(6),
    p:nth-child(8)
    {
      background-color: ${CharBackgrounds.Rokushiki.primary};
    }
    h1,
    p:nth-child(4),
    p:nth-child(7)
    {
      background-color: ${CharBackgrounds.Rokushiki.secundary};
    }
    p:nth-child(2),
    p:nth-child(5)
    {
      background-color: ${CharBackgrounds.Rokushiki.third};
    }
  }
  
`;