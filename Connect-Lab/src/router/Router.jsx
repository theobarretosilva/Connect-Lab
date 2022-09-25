import { Route, Routes } from "react-router-dom";
import { TelaLogin, TelaDispositivos, TelaPerfil, TelaCadastro, TelaNotFound, TelaDetalhesDisp, TelaInicio } from '../pages';
import { TelaEditDadosUsu } from "../pages/TelaEditDadosUsu";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
    return(
        <Routes>
            <Route element={<TelaNotFound />} />
            <Route exact path="/login" element={<TelaLogin />} />
            <Route exact path="/cadastroUsu" element={<TelaCadastro />} />
            <Route exact path="/dispositivos" element={<TelaDispositivos />} />
            <Route exact path="/perfil" element={<TelaPerfil />} />
            <Route exact path="/editarDadosUsu" element={<TelaEditDadosUsu />} />
            <Route exact path="/detalhesDisp" element={<TelaDetalhesDisp />} />
            <Route path="/" element={<PrivateRoute> <TelaInicio /> </PrivateRoute>} />
            {/* <PrivateRoute path="/" component={<TelaInicio />} /> */}
        </Routes>
    );
};

export default Router;