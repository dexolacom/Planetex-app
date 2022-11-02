import styled from 'styled-components';

export const SolidButton = styled.button<{ padding?: string }>`
  padding: 18px 50px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #d4e5ff;
  background-color: #933df6;
  border-radius: 60px;
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #af6aff;
  }

  &:disabled {
    background: #8558b9;
    cursor: auto;
  }
`;

export const OutlineButton = styled.button<{padding?: string, isActive?: boolean}>`
  padding: 15px 45px;
  border: ${({isActive}) => isActive ? '2px solid transparent' : '2px solid #9e40b5'}; 
  border-radius: 45px;
  color: ${({isActive}) => isActive ? '#D4E5FF' : '#9e40b5'};
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  background-color: ${({isActive}) => isActive ? '#9E40B5' : 'transparent'};
  cursor: pointer;
  
  &:hover {
    background-color: ${({isActive}) => isActive ? '#9E40B5' : '#150A25'};
    color: ${({isActive}) => isActive ? '#D4E5FF' : '#9E40B5'};
    border:  2px solid #9E40B5;
  }

  @media screen and (max-width: 880px) {
    font-size: 16px;
    padding: 12px 23px;
  }

  @media screen and (max-width: 576px) {
    font-size: 12px;
    padding: 2px 12px;
  }
`;

export const Line = styled.div`
  background-color: #423b49;
  height: 1px;
  margin-left: 45px;
  width: calc(100% - 90px);
  margin-bottom: 65px;
`;

export const Content = styled.div`
  max-width: 970px;
  margin: 70px 45px 170px 150px;

  @media screen and (max-width: 1200px) {
    margin: 70px 45px 170px 100px;
  }

  @media screen and (max-width: 880px) {
    margin: 70px 40px;
  }

  @media screen and (max-width: 576px) {
    margin: 40px 20px;
  }
`;

// export const HeroSectionTheme = styled.div`
//   max-width: 970px;
//   margin: 70px 45px 0px 0px;

//   @media screen and (max-width: 1200px) {
//     margin: 70px 45px 0px 100px;
//   }

//   @media screen and (max-width: 880px) {
//     margin: 70px 40px 0;
//   }

//   @media screen and (max-width: 576px) {
//     margin: 40px 20px 0;
//   }
// `;

export const FullScreenTheme = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 0 auto;
  max-width: 1330px;
  padding: 0 40px;
  // background-color: red;

  @media screen and (max-width: 880px) {
    padding: 0 20px;
  }
`;
