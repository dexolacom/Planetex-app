import styled from 'styled-components';
import { OutlineButton } from '../../theme';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg';
import { ReactComponent as Metamask } from '../../assets/images/metamask.svg';
import { ReactComponent as WalletConnect } from '../../assets/images/walletConnect.svg';
import { ReactComponent as CoinBase } from '../../assets/images/coinbase.svg';

export const Wrapper = styled.div`
  position: relative;
  clip-path: polygon(8% 0,100% 0,100% 100%,0 100%,0 12%);
  background: linear-gradient(0deg, rgba(37, 37, 102, 0.78), rgba(37, 37, 102, 0.78)), linear-gradient(98.66deg, rgba(31, 53, 255, 0.77) 2.6%, rgba(31, 53, 255, 0) 37.15%, rgba(31, 53, 255, 0.0116456) 63.04%, rgba(31, 53, 255, 0.7) 100%);
  border: 1px solid #372458;
  backdrop-filter: blur(3.5px);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  gap: 25px;
`

export const WalletButton = styled(OutlineButton)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  @media screen and (max-width: 880px) {
    padding: 15px 45px;
    font-size: 18px;
  }

  @media screen and (max-width: 576px) {
    padding: 15px 45px;
    font-size: 18px;
  }
`

export const CrossIcon = styled(Cross)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  cursor: pointer;
`

export const MetamaskIcon = styled(Metamask)`
  width: 25px;
  margin-right: 15px;
  height: 25px;
`

export const WalletConnectIcon = styled(WalletConnect)`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`

export const CoinbaseIcon = styled(CoinBase)`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`
