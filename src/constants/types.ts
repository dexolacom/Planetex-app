export interface HeroProps {
  title: string;
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
}

export interface NFTSaleProps {
  paddingRight?: string;
  marginRight?: string;
  width?: string;
  height?: string;
}

export interface MyNFTProps {
  url: string;
  padding?: string;
}

export interface SaleSectionProps {
  title: string;
}

export interface HeaderProps {
  isBurgerMenu: boolean;
  setIsBurgerMenu: (b: boolean) => void;
}

export interface BackdropProps {
  setIsModalOpen: (b: boolean) => void;
  children: JSX.Element;
}

export interface StatusModalProps {
  setIsModalOpen: (b: boolean) => void;
  isError?: boolean;
}

export interface InputContainerProps {
  tokenAmount: number | string;
  tokenName: string;
  convertedToUSDAmount: number | string;
  isInputAmountError: boolean;
  setTokenAmount: (n: number | string) => void;
  setTokenName: (s: string) => void;
  setIsInputAmountError: (b: boolean) => void;
}
