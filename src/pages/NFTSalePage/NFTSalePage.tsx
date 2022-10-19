import { FullScreenTheme, HeroSectionTheme } from '../../theme';
// import { FullScreenTheme, NFTSaleContentTheme2 } from '../../../theme';
import HeroSection from '../../components/HeroSection/HeroSection';
import { heroInfo } from '../../constants/constants';
import SaleSection from '../../components/SaleSection/SaleSection';

const NFTSalePage = () => {
  const { nftSale } = heroInfo;

  return (
    <>
      <FullScreenTheme>
        <HeroSectionTheme>
          <HeroSection
            title={nftSale?.title}
            text={nftSale?.text}
            img={nftSale?.img}
          />
        </HeroSectionTheme>
      </FullScreenTheme>
      <SaleSection title={nftSale?.title} />
    </>
  );
};

export default NFTSalePage;
