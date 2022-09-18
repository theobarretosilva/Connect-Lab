import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { FiltroStyled, PFiltro, PFiltroSelecionado } from "./FiltrosDispositivos.styles"

export const FiltroDispositivos = () => {

    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <FiltroStyled>
                <PFiltroSelecionado>Todos</PFiltroSelecionado>
                <PFiltro>Quarto</PFiltro>
                <PFiltro>Sala</PFiltro>
                <PFiltro>Cozinha</PFiltro>
            </FiltroStyled>
        </ThemeProvider>
    )
}