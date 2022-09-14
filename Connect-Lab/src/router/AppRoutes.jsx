import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaLogin from '../pages/TelaLogin'
import TelaInicio from '../pages/TelaInicio'
import TelaDispositivos from "../pages/TelaDispositivos";
import { AuthProvider } from '../contexts/auth'
import TelaPerfil from "../pages/TelaPerfil";

const AppRoutes = () => {
    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<TelaLogin />} />
                    <Route exact path="/inicio" element={<TelaInicio />} />
                    <Route exact path="/dispositivos" element={<TelaDispositivos />} />
                    <Route exact path="/perfil" element={<TelaPerfil />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;