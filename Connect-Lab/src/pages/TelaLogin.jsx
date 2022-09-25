import { Headerbar } from '../components/Headerbar/Headerbar';
import { BoxLogin } from '../components/BoxLogin/BoxLogin';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/globalStyle';
import { myTheme } from '../styles/defaultThemes';

export const TelaLogin = () => {
    return(
        <>
            <ThemeProvider theme={myTheme}>
                <GlobalStyle />
                <Headerbar />
                <BoxLogin />
            </ThemeProvider>
            <ToastContainer />
        </>
    )
}

export default TelaLogin;