import React from 'react';
import { Wrapper } from './styles';
import { useWeb3React } from '@web3-react/core';


const ConvertedBalance = () => {
  const { account } = useWeb3React()

  return (
    <Wrapper filter={account ? '' : 'grayscale(1)'} color={!account ? '#762ACE' : '#5e626c'}>
      0 PLTEX
    </Wrapper>
  );
};

export default ConvertedBalance;