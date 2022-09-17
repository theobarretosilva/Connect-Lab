import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { DivLocOnOffStyled, ImgProdutoStyled, PLocOnOffStyled, PNomeDispStyled } from "../CardDispositivo/CardDispositivo.styles"
import { DivDispSelecStyled } from "./CardDispSelecionado.styles"

export const CardDispSelecionado = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <DivDispSelecStyled>
                <ImgProdutoStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                <DivLocOnOffStyled>
                    <PNomeDispStyled>Lâmpada</PNomeDispStyled>
                    <PLocOnOffStyled>Quarto | ON</PLocOnOffStyled>
                </DivLocOnOffStyled>
            </DivDispSelecStyled>
        </ThemeProvider>
    )
}