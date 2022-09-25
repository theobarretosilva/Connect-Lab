import { Headerbar } from "../components/Headerbar/Headerbar"
import { BoxCadastro } from "../components/BoxCadastro/BoxCadastro"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../styles/defaultThemes";
import { GlobalStyle } from "../styles/globalStyle";

export const TelaCadastro = () => {
    return(
        <>
            <ThemeProvider theme={myTheme}>
                <GlobalStyle />
                <Headerbar />
                <BoxCadastro />
            </ThemeProvider>
            <ToastContainer />
        </>
    )
}

export default TelaCadastro;