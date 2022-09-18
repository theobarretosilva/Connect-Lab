import { BrowserRouter, Route, Routes} from "react-router-dom";
import TelaLogin from '../pages/TelaLogin'
import TelaInicio from '../pages/TelaInicio'
import TelaDispositivos from "../pages/TelaDispositivos";
import TelaPerfil from "../pages/TelaPerfil";
import TelaCadastro from "../pages/TelaCadastro"
import { AutenticacaoProvider } from "../contexts/Autenticacao/AutenticacaoProvider";
import TelaNotFound from "../pages/TelaNotFound"
import { createBrowserHistory } from "history";

const AppRoutes = () => {

    const history = createBrowserHistory();

    return(
        <BrowserRouter history={history}>
            <AutenticacaoProvider>
                <Routes>
                    <Route exact path="/cadastroUsu" element={<TelaCadastro />} />
                    <Route exact path="/login" element={<TelaLogin />} />
                    <Route exact path="/" element={<TelaInicio />} />
                    <Route exact path="/dispositivos" element={<TelaDispositivos />} />
                    <Route exact path="/perfil" element={<TelaPerfil />} />
                    <Route element={<TelaNotFound />} />
                </Routes>
            </AutenticacaoProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;