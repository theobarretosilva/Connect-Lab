import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import TelaLogin from '../pages/TelaLogin'
import TelaInicio from '../pages/TelaInicio'
import TelaDispositivos from "../pages/TelaDispositivos";
import TelaPerfil from "../pages/TelaPerfil";
import TelaCadastro from "../pages/TelaCadastro"
import { AuthProvider } from "../contexts/auth";
import TelaNotFound from "../pages/TelaNotFound"
import { createBrowserHistory } from "history";

const AppRoutes = () => {

    const history = createBrowserHistory();

    return(
        <Router history={history}>
            <AuthProvider>
                <Routes>
                    <Route exact path="/cadastroUsu" element={<TelaCadastro />} />
                    <Route exact path="/login" element={<TelaLogin />} />
                    <Route exact path="/" element={<TelaInicio />} />
                    <Route exact path="/dispositivos" element={<TelaDispositivos />} />
                    <Route exact path="/perfil" element={<TelaPerfil />} />
                    <Route element={<TelaNotFound />} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes;