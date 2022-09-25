import { Route, Routes } from "react-router-dom";
import { TelaLogin, TelaInicio, TelaDispositivos, TelaPerfil, TelaCadastro, TelaNotFound, TelaDetalhesDisp } from '../pages';
import { TelaEditDadosUsu } from "../pages/TelaEditDadosUsu";

export const Router = () => {
    return(
        <Routes>
            <Route element={<TelaNotFound />} />
            <Route exact path="/login" element={<TelaLogin />} />
            <Route exact path="/cadastroUsu" element={<TelaCadastro />} />
            <Route path="/" element={<TelaInicio />} />
            <Route exact path="/dispositivos" element={<TelaDispositivos />} />
            <Route exact path="/perfil" element={<TelaPerfil />} />
            <Route exact path="/editarDadosUsu" element={<TelaEditDadosUsu />} />
            <Route exact path="/detalhesDisp" element={<TelaDetalhesDisp />} />
        </Routes>
    );
};

export default Router;