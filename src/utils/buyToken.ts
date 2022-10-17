import { getContract } from './blockchainUtils';


export const buyToken = async (chainId: number | undefined) => {
  const contract = getContract(chainId)
  const isRoundStarted = await contract.methods.isRoundStared(0).call()

  if (isRoundStarted) {
    console.log(1);
  } else {
    return console.log('Round not started')
  }
};