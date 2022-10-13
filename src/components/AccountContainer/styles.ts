import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/icons/walletArrow.svg';


export const Wrapper = styled.div`
  background: linear-gradient(90deg, #811FFF 10.97%, #A96DFD 60.03%, #C9A6FD 100%);
  box-shadow: inset 0 4px 14px #811FFF;
  border-radius: 10px;
`

export const Content = styled.div`
  padding: 10px 12px 10px 14px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 576px) {
    font-size: 12px;
    padding: 8px 9px 8px 12px;
  }
`

export const WalletContainer = styled.div`
  background: #D4E5FF;
  border-radius: 10px;
  padding: 8px 12px;
  font-family: 'IBM Plex Sans', sans-serif;

  @media screen and (max-width: 880px) {
    font-size: 14px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`

export const ArrowIcon = styled(Arrow)`
  margin-right: 10px;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    margin-right: 6px;
    width: 21px;
  }
`