import React from 'react';
import { Content, Wrapper, WalletContainer, ArrowIcon } from './styles';
import { disconnectWallet, stringTrim } from '../../../utils/utils';
import { useWeb3React } from '@web3-react/core';

const AccountContainer = () => {
  const { account, deactivate } = useWeb3React()
  
  return (
    <Wrapper>
      <Content>
        <ArrowIcon onClick={() => disconnectWallet(deactivate)}/>
        <WalletContainer>
          <span>{stringTrim(account, 14)}</span>
        </WalletContainer>
      </Content>
    </Wrapper>
  );
};

export default AccountContainer;