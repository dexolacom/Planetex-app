import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: relative;

  @media screen and (max-width: 880px) {
    display: none;
  }
`;

export const BackToTopButton = styled.div`
  position: absolute;
  bottom: 125px;
  right: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 81px;
  height: 81px;
  border: 2.07692px solid #933df6;
  border-radius: 1.03846px;

  // display: none;

  @media screen and (max-width: 880px) {
    // display: block;
  }

  @media screen and (max-width: 576px) {
    // display: none;
  }
`;

export const BackToTopImg = styled.img`
  width: 52px;
  height: 32px;
`;

/*

Deprecated (delete later) ============

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 75%;
  padding-bottom: 50px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColumnContainer = styled.div`
  display: flex;
  gap: 160px;

  @media screen and (max-width: 992px) {
    gap: 85px;
  }

  @media screen and (max-width: 750px) {
    gap: 35px;
  }
`

export const List = styled.ul`
  color: #D4E5FF;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  a {
    color: #D4E5FF;
    text-decoration: none;
    margin-bottom: 8px;
  }

  span {
    margin-bottom: 23px;
  }

  @media screen and (max-width: 992px) {
    font-size: 16px;
  }
`

export const Title = styled.h4`
  margin-bottom: 18px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #D4E5FF;

  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
`

<Column>
    <Title>Contact us</Title>
    <List>
      <span>Listing: listing@planetex.io</span>
      <span>Support: support@planetex.io</span>
      <span>Partnership: info@planetex.io</span>
    </List>
  </Column>

  <ColumnContainer>
    <Column>
      <Title>Products</Title>
      <List>
        <a href="#">Trading</a>
        <a href="#">Exchange</a>
        <a href="#">Launchpad</a>
        <a href="#">Stake Box</a>
      </List>
    </Column>
    <Column>
      <Title>About us</Title>
      <List>
        <a href="#">About Planetex</a>
        <a href="#">Blog</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </List>
    </Column>
</ColumnContainer>

*/
