import React from 'react';
import { SaleSectionProps } from '../../constants/types';
import PreSaleContent from './PreSaleContent/PreSaleContent';
import NftSaleContent from './NftSaleContent/NftSaleContent';

const SaleSection = ({ title }: SaleSectionProps) => {
  return (
    <div>
      {title === 'Pre-Sale' && <PreSaleContent/>}
      {title === 'NFT-Sale' && <NftSaleContent/>}
    </div>
  );
};

export default SaleSection;
