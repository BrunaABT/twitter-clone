import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyles } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { ToastContainer } from "react-toastify";
import { GlobalStateProvider } from "./context/GlobalContext";

const TheRoutes: React.FC = () => {
  return (
    <GlobalStateProvider>
      <Router>
        <GlobalStyles />
        <ToastContainer theme="colored" />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </GlobalStateProvider>
  );
};

export default TheRoutes;
