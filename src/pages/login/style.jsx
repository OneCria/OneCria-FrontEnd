import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  height: calc(100vh - 10rem);
`;


export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  max-width: 1200px;
  background: #fff5d7;
  border: 1px solid #000000;
  border-radius: 16px;
  box-shadow: 0 3px 3px #1313133a;
  animation: fadeMove .6s ease-in-out;
 
  @keyframes fadeMove {
    from {
      opacity: 0;
      transform: translate3d(-30px, 0, 0);
    } to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content:center;
  }


  div:nth-child(2) {
    position: relative;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 0 16px 16px 0;
    border-left: 1px solid #131313;
  }

  @media screen and (max-width: 768px) {
    width: 45rem;
    height: 30rem;
  }

  @media screen and (min-width: 1024px) {
    width: 60rem;
    height: 40rem;
  }
`;
export const BoxLeft = styled.div`
  justify-content:center;
  padding-left: 3rem;

  input{
    border-radius: 8px;
    width: 100%;
    margin: 0 auto;
    padding: 12px 0;
    padding-left: 1rem;
    background-color:#fefefe; 
    border: 1px solid #131313;
    font-size: 1.2rem;

    ::placeholder {
      font-weight: bold;
    }
  }

  label{
    text-align: start;
    font-weight:bold;
    font-size: 1.2rem;
  }

  button {
    font-size: 1.1rem;
    font-weight: bold;
    max-width: 14rem;
    width: 10rem;
    height: 3rem;
    border-radius:5px;
    border: 1px solid #131313;
    background-color:#fede80;
    cursor: pointer;
    margin-top:15px;
    transition: all .5s ease-in-out;

    :hover {
      box-shadow: 0 1px 5px #1313136c;
      background-color:#ffd556;
    }
  }

  div, label{
    padding: 5px 0;
  }
`;