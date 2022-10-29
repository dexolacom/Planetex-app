// @ts-nocheck
import { useState } from 'react';
import SaleNFTContext from '../SaleNFTContext';
import NFTSaleContent from './NFTSaleContent';
import MyNFTContent from '../MyNFTContent/MyNFTContent';

const SaleNFTSection = () => {
  const [collection, setCollection] = useState([]);
  const [tokens, setTokens] = useState(null);

  return (
    <SaleNFTContext.Provider
      value={{
        collection,
        tokens,
        setCollection,
        setTokens,
      }}
    >
      <NFTSaleContent />
      <MyNFTContent />
    </SaleNFTContext.Provider>
  );
};

export default SaleNFTSection;
