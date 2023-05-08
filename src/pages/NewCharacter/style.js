import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  text-align:center;

  .inputContainer {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;

  }
  button{
    background: ${theme.colors.primaryDark};
    opacity: .88;
    border:1px solid black;
    width: 12rem;
    height: 3rem;
    cursor: pointer;
    color:white;
    border-radius:10px;
    transition: .3s;
  }
  button:hover{
    opacity: 1;
  }
`;
