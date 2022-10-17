// @ts-ignore
import presale from '../assets/images/presale.svg';
import nftSale from '../assets/images/heroNFTSale.svg';
import Web3 from 'web3';

export const web3 = new Web3(Web3.givenProvider)
export const maxApproveAmount = '115792089237316195423570985008687907853269984665640564039457584007913129639935'

export const heroInfo = {
  presale: {
    title: 'Pre-Sale',
    text: 'Planetex account and wallet creation. Keep track of your orders in real time with in depth market analysis.',
    img: presale,
  },
  nftSale: {
    title: 'NFT-Sale',
    text: 'Planetex account and wallet creation. Keep track of your orders in real time with in depth market analysis.',
    img: nftSale,
  },
};
