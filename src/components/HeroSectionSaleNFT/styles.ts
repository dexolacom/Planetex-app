import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 35px;
  margin-bottom: 85px;
  // background-color: teal;

  @media screen and (max-width: 576px) {
    padding-top: 20px;
    margin-bottom: 70px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 120px;

  @media screen and (max-width: 880px) {
    margin 0 auto;
    max-width: 510px;
  }
`;

export const MobileContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-family: 'Zen Dots', cursive;
  font-size: 24px;
  font-style: italic;
  // font-weight: 700;
  line-height: 29px;
  color: #d4e5ff;
  margin-bottom: 10px;

  @media screen and (max-width: 880px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 25px;
  }
`;

export const Text = styled.p`
  max-width: 700px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.015em;
  color: #d4e5ff;

  @media screen and (max-width: 880px) {
    font-size: 16px;
    line-height: 19px;
  }

  @media screen and (max-width: 576px) {
    max-width: 170px;
    font-size: 18px;
    line-height: 21px;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 155px;
  height: 100%;

  @media screen and (max-width: 880px) {
    width: 200px;
  }

  @media screen and (max-width: 576px) {
    width: 165px;
    height: 130px;
  }
`;

export const Img = styled.img`
  height: 100px;

  @media screen and (max-width: 880px) {
    height: 85px;
  }

  @media screen and (max-width: 576px) {
    height: 120px;
  }
`;
