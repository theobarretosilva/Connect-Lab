import { Route, Routes } from "react-router-dom";
import { TelaLogin, TelaInicio, TelaDispositivos, TelaPerfil, TelaCadastro, TelaNotFound, TelaDetalhesDisp } from '../pages';
import { TelaEditDadosUsu } from "../pages/TelaEditDadosUsu";

export const Router = () => {
    return(
        <Routes>
            <Route path="/cadastroUsu" element={<TelaCadastro />} />
            <Route path="/login" element={<TelaLogin />} />
            <Route path="/" element={<TelaInicio />} />
            <Route path="/dispositivos" element={<TelaDispositivos />} />
            <Route path="/perfil" element={<TelaPerfil />} />
            <Route path="/editarDadosUsu" element={<TelaEditDadosUsu />} />
            <Route path="/detalhesDisp" element={<TelaDetalhesDisp />} />
            <Route element={<TelaNotFound />} />
        </Routes>
    )
}

export default Router;