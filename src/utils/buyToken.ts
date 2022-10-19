import { getTokenSaleContract } from './contracts';
import { getDecimals } from './utils';


export const buyToken = async (
  chainId: number | undefined,
  tokenAmount: number | string,
  account: any,
  tokenName: string,
  setIsTransSuccessModal: (b: boolean) => void,
  setIsTransErrorModal: (b: boolean) => void,
  setIsTransLoading: (b: boolean) => void
) => {
  const contract = await getTokenSaleContract(chainId)
  const isRoundStarted = await contract.methods.isRoundStared(0).call()

  if (!isRoundStarted) return console.log('Round not started')

  const formattedAmount = (+tokenAmount * getDecimals(tokenName)).toLocaleString('fullwide', { useGrouping: false })
  setIsTransLoading(true)

  try {
    if (tokenName === 'BUSD' || tokenName === 'USDT') {
      return await contract.methods
        .buyForErc20(0, formattedAmount)
        .send({from: account})
        .on('receipt', function(receipt: any) {
          setIsTransSuccessModal(true)
          setIsTransLoading(false)
        })
        .on('error', function(error: any) {
          setIsTransErrorModal(true)
          setIsTransLoading(false)
        })
      }

    return await contract.methods
      .buyForEth(0)
      .send({from: account, value: formattedAmount })
      .on('receipt', function(receipt: any) {
        setIsTransSuccessModal(true)
        setIsTransLoading(false)
      })
      .on('error', function(error: any) {
        setIsTransErrorModal(true)
        setIsTransLoading(false)
      })
  } catch (e) {
    console.error(e)
  }
};