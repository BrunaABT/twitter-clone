import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const TheRoutes: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default TheRoutes;
