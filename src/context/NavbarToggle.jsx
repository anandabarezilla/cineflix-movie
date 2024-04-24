import { createContext, useState } from "react";

const NavbarToggleContext = createContext();

const NavbarToggleContextProvider = ({ children }) => {
  const [isNavbarToggle, setIsNavbarToggle] = useState(false);

  return <NavbarToggleContext.Provider value={{ isNavbarToggle, setIsNavbarToggle }}>{children}</NavbarToggleContext.Provider>;
};

export const NavbarToggle = NavbarToggleContext;
export default NavbarToggleContextProvider;
