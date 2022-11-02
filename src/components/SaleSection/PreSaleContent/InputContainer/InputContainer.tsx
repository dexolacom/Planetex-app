import React, { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InputContainerProps } from '../../../../constants/types';
import { Input, InputBlock, InputInfo, Select, Wrapper, SelectBlock } from './styles';
import ConvertedBalance from '../ConvertedBalance/ConvertedBalance';

const InputContainer = ({
  tokenAmount,
  tokenName,
  convertedToUSDPltxAmount,
  convertedToPltxAmount,
  isInputAmountError,
  isWalletWarning,
  isApproveWarning,
  setTokenAmount,
  setTokenName,
  setIsInputAmountError,
  setIsApproveWarning
}:InputContainerProps) => {

  const { account, chainId } = useWeb3React()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target.value).replace(/^0\d{1}$/, '');
    setIsApproveWarning(false)

    if (value.match(/^[0-9]*[.,]?[0-9]*$/)) {
      if (+value >= 10 || +value === 0) {
        setIsInputAmountError(false)
        return setTokenAmount(value);
      }

      setIsInputAmountError(true)
      return setTokenAmount(value);
    }
  };

  useEffect(() => {
    // get initial tokenName
    if (chainId === 97 || chainId === 56 ) setTokenName('BNB')
    if (chainId === 5 || chainId === 1) setTokenName('ETH')
  }, [chainId]);

  return (
    <Wrapper marginBottom={(isInputAmountError || isWalletWarning || isApproveWarning) ? '5px' : '30px'}>
      {/*@ts-ignore*/}
      <InputBlock border={isInputAmountError ? '1px solid #582424' : '1px solid #372458'} filter={account ? '' : 'grayscale(1)'}>
        <Input
          disabled={!account}
          type='number'
          value={tokenAmount}
          onChange={(e) => handleInputChange(e)}
          placeholder={'0.0'}
          inputMode="decimal"
          maxLength={10}
        />
        {/*@ts-ignore*/}
        <InputInfo color={!account ? '#762ACE' : '#5e626c'} border={!account ? '2px solid #762ACE' : '2px solid #5e626c'}>
          {tokenName === 'USDT' || tokenName === 'BUSD'
            ? `${tokenAmount || '0.00'} $`
            : `${convertedToUSDPltxAmount || '0.00'} $`
          }

        </InputInfo>
      </InputBlock>

      <SelectBlock>
        <ConvertedBalance
          convertedToUSDPltxAmount={convertedToUSDPltxAmount}
          convertedToPltxAmount={convertedToPltxAmount}
          tokenName={tokenName}
        />
        {/*@ts-ignore*/}
        <Select disabled={!account} filter={account ? '' : 'grayscale(1)'} color={!account ? '#5e626c' : ''} id='tokenSelect' value={tokenName} onChange={(e) => setTokenName(e.target.value)}>
          {(chainId === 97 || chainId === 56 )
            ? <>
              <option value='BNB'>BNB</option>
              <option value='BUSD'>BUSD</option>
            </>
            : <>
              <option value='ETH'>ETH</option>
              <option value='USDT'>USDT</option>
            </>
          }
        </Select>
      </SelectBlock>

    </Wrapper>
  );
};

export default InputContainer;