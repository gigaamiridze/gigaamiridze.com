import { ReactNode } from "react";

export interface MenuContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
}

export interface MenuProviderProps {
  children: ReactNode;
}