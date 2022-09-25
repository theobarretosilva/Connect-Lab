import { ThemeProvider } from "styled-components";
import { BoxPerfil } from "../components/BoxPerfil/BoxPerfil";
import { HeaderbarPerfil } from "../components/HeaderbarPerfil/HeaderbarPerfil";
import { myTheme } from "../styles/defaultThemes";
import { GlobalStyle } from "../styles/globalStyle";

export const TelaPerfil = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <HeaderbarPerfil />
            <BoxPerfil />
        </ThemeProvider>        
    )
}

export default TelaPerfil;