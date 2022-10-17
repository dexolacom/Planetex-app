// @ts-ignore
import presale from '../assets/images/presale.svg'
import Web3 from 'web3';

export const web3 = new Web3(Web3.givenProvider)

export const heroInfo = {
  presale: {
    title: 'Pre-Sale',
    text: 'Planetex account and wallet creation. Keep track of your orders in real time with in depth market analysis.',
    img: presale
  }
}