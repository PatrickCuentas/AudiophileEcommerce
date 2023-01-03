import { createContext, useState } from 'react';

type NavbarContent = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (value: boolean) => void;
  toggleNavbar: () => void;
};

export const NavbarContext = createContext<NavbarContent>({
  isNavbarOpen: false,
  setIsNavbarOpen: () => {},
  toggleNavbar: () => {},
});

export const NavbarProvider = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <NavbarContext.Provider
      value={{ isNavbarOpen, setIsNavbarOpen, toggleNavbar }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
