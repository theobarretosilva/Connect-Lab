import PropTypes from 'prop-types'
import { useState } from 'react';
import { AutenticacaoContext } from './Autenticacao/AutenticacaoContext';

export const AutenticacaoProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    const handleLogin = (email, senha) => {
        console.log(email, senha);
        setUsuario({ id: '123456789', email });
    };

    const handleLogout = () => {
        setUsuario(null)
        console.log("logout");
    };

    return(
        <AutenticacaoContext.Provider
            value={{ isAutenticado: !!usuario, handleLogin, handleLogout }}
        >
            {children}
        </AutenticacaoContext.Provider>
    )
}

AutenticacaoProvider.propTypes = {
    children: PropTypes.node,
};