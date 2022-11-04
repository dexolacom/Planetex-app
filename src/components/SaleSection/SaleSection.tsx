import { SaleSectionProps } from '../../constants/types';
import PreSaleContent from './PreSaleContent/PreSaleContent';
import NFTSaleContent from './MintNFTContent/NftSaleContent';

const SaleSection = ({ title }: SaleSectionProps) => {
  return (
    <div>
      {title === 'Pre-Sale' && <PreSaleContent />}
      {title === 'NFT-Sale' && <NFTSaleContent />}
    </div>
  );
};

export default SaleSection;
