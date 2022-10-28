import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import { getUserBalanceSum } from '../../utils/utils';
import { useWeb3React } from '@web3-react/core';


const UserBalance = () => {
  const [userBalance, setUserBalance] = useState('')
  const { account } = useWeb3React()

  useEffect(() => {
    if (account) {
      // @ts-ignore
      getUserBalanceSum(account).then(res => setUserBalance(res))
    }
  }, [account]);

  return (
    <Wrapper>
      PLTEX = {userBalance}
    </Wrapper>
  );
};

export default UserBalance;