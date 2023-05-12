import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items:center;
  height:65vh;
  width: 100%;
  overflow:hidden;
`;


export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 750px;
  height: 450px;
  background: #fff5d7;
  border: 1px solid #000000;
  border-radius: 52px;
  position:relative;
 
  div{
    display: flex;
    flex-direction: column;
    justify-contenr:center;
  }


  div:nth-child(2) {
    position: relative;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    position:absolute;
    right: 0;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
  }
`;
export const BoxLeft = styled.div`
  justify-content:center;
  padding-left:3rem;
  input{
    border-radius:10px;
    width: 16rem;
    padding: 12px;
    background-color:#fff5d7; 
    border: 1px solid #000;
  }
  label{
    font-weight:bolder;
  }

  button {
    width: 6rem;
    height: 2rem;
    background: white;
    border-radius:5px;
    border: 1px solid #000000;
    cursor: pointer;

    margin-top:15px;
  }

  div, label{
    padding: 5px 0;
  }
`;