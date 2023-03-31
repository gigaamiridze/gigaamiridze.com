import { createContext, useContext, useState } from "react";
import { MenuContextProps, MenuProviderProps } from "../interfaces";

const MenuContext = createContext({} as MenuContextProps);

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuContextProvider({ children }: MenuProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}