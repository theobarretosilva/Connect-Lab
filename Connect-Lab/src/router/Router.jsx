import { Route, Routes } from "react-router-dom";
import { TelaLogin, TelaInicio, TelaDispositivos, TelaPerfil, TelaCadastro, TelaNotFound } from '../pages';

export const Router = () => {
    return(
        <Routes>
            <Route path="/cadastroUsu" element={<TelaCadastro />} />
            <Route path="/login" element={<TelaLogin />} />
            <Route path="/" element={<TelaInicio />} />
            <Route path="/dispositivos" element={<TelaDispositivos />} />
            <Route path="/perfil" element={<TelaPerfil />} />
            <Route element={<TelaNotFound />} />
        </Routes>
    )
}

export default Router;