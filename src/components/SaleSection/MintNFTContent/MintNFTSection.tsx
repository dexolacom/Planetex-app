// @ts-nocheck
import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import SaleNFTContext from '../SaleNFTContext';
// import MyNFTContent from '../MyNFTContent/MyNFTContent';
import NFTSaleContent from './NftSaleContent';
import { getPlanetexTokenContract } from '../../../utils/contracts';

const MintNFTSection = () => {
  // const [collection, setCollection] = useState([]);
  // const [tokens, setTokens] = useState(null);
  // const [ids_, setIds_] = useState(null);

  // const { chainId, account } = useWeb3React();

  // const NFTContract = chainId && getPlanetexTokenContract(chainId);

  // useEffect(() => {
  //   console.log('ids_ uE', ids_);
  //   account === undefined && setIds_(null);
  //   account !== undefined && checkUserTokens();
  // }, [account]);

  // const checkUserTokens = async () => {
  //   ids_ === null &&
  //     setIds_(await NFTContract.methods.userTokens(account).call());
  // };

  // console.log('ids_ 1', ids_);

  return (
    <NFTSaleContent />
    // <SaleNFTContext.Provider
    //   value={{
    //     ids_,
    //     collection,
    //     tokens,
    //     setIds_,
    //     setCollection,
    //     setTokens,
    //   }}
    // >
    //   <NFTSaleContent />
    //   {/* {ids_?.length > 0 && <MyNFTContent />} */}
    // </SaleNFTContext.Provider>
  );
};

export default MintNFTSection;
