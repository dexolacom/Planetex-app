import React from 'react';
import { Content, Wrapper, WalletContainer, ArrowIcon } from './styles';
import { stringTrim } from '../../utils/utils';

const AccountContainer = () => {
  return (
    <Wrapper>
      <Content>
        <ArrowIcon/>
        <WalletContainer>
          <span>{stringTrim('0x7ff7DAb2f9538613E68ddeAAb823DF55CEB56c42', 14)}</span>
        </WalletContainer>
      </Content>
    </Wrapper>
  );
};

export default AccountContainer;