import { Suspense, lazy } from 'react';
import { SaleSectionProps } from '../../constants/types';

const PreSaleContent = lazy(() => import('./PreSaleContent/PreSaleContent'));
const NFTSaleContent = lazy(() => import('./MintNFTContent/NftSaleContent'));

const SaleSection = ({ title }: SaleSectionProps) => {
  return (
    <div>
      {title === 'Pre-Sale' && (
        <Suspense>
          <PreSaleContent />
        </Suspense>
      )}
      {title === 'NFT-Sale' && (
        <Suspense>
          <NFTSaleContent />
        </Suspense>
      )}
    </div>
  );
};

export default SaleSection;
