import styled from 'styled-components';
import { ReactComponent as Cross } from '../../assets/icons/cross.svg';
// @ts-ignore
import modalBackground from '../../assets/images/modalBackground.png'

export const Wrapper = styled.div`
  position: relative;
  clip-path: polygon(8% 0,100% 0,100% 100%,0 100%,0 12%);
  background: linear-gradient(0deg, rgba(37, 37, 102, 0.78), rgba(37, 37, 102, 0.78)), linear-gradient(98.66deg, rgba(31, 53, 255, 0.77) 2.6%, rgba(31, 53, 255, 0) 37.15%, rgba(31, 53, 255, 0.0116456) 63.04%, rgba(31, 53, 255, 0.7) 100%);
  border: 1px solid #372458;
  backdrop-filter: blur(3.5px);
`

export const CrossIcon = styled(Cross)`
  position: absolute;
  top: 21px;
  right: 25px;
  cursor: pointer;
`

export const Content = styled.div`
  padding: 100px 130px 90px 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
  background-image: url(${modalBackground});
  
  @media screen and (max-width: 576px) {
    padding: 100px 70px 90px 70px;
  }
`

export const Title = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #FFFFFF;

  @media screen and (max-width: 576px) {
    font-size: 24px;
  }
`