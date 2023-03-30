export interface OpenProps {
  isOpen: boolean;
}

export interface BurgerProps extends OpenProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}