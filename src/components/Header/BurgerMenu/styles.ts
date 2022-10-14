import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  background: rgba(1, 2, 4, 0.79);
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9999;
  touch-action: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  backdrop-filter: blur(4px);
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 50px;
  
  a {
    font-weight: 700;
    line-height: 22px;
    text-decoration: none;
    color: #D4E5FF;
    font-size: 24px;
  }
`

export const RouterLink = styled(NavLink)`
  font-weight: 700;
  line-height: 22px;
  text-decoration: none;
  color: #D4E5FF;
  font-size: 24px;
`