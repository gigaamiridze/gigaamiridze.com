import { ReactNode } from "react";

export interface MenuContextProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export interface MenuProviderProps {
  children: ReactNode;
}