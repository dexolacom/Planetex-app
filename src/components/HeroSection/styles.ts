import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 0 60px 0;

  @media screen and (max-width: 880px) {
    margin: 0 0 40px 0;
  }

  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
    margin: 80px 0 70px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 120px;

  @media screen and (max-width: 880px) {
    margin: 0 auto;
    max-width: 550px;
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

  @media screen and (max-width: 880px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #d4e5ff;
  margin-bottom: 20px;

  @media screen and (max-width: 880px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  max-width: 700px;
  color: #d4e5ff;

  @media screen and (max-width: 880px) {
    font-size: 16px;
    line-height: 19px;
    max-width: 600px;
  }

  @media screen and (max-width: 576px) {
    font-size: 18px;
    max-width: 170px;
  }
`;

export const Thumb = styled.div`
  width: 165px;

  @media screen and (max-width: 880px) {
    width: 145px;
  }

  @media screen and (max-width: 576px) {
    padding-left: ${(props) => (props.title === 'Pre-Sale' ? '10px' : '0')};
    width: 150px;
  }
`;

export const Img = styled.img`
  margin-top: -10px;
  height: ${(props) => (props.title === 'Pre-Sale' ? '122px' : '105px')};

  @media screen and (max-width: 880px) {
    margin-top: -15px;
    margin-top: ${(props) => (props.title === 'Pre-Sale' ? '-15px' : '0')};
    height: ${(props) => (props.title === 'Pre-Sale' ? '110px' : '80px')};
  }

  @media screen and (max-width: 576px) {
    margin-top: 0px;
    height: ${(props) => (props.title === 'Pre-Sale' ? '115px' : '110px;')};
  }
`;
