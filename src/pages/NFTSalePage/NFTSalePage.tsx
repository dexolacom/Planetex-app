import { FullScreenTheme } from '../../theme';
// import { FullScreenTheme, NFTSaleContentTheme2 } from '../../../theme';
import HeroSectionSaleNFT from '../../components/HeroSectionSaleNFT/HeroSectionSaleNFT';
import { heroInfo } from '../../constants/constants';
import SaleSection from '../../components/SaleSection/SaleSection';

const NFTSalePage = () => {
  const { nftSale } = heroInfo;

  return (
    <>
      <FullScreenTheme>
        <HeroSectionSaleNFT
          title={nftSale?.title}
          text={nftSale?.text}
          img={nftSale?.img}
        />
      </FullScreenTheme>
      <SaleSection title={nftSale?.title} />
    </>
  );
};

export default NFTSalePage;
