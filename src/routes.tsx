import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import { GlobalStyles } from "./styles/GlobalStyle"

const TheRoutes: React.FC = () => {
    return(
        <Router>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </Router>
    )
}

export default TheRoutes