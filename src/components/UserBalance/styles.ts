import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 14px 16px;
  border: 2px solid #811FFF;
  border-radius: 1px;
  color: #D4E5FF;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  position: absolute;
  top: 180px;
  right: 85px;
  text-align: center;
  
  @media screen and (max-width: 1185px) {
    top: 130px;
  }

  @media screen and (max-width: 880px) {
    right: 45px;
    top: 110px;
  }

  @media screen and (max-width: 576px) {
    font-size: 20px;
    padding: 7px 16px;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 420px) {
    padding: 5px 8px;
  }
`