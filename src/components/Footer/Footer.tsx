import React from 'react';
import { Column, ColumnContainer, List, Title, Wrapper } from './styles';


const Footer = () => {
  return (
    <Wrapper>
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
            <a href='#'>Trading</a>
            <a href='#'>Exchange</a>
            <a href='#'>Launchpad</a>
            <a href='#'>Stake Box</a>
          </List>
        </Column>
        <Column>
          <Title>About us</Title>
          <List>
            <a href='#'>About Planetex</a>
            <a href='#'>Blog</a>
            <a href='#'>Terms</a>
            <a href='#'>Privacy</a>
          </List>
        </Column>
      </ColumnContainer>

    </Wrapper>
  );
};

export default Footer;