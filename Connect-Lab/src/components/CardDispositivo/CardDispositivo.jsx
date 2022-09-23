import { DivDispositivoStyled, ImgProdutoStyled, PNomeDispStyled, DivLocOnOffStyled, PLocOnOffStyled, BtnOffStyled, ImgOnOffStyled } from "./CardDispositivo.styles";
import PropTypes from 'prop-types';
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/defaultThemes";
import { GlobalStyle } from "../../styles/globalStyle";

export const CardDispositivo = (img, descriImg, nomeDisp, localDisp, POnOff, BtnOnOff) => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <DivDispositivoStyled>
                <ImgProdutoStyled src={img} alt={descriImg}/>
                <DivLocOnOffStyled>
                    <PNomeDispStyled>{nomeDisp}</PNomeDispStyled>
                    <PLocOnOffStyled>{localDisp} | {POnOff}</PLocOnOffStyled>
                </DivLocOnOffStyled>
                {BtnOnOff}
                <BtnOffStyled><ImgOnOffStyled src="../../../src/assets/imgs/Off.png"/></BtnOffStyled>
            </DivDispositivoStyled>
        </ThemeProvider>
        
    );
};

CardDispositivo.propTypes = {
    img: PropTypes.string.isRequired,
    descriImg: PropTypes.string,
    nomeDisp: PropTypes.string.isRequired,
    localDisp: PropTypes.string.isRequired,
    POnOff: PropTypes.string.isRequired,
    BtnOnOff: PropTypes.node.isRequired,
};