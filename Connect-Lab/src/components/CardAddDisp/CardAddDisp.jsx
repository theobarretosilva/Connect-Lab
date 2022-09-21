import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { BtnAddStyled, CardStyled, ImgDispStyled, TipoDispStyled } from "./CardAddDisp.styles"
import PropTypes from 'prop-types';

export const CardAddDisp = ({ linkFotoDispositivo, nomeDisposivito, idDispositivo }) => {
    const abreModal = (e) => {
        const idDispositivo = e.target.value;
        console.log(idDispositivo)
    }

    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <CardStyled>
                <ImgDispStyled src={linkFotoDispositivo}/>
                <TipoDispStyled>{nomeDisposivito}</TipoDispStyled>
                <BtnAddStyled onClick={abreModal} value={idDispositivo}>Adicionar</BtnAddStyled>
            </CardStyled>
        </ThemeProvider>
    )
}

CardAddDisp.propTypes = {
    linkFotoDispositivo: PropTypes.string.isRequired,
    nomeDisposivito: PropTypes.string.isRequired,
    idDispositivo: PropTypes.string.isRequired,
};