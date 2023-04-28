import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    width: 200px;
    height: 250px;
  }

  .cont{
    display:flex;
    gap:2rem;
  }
`;
