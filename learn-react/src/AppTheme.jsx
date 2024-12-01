import "./AppTheme.css";
import HeaderTheme from "./components/theme/Header.jsx";
import MainTheme from "./components/theme/Main.jsx";
import FooterTheme from "./components/theme/Footer.jsx";
import { useState } from "react";
import { DarkModeContext } from "./context/DarkModeContext.jsx";

function AppTheme(props) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeContext.Provider>
  );
}

export default AppTheme;

// 강의: 16:09
