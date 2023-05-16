import styled from "styled-components";
import theme from "../../styles/theme";
import { CharBackgrounds } from "../../utils/utils";
export const Container = styled.div`
  
  animation: fadeMove 0.6s ease-in-out;
  @keyframes fadeMove {
    from {
      opacity: 0;
      transform: translate3d(-30px, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

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

/* export const Card = styled.div`
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
 */

const SignCardProps = {
  "1024px": {
    height: `${40}rem`, // Card container
    width: `${60}rem`, // Card container
    imgHeight: `${39.9}rem`, //Imagem
  },
  "768px": {
    height: `${45}rem`,
    imgHeight: `${44.9}rem`,
    width: `${30}rem`,
  },
  background: `#fff5d7`,
  borderRadius: `${16}px`,
};

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 3px 3px #1313133a;
  border-radius: 15px;
  height: 100%;

  img {
    width: 100%;
  }

  button {
    font-size: 1.1rem;
    font-weight: bold;
    max-width: 14rem;
    width: 10rem;
    height: 3rem;
    border-radius: 5px;
    border: 1px solid #131313;
    background-color: #fede80;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    :hover {
      box-shadow: 0 1px 5px #1313136c;
      background-color: #ffd556;
    }
  }
  
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    border-top-left-radius: ${SignCardProps.borderRadius};
    border-bottom-left-radius: ${SignCardProps.borderRadius};
  }
`;
export const BoxRight = styled.div`
  img {
    border-top-right-radius: ${SignCardProps.borderRadius};
    border-bottom-right-radius: ${SignCardProps.borderRadius};
  }
`;