import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 0 45px 0;

  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 25px;

  @media screen and (max-width: 880px) {
    width: 80%;
  }
`

export const MobileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MobileContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #D4E5FF;
  margin-bottom: 20px;
`

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  max-width: 700px;
  color: #D4E5FF;

  @media screen and (max-width: 880px) {
    font-size: 16px;
    line-height: 19px;
  }

  @media screen and (max-width: 576px) {
    max-width: 150px;
  }
`

export const Img = styled.img`
  margin-top: -20px;

  @media screen and (max-width: 576px) {
    margin-top: 0;
  }
`