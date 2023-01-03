// @ts-nocheck
import { useState } from 'react';
import SaleNFTContext from '../SaleNFTContext';
import MyNFTContent from '../MyNFTContent/MyNFTContent';
import NFTSaleContent from './NftSaleContent';
import { Content } from '../../../theme';

const MintNFTSection = () => {
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
      <Content >
        <NFTSaleContent />
      </Content>
      <MyNFTContent />
    </SaleNFTContext.Provider>
  );
};

export default MintNFTSection;
