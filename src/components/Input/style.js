import styled from "styled-components";
import theme from "../../styles/theme";

export const InputBox = styled.div`
  padding: 5px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  
  label{
    font-weight: ${theme.font.semiBold};
    font-size: ${theme.font.size.small};
    text-transform: capitalize;
  }

  input{
    width:16rem;
    height:1.6rem;
  }
  select{
    width:16.5rem;
    padding: 0.4rem;
  }
  img{
    width: 200px;
    height: 200px;
    border-radius:50%;
    border: 1px solid #000000;
  }
`;
