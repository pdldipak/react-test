import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavBar = styled.div`
  padding: 20px 50px;
  background: #30475e;
  display: flex;
  justify-content: space-around;
  position: relative;
`

export const Link = styled(NavLink)`
  padding: 5px;
  color: #ffffff;
  text-decoration: none !important;
  font-size: 24px;
  font-weight: bold;
`

export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & {
    font-size: 20px;
  }
`

export const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px auto;
  border: 16px solid #f3f3f3;
  border-top: 16px solid #30475e;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
