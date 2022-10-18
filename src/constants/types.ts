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
