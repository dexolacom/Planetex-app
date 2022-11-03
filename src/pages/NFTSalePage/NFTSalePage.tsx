import { Content } from '../../theme';
import { heroInfo } from '../../constants/constants';
import SaleSection from '../../components/SaleSection/SaleSection';
import HeroSection from '../../components/HeroSection/HeroSection';
const NFTSalePage = () => {
  const { nftSale } = heroInfo;

  return (
    <>
      <Content>
        <HeroSection
          title={nftSale?.title}
          text={nftSale?.text}
          img={nftSale?.img}
          isNFT={true}
        />
      </Content>
      <SaleSection title={nftSale?.title} />
    </>
  );
};

export default NFTSalePage;
