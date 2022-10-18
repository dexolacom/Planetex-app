export interface HeroProps {
  title: string;
  text: string;
  img: any;
}

export interface HeroSectionStyleProps {
  marginTop?: string;
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
  children: JSX.Element
}

export interface StatusModalProps {
  setIsModalOpen: (b: boolean) => void;
  isError?: boolean
}

export interface InputContainerProps {
  tokenAmount: number | string
  tokenName: string
  isInputAmountError: boolean
  setTokenAmount: (n: number | string) => void
  setTokenName: (s: string) => void
  setIsInputAmountError: (b: boolean) => void
}
