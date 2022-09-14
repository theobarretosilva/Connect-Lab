import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaLogin from '../pages/TelaLogin'
import TelaInicio from '../pages/TelaInicio'

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/login" element={<TelaLogin />} />
                <Route exact path="/inicio" element={<TelaInicio />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;