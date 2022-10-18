import { getTokenSaleContract } from './contracts';


export const buyToken = async (
  chainId: number | undefined,
  tokenAmount: string,
  account: any,
  tokenName: string,
  setIsTransSuccessModal: (b: boolean) => void,
  setIsTransErrorModal: (b: boolean) => void
) => {
  const contract = await getTokenSaleContract(chainId)
  const isRoundStarted = await contract.methods.isRoundStared(0).call()

  if (!isRoundStarted) return console.log('Round not started')
  const formattedAmount = (+tokenAmount * 10 ** 18).toString()

  try {
      if (tokenName === 'BUSD' || tokenName === 'USDT') {
        return await contract.methods
          .buyForErc20(0, formattedAmount)
          .send({from: account})
        // .on('transactionHash', function(hash: string) {
        //
        // })
        .on('receipt', function(receipt: any) {
          setIsTransSuccessModal(true)
        })
        .on('error', function(error: any) {
          setIsTransErrorModal(true)
        })
      }
    return await contract.methods
      .buyForEth(0)
      .send({from: account, value: tokenAmount })
      // .on('transactionHash', function(hash: string) {
      //
      // })
      .on('receipt', function(receipt: any) {
        setIsTransSuccessModal(true)
      })
      .on('error', function(error: any) {
        setIsTransErrorModal(true)
      })
  } catch (e) {
    console.error(e)
  }

};