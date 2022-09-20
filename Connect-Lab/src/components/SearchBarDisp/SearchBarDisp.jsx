import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { InputSearchStyled, PNomeDispStyled, SectionSearchbarStyled } from "./SearchBarDisp.styles"

export const SearchBarDisp = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <SectionSearchbarStyled>
                <PNomeDispStyled>Nome do dispositivo</PNomeDispStyled>
                <InputSearchStyled type="search" placeholder="Ex: Lâmpada inteligente, fechadura eletrônica..."/>
            </SectionSearchbarStyled>
        </ThemeProvider>
    )
}