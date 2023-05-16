import styled from "styled-components";
import theme from "../../styles/theme";

// Configurações do Card e suas imagens
const SignCardProps = {
  height: `${450}px`,
  width: `${750}px`,
  background: `#fff5d7`,
  borderRadius: `${52}px`
}

export const Container = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  width: 100%;
  overflow: hidden;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #000000;

  width: ${SignCardProps.width};
  height: ${SignCardProps.height};
  background: ${SignCardProps.background};
  border-radius: ${SignCardProps.borderRadius};

  img {
    width: 100%;
    height:${SignCardProps.height};
  }

  input {
    border-radius: 10px;
    width: 16rem;
    padding: 12px;
    background-color: #fff;
    border: 1px solid #000;
  }
  label {
    font-weight: bolder;
  }
  button {
    width: 6rem;
    height: 2rem;
    background: white;
    border-radius: 5px;
    border: 1px solid #000000;
    cursor: pointer;
    margin-top: 15px;
  }
  #Signup {
    border: 0;
    background: transparent;
    width: 3rem;

    :hover{
      text-decoration: underline;
    }
  }
`;

export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
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
  justify-content:center;
  div {
    display: flex;
    flex-direction: column;
  }
  img {
    border-top-right-radius: ${SignCardProps.borderRadius};
    border-bottom-right-radius: ${SignCardProps.borderRadius};
  }
`;