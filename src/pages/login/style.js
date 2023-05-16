import styled from "styled-components";
import theme from "../../styles/theme";

// Configurações do Card e suas imagens
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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #000000;
  box-shadow: 0 3px 3px #1313133a;
  animation: fadeMove 0.6s ease-in-out;

  background: ${SignCardProps.background};
  border-radius: ${SignCardProps.borderRadius};

  @media screen and (max-width: 768px) {
    width:${SignCardProps["768px"].width};
    height: ${SignCardProps["768px"].height};

    img{
      height: ${SignCardProps["768px"].imgHeight};
    }
  }

  @media screen and (min-width: 1024px) {
    width: ${SignCardProps["1024px"].width};
    height: ${SignCardProps["1024px"].height};

    img{
      height: ${SignCardProps["1024px"].imgHeight};
    }
  }

  img {
    width: 100%;
  }

  input {
    border-radius: 8px;
    width: 100%;
    margin: 0 auto;
    padding: 12px 0;
    padding-left: 1rem;
    background-color: #fefefe;
    border: 1px solid #131313;
    font-size: 1.2rem;

    ::placeholder {
      font-weight: bold;
    }
  }
  label {
    text-align: start;
    font-weight: bold;
    font-size: 1.2rem;
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
    margin-top: 15px;
    transition: all 0.5s ease-in-out;

    :hover {
      box-shadow: 0 1px 5px #1313136c;
      background-color: #ffd556;
    }
  }

  #Signup {
    border: 0;
    background: transparent;
    width: 3rem;
    margin-left: 10px;
    :hover {
      text-decoration: underline;
      box-shadow: none;
    }
  }

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    border-top-right-radius: ${SignCardProps.borderRadius};
    border-bottom-right-radius: ${SignCardProps.borderRadius};
  }
`;
