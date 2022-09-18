import { DivDispositivoStyled, ImgProdutoStyled, PNomeDispStyled, DivLocOnOffStyled, PLocOnOffStyled, BtnOnOffStyled } from "./CardDispositivo.styles"
import PropTypes from 'prop-types'
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"

export const CardDispositivo = (key, img, descriImg, nomeDisp, localDisp, onOff) => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <DivDispositivoStyled>
                <ImgProdutoStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                <DivLocOnOffStyled>
                    <PNomeDispStyled>Lâmpada</PNomeDispStyled>
                    <PLocOnOffStyled>Quarto | OFF</PLocOnOffStyled>
                </DivLocOnOffStyled>
                <BtnOnOffStyled><img src="../../../src/assets/imgs/OnOff.png" alt="Imagem on ou off" /></BtnOnOffStyled>
            </DivDispositivoStyled>
        </ThemeProvider>
        
    )
}

CardDispositivo.propTypes = {
    img: PropTypes.string.isRequired,
    descriImg: PropTypes.string,
    nomeDisp: PropTypes.string.isRequired,
    localDisp: PropTypes.string.isRequired,
    onOff: PropTypes.string.isRequired
}