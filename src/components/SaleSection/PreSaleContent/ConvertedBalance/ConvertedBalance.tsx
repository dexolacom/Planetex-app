import React from 'react';
import { Wrapper } from './styles';
import { useWeb3React } from '@web3-react/core';
import { ConvertedBalanceProps } from '../../../../constants/types';


const ConvertedBalance = ({convertedToUSDPltxAmount, convertedToPltxAmount, tokenName}:ConvertedBalanceProps) => {
  const { account } = useWeb3React()

  return (
    <Wrapper filter={account ? '' : 'grayscale(1)'} color={!account ? '#762ACE' : '#5e626c'}>
      0 PLTEX
    </Wrapper>
  );
};

export default ConvertedBalance;