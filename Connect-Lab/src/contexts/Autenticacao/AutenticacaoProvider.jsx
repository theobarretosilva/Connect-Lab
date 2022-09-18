import PropTypes from 'prop-types'
import { useState } from 'react';
import { fazerLogin } from '../../service/api/axios';
import { AutenticacaoContext } from './AutenticacaoContext';

export const AutenticacaoProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    const handleLogin = (email, senha) => {
        fazerLogin(email, senha)
        console.log(email, senha);
        setUsuario({ email, senha });
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