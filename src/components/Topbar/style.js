import styled from 'styled-components'
import theme from '../../styles/theme'

export const Topo = styled.div`
  width: 100%;
  display: flex;
  background: ${theme.colors.navDark};
  height: 4rem;
  color: ${theme.colors.white};
  align-items: center;
  padding: 0 2rem;
  gap: 1rem;

  ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 100%;    
  }
  div:nth-child(1), div:nth-child(1) a{
    border-radius: 50%;
    width: 100px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    background: ${theme.colors.primaryDark};
    text-decoration:none;
    color: white;
  }
  div:nth-child(1) img{
    width: 50px;
    height: 50px;
  }

  a{
    font-weight: ${theme.font.regular};
    text-decoration:none;
    color:white;
  }
`
