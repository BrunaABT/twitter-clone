import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"

const TheRoutes: React.FC = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
            </Routes>
        </Router>
    )
}

export default TheRoutes