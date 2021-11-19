import { ThemeProvider as SCThemeProvider } from "styled-components";
import { theme } from "./theme";

const ThemeProvider: React.FC = ({ children }) => {
  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>;
};

export default ThemeProvider;
