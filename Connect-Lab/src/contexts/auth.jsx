import { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log('login auth', {email, password});
        setUser({ id: '123456789', email });
    };

    const logout = () => {
        console.log("logout");
    };

    return(
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
};