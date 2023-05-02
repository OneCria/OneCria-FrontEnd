
import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
`;
export const Card = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  border: 1px solid #00000044;
  padding: 4rem 3rem;

  button{
    width: 12rem;
    height: 2rem;
    background: transparent;
    border: 1px solid #000000;
    cursor:pointer;
  }

  p{
    color: ${theme.colors.navDark};
    font-weight: bold;
    font-size: 14pt;
  }
  #action{
    margin-top:-10px;
    transform: scale(0.8);
    transition: .3s;
    cursor:pointer;

    &:hover{
      transform: scale(1);
      color: blue;
    }
  }
`;
