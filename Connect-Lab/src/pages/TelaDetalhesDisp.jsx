import { BoxDetalhesDisp } from "../components/BoxDetalhesDisp/BoxDetalhesDisp"
import { HeaderbarDisp } from "../components/HeaderbarDisp/HeaderbarDisp"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import { myTheme } from "../styles/defaultThemes";

export const TelaDetalhesDisp = () => {
    return(
        <>
            <ThemeProvider theme={myTheme}>
                <GlobalStyle />
                <HeaderbarDisp />
                <BoxDetalhesDisp />
            </ThemeProvider>
            <ToastContainer />
        </>
    )
}