import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { BtnAddStyled, CardStyled, ImgDispStyled, TipoDispStyled } from "./CardAddDisp.styles"
import PropTypes from 'prop-types';

export const CardAddDisp = ({ linkFotoDispositivo, nomeDisposivito, idDispositivo }) => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <CardStyled>
                <ImgDispStyled src={linkFotoDispositivo}/>
                <TipoDispStyled>{nomeDisposivito}</TipoDispStyled>
                <BtnAddStyled value={idDispositivo}>Adicionar</BtnAddStyled>
            </CardStyled>
        </ThemeProvider>
    )
}

CardAddDisp.propTypes = {
    linkFotoDispositivo: PropTypes.string.isRequired,
    nomeDisposivito: PropTypes.string.isRequired,
    idDispositivo: PropTypes.string.isRequired,
};