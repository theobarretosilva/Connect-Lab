import { ThemeProvider } from "styled-components"
import { BoxEditPerfil } from "../components/BoxEditPerfil/BoxEditPerfil"
import { HeaderbarPerfil } from "../components/HeaderbarPerfil/HeaderbarPerfil"
import { myTheme } from "../styles/defaultThemes"
import { GlobalStyle } from "../styles/globalStyle"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TelaEditDadosUsu = () => {
    return(
        <>
            <ThemeProvider theme={myTheme}>
                <GlobalStyle />
                <HeaderbarPerfil />
                <BoxEditPerfil />
            </ThemeProvider>
            <ToastContainer />
        </>
    );
};