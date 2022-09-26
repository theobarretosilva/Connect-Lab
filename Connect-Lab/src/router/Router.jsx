import { Route, Routes } from "react-router-dom";
import { TelaLogin, TelaDispositivos, TelaPerfil, TelaCadastro, TelaDetalhesDisp, TelaInicio } from '../pages';
import { TelaEditDadosUsu } from "../pages/TelaEditDadosUsu";

export const Router = () => {
    return(
        <Routes>
            <Route exact path="/" element={<TelaLogin />} />
            <Route exact path="/cadastroUsu" element={<TelaCadastro />} />
            <Route exact path="/dispositivos" element={<TelaDispositivos />} />
            <Route exact path="/perfil" element={<TelaPerfil />} />
            <Route exact path="/editarDadosUsu" element={<TelaEditDadosUsu />} />
            <Route exact path="/detalhesDisp" element={<TelaDetalhesDisp />} />
            <Route exact path="/inicio" element={<TelaInicio />} />
        </Routes>
    );
};

export default Router;