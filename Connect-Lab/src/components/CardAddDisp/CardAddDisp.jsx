import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { BtnAddStyled, CardStyled, GroupDispAddStyled, ImgDispStyled, TipoDispStyled } from "./CardAddDisp.styles"
import PropTypes from 'prop-types';

export const CardAddDisp = ({ linkFotoDispositivo, nomeDisposivito, idDispositivo, key}) => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <GroupDispAddStyled>
                <CardStyled key={key}>
                    <ImgDispStyled src={linkFotoDispositivo}/>
                    <TipoDispStyled>{nomeDisposivito}</TipoDispStyled>
                    <BtnAddStyled value={idDispositivo}>Adicionar</BtnAddStyled>
                </CardStyled>
            </GroupDispAddStyled>
        </ThemeProvider>
    )
}

CardAddDisp.propTypes = {
    linkFotoDispositivo: PropTypes.string.isRequired,
    nomeDisposivito: PropTypes.string.isRequired,
    idDispositivo: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
};