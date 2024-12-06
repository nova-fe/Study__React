import "./AppTheme.css";
import HeaderTheme from "./components/theme/Header.jsx";
import MainTheme from "./components/theme/Main.jsx";
import FooterTheme from "./components/theme/Footer.jsx";
import { DarkModeContextProvider } from "./context/DarkModeContext.jsx";

function AppTheme(props) {
  return (
    <DarkModeContextProvider initDarkMode={false}>
      <HeaderTheme />
      <MainTheme />
      <FooterTheme />
    </DarkModeContextProvider>
  );
}

export default AppTheme;
