export interface HeroProps {
  title: string;
  text: string;
  img: any;
}

export interface HeroSectionStyleProps {
  marginTop?: string;
  paddingRight?: string;
  marginRight?: string;
  width?: string;
  height?: string;
}

export interface SaleSectionProps {
  title: string;
}

export interface HeaderProps {
  isBurgerMenu: boolean;
  setIsBurgerMenu: (b: boolean) => void;
}
