import styled from 'styled-components'
import theme from '../../styles/theme'

export const Topo = styled.div`
  width: 100%;
  display: flex;
  background: ${theme.colors.white};
  height: 4rem;
  align-items: center;
  padding: 0 2rem;
  gap: 1rem;
  box-shadow: 1px 1px 6px 1px #00000050;

  ul{
    list-style: none;
    display: flex;
    width: 100%;    
    justify-content: space-evenly;
    gap: 1rem;
  }
  div:nth-child(1), div:nth-child(1) a{
    width: 100px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    text-decoration:none;
    color: white;
  }
  div:nth-child(1) img{
    width: 45px;
    height: 45px;
  }

  a{
    font-weight: ${theme.font.semiBold};
    text-decoration:none;
    color: black;
  }

  div:nth-child(3){
    position: absolute;
    right: 2rem;
    cursor:pointer;
    text-align:center;  
  }
`
