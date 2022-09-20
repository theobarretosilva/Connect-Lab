import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { DivTitStyled, H1DispStyled, LinhaDispStyled } from "./TituloTelaDisp.styles"

export const TituloTelaDisp = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <DivTitStyled>
                <H1DispStyled>Dispositivos</H1DispStyled>
                <LinhaDispStyled />
            </DivTitStyled>
        </ThemeProvider>
    )
}