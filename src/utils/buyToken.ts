/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTokenSaleContract, getPlanetexTokenContract } from './contracts';
import { getDecimals } from './utils';

export const buyToken = async (
  chainId: number | undefined,
  tokenAmount: number | string,
  account: any,
  tokenName: string,
  setIsTransSuccessModal: (b: boolean) => void,
  setIsTransErrorModal: (b: boolean) => void,
  setIsTransLoading: (b: boolean) => void,
) => {
  const contract = await getTokenSaleContract(chainId);
  const isRoundStarted = await contract.methods.isRoundStared(1).call();

  if (!isRoundStarted) return console.log('Round not started');

  const formattedAmount = (
    +tokenAmount * getDecimals(tokenName)
  ).toLocaleString('fullwide', { useGrouping: false });
  setIsTransLoading(true);
  try {
    if (tokenName === 'BUSD' || tokenName === 'USDT') {
      return await contract.methods
        .buyForErc20(1, formattedAmount)
        .send({ from: account })
        .on('receipt', function (receipt: any) {
          setIsTransSuccessModal(true);
          setIsTransLoading(false);
        })
        .on('error', function (error: any) {
          setIsTransErrorModal(true);
          setIsTransLoading(false);
        });
    }

    console.log('account -->', account);
    console.log('formattedAmount -->', formattedAmount);

    return await contract.methods
      .buyForEth(1)
      .send({ from: account, value: formattedAmount })
      .on('receipt', function (receipt: any) {
        setIsTransSuccessModal(true);
        setIsTransLoading(false);
      })
      .on('error', function (error: any) {
        setIsTransErrorModal(true);
        setIsTransLoading(false);
      });
  } catch (e) {
    console.error(e);
  }
};

export const buyNftToken = async (
  chainId: number | undefined,
  account: any,
  tokenName: string,
  setIsTransSuccessModal: (b: boolean) => void,
  setIsTransErrorModal: (b: boolean) => void,
  setIsTransLoading: (b: boolean) => void,
) => {
  const contract = getPlanetexTokenContract(chainId);
  const isSaleStarted = await contract.methods.isSaleStarted().call();

  if (!isSaleStarted) return console.log('Round not started');

  setIsTransLoading(true);

  try {
    if (tokenName === 'USDT') {
      return await contract.methods
        .buyForErc20()
        .send({ from: account })
        .on('receipt', function (receipt: any) {
          setIsTransSuccessModal(true);
          setIsTransLoading(false);
        })
        .on('error', function (error: any) {
          setIsTransErrorModal(true);
          setIsTransLoading(false);
        });
    }

    const ethValue = await contract.methods
      .getEthPurchaseAmount()
      .call({ from: account });

    return await contract.methods
      .buyForEth()
      .send({ from: account, value: ethValue })
      .on('receipt', function (receipt: any) {
        setIsTransSuccessModal(true);
        setIsTransLoading(false);
      })
      .on('error', function (error: any) {
        setIsTransErrorModal(true);
        setIsTransLoading(false);
      });
  } catch (e) {
    console.error(e);
  }
};
