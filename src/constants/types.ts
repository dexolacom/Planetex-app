export interface HeroProps {
  title: string
  text: string
  img: any
}

export interface HeaderProps {
  isBurgerMenu: boolean
  setIsBurgerMenu: (b: boolean) => void
}