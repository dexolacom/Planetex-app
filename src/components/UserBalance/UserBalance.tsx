import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import { getUserBalanceSum } from '../../utils/utils';
import { useWeb3React } from '@web3-react/core';
import Loader from '../Loader/Loader';
import { useTransactionContext } from '../../contexts/transactionContext';

const UserBalance = () => {
  const [userBalance, setUserBalance] = useState('');
  const { isTransSuccessModal } = useTransactionContext();
  const { account } = useWeb3React();

  useEffect(() => {
    if (account) {
      // @ts-ignore3
      getUserBalanceSum(account).then((res) => setUserBalance(res));
    }
  }, []);

  useEffect(() => {
    if (account) {
      // @ts-ignore3
      getUserBalanceSum(account).then((res) => setUserBalance(res));
    }
  }, [isTransSuccessModal]);

  return (
    <Wrapper>
      PLTEX ={' '}
      {userBalance ? (
        userBalance
      ) : (
        <Loader size={'20px'} margin={'0 0 0 5px'} />
      )}
    </Wrapper>
  );
};

export default UserBalance;
