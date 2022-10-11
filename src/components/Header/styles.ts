import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0 45px;
  width: 100%;
  justify-content: space-between;
`

export const Logo = styled(LogoIcon)`
  margin-bottom: 6px;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const Links = styled.div`
  display: flex;
  gap: 35px;
`

export const RouterLink = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-decoration: none;
  color: #D4E5FF;
  
  &:hover,
  &:active,
  &:focus {
    color: #9E40B5;
  }
`
