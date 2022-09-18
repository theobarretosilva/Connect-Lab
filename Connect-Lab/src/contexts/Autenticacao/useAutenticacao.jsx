import { useContext } from "react";

import { AutenticacaoContext } from "../contexts/Autenticacao/AutenticacaoContext";

export const useAutenticacao = () => {
    const context = useContext(AutenticacaoContext);

    return context;
}