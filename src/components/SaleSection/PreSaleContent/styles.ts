import styled from 'styled-components';

export const Wrapper = styled.div`
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 12%);
  border: 1px solid #372458;
`;

export const Content = styled.div`
  padding: 75px 120px 80px 120px;
  background: linear-gradient(
    98.66deg,
    rgba(31, 53, 255, 0.29) 2.6%,
    rgba(31, 53, 255, 0) 26.21%,
    rgba(31, 53, 255, 0.0116456) 73.39%,
    rgba(31, 53, 255, 0.24) 100%
  );
  backdrop-filter: blur(3.5px);

  @media screen and (max-width: 880px) {
    padding: 45px 45px 55px 95px;
  }

  @media screen and (max-width: 768px) {
    padding: 45px 55px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 576px) {
    padding: 23px 40px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 90px;
  margin-bottom: 35px;

  @media screen and (max-width: 880px) {
    gap: 70px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 59px;
  color: #d4e5ff;

  @media screen and (max-width: 1100px) {
    font-size: 35px;
    line-height: 35px;
  }

  @media screen and (max-width: 992px) {
    font-size: 30px;
  }
`;

export const Tag = styled.div`
  background: linear-gradient(
    90deg,
    #73248f 0%,
    rgba(22, 153, 201, 0.53) 64.18%,
    rgba(9, 21, 89, 0.968648) 92.22%,
    #040643 100%
  );
  backdrop-filter: blur(3.5px);
  border-radius: 7px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #d4e5ff;
  padding: 10px 27px;

  @media screen and (max-width: 1100px) {
    font-size: 16px;
    padding: 10px 15px;
  }

  @media screen and (max-width: 992px) {
    font-size: 14px;
    line-height: 17px;
    padding: 9px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #bdccea;
  margin-bottom: 50px;

  @media screen and (max-width: 880px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const InputError = styled.span`
  color: #582424;
  font-size: 16px;
  font-weight: 600;
`;

export const InputWarning = styled(InputError)`
  color: #7c4d1d;
`;
