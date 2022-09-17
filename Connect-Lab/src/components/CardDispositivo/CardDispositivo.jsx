import { DivDispositivoStyled, ImgProdutoStyled, PNomeDispStyled, DivLocOnOffStyled, PLocOnOffStyled } from "./CardDispositivo.styles"
import PropTypes from 'prop-types'
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"

export const CardDispositivo = (key, img, descriImg, nomeDisp, localDisp, onOff) => {
    return(
        <ThemeProvider theme={myTheme}>
            <DivDispositivoStyled>
            <ImgProdutoStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
            <DivLocOnOffStyled>
                <PNomeDispStyled>Lâmpada</PNomeDispStyled>
                <PLocOnOffStyled>Quarto | OFF</PLocOnOffStyled>
            </DivLocOnOffStyled>
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