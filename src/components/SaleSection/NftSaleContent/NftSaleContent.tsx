import { SolidButton } from '../../../theme';
import {
  Title,
  Wrapper,
  Text,
  TitleContainer,
  // Select,
  Content,
} from './styles';
import { useWeb3React } from '@web3-react/core';
import { buyToken } from '../../../utils/buyToken';

const NftSaleContent = () => {
  const { chainId } = useWeb3React();

  // return <div>nft</div>;

  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <Title>NFT-Sale</Title>
        </TitleContainer>
        <Text>
          Stake your SEAN up to 35 days to earn extra SEAN.ur SEAN up to 35 days
          to earn extra SEays to earn extra SEto earn extra SEAN.ur SEAN up to
          35 days extra SEAN.ur SEAN up to 35 days to earn extra SEays to earn
          extra SEto earn extra SEAN.ur SEA
        </Text>
        {/* <SolidButton onClick={() => buyToken(chainId)}>Mint</SolidButton> */}
      </Content>
    </Wrapper>
  );
};

export default NftSaleContent;
