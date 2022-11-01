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
  paddingBottom?: string;
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
  isWalletWarning: boolean;
  isApproveWarning: boolean;
  setTokenAmount: (n: number | string) => void;
  setTokenName: (s: string) => void;
  setIsInputAmountError: (b: boolean) => void;
  setIsApproveWarning: (b: boolean) => void;
}

export interface TokenNameSelectProps {
  tokenName: string;
  setTokenName: (s: string) => void;
}

export interface ActionButtonProps {
  tokenContract: any;
  account: string;
  spender: string;
  isWallet: boolean;
  tokenName: string;
  allowance: string;
  isApproveLoading: boolean;
  isTransLoading: boolean;
  setIsApproveLoading: (b: boolean) => void;
  setAllowance: (b: boolean) => void;
  approveMint: () => void;
  mint: () => void;
}
