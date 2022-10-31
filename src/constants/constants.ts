import presale from '../assets/images/presale.svg';
// @ts-ignore
import nftSale from '../assets/images/_heroNFTSale.png';
import Web3 from 'web3';

export const web3 = new Web3(Web3.givenProvider);
export const maxApproveAmount =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935';

export const heroInfo = {
  presale: {
    title: 'Pre-Sale',
    text: 'Planetex account and wallet creation. Keep track of your orders in real time with in depth market analysis.',
    img: presale,
  },
  nftSale: {
    title: 'NFT-Sale',
    text: 'Connect your wallet in a couple of clicks and mint your character for the game',
    img: nftSale,
  },
};
