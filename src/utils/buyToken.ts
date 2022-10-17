import { getTokenSaleContract } from './contracts';


export const buyToken = async (chainId: number | undefined, tokenAmount: string, account: any) => {
  const contract = await getTokenSaleContract(chainId)
  const isRoundStarted = await contract.methods.isRoundStared(0).call()

  if (!isRoundStarted) return console.log('Round not started')

  try {
    if (chainId === 5 || chainId === 97) {
      const formattedAmount = (+tokenAmount * 10 ** 18).toString()
      return await contract.methods
        .buyForErc20(0, formattedAmount)
        .send({from: account})
        // .on('transactionHash', function(hash: string) {
        //
        // })
        // .on('receipt', function(receipt: any) {
        //
        // })
        // .on('error', function(error: any) {
        //
        // })
    }
    // return await contract.methods
    //   .buyForЕth(tokenAmount, 0).call()
    //   .send({ value: tokenAmount })
    //   .on('transactionHash', function(hash: string) {
    //
    //   })
    //   .on('receipt', function(receipt: any) {
    //
    //   })
    //   .on('error', function(error: any) {
    //
    //   })
  } catch (e) {
    console.error(e)
  }

};