import { createContext, useState } from 'react'

// create a navbar context
export const NavbarContext = createContext()

export const NavbarProvider = ({ children }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  return (
    <NavbarContext.Provider
      value={[isNavbarOpen, setIsNavbarOpen, toggleNavbar]}
    >
      {children}
    </NavbarContext.Provider>
  )
}
