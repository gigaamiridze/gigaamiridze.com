export interface OpenProps {
  isOpen: boolean;
}

export interface BurgerProps extends OpenProps {
  toggleMenu: () => void;
}