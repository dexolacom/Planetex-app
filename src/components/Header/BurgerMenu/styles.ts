import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { OutlineButton } from '../../../theme';

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
`

export const Link = styled.a`
  font-weight: 700;
  line-height: 22px;
  text-decoration: none;
  color: #868b8b;
  cursor: auto;
  font-size: 24px;
`

export const RouterLink = styled(NavLink)`
  font-weight: 700;
  line-height: 22px;
  text-decoration: none;
  color: #D4E5FF;
  font-size: 24px;
`

export const ConnectButton = styled(OutlineButton)`
  padding: 13px 62px;

  &:hover {
    background-color: #150A25;
    color: #9E40B5;
    border:  2px solid #9E40B5;
  }
  
  @media screen and (max-width: 880px) {
    font-size: 18px;
  }
`