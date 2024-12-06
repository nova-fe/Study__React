import { createContext, useState } from "react";

// context 생성 (기본값)
export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children, initDarkMode = false }) => {
  const [darkMode, setDarkMode] = useState(initDarkMode);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
