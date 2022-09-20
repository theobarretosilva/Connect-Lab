import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { SectionDetalheStyled } from "./BoxDetalhesDisp.styles"
import { H1Styled } from "../BoxPerfil/BoxPerfil.styles"

export const BoxDetalhesDisp = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <main>
                <SectionDetalheStyled>
                    <H1Styled>Lâmpada inteligente</H1Styled>
                </SectionDetalheStyled>
            </main>
        </ThemeProvider>
    )
}