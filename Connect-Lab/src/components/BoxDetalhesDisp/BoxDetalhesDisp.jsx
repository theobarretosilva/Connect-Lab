import { ThemeProvider } from "styled-components";
import { myTheme } from "../../styles/defaultThemes";
import { GlobalStyle } from "../../styles/globalStyle";
import { BtnRemoveDispStyled, DivDadosInfoStyled, DivInfoStyled, DivOnOffStyled, H3InfoStyled, ImgDetalhesStyled, LinhaStyled, PInfoStyled, TipoDispStyled, SectionDetalheStyled, PStyled } from "./BoxDetalhesDisp.styles"
import { H1Styled } from "../BoxPerfil/BoxPerfil.styles";
import PropTypes from 'prop-types';

export const BoxDetalhesDisp = ({ nomeDisp, tipoDisp, imgDisp, altImg, dispOnOff, btnOnOff, marcaDisp, idVirtual, enderecoIp, enderecoMAC, fusoHorario, forcaSinal}) => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <main>
                <SectionDetalheStyled>
                    <H1Styled>{nomeDisp}</H1Styled>
                    <TipoDispStyled>{tipoDisp}</TipoDispStyled>
                    <ImgDetalhesStyled src={imgDisp} alt={altImg}/>
                    <DivOnOffStyled>
                        <PStyled>Dispositivo {dispOnOff}</PStyled>
                        {btnOnOff}
                    </DivOnOffStyled>
                    <DivInfoStyled>
                        <H3InfoStyled>Informações do dispositivo</H3InfoStyled>
                        <LinhaStyled />
                        <DivDadosInfoStyled>
                            <PInfoStyled><b>Marca: </b>{marcaDisp}</PInfoStyled>
                            <PInfoStyled><b>ID virtual: </b>{idVirtual}</PInfoStyled>
                            <PInfoStyled><b>Endereço IP: </b>{enderecoIp}</PInfoStyled>
                            <PInfoStyled><b>Endereço MAC: </b>{enderecoMAC}</PInfoStyled>
                            <PInfoStyled><b>Fuso horário: </b>{fusoHorario}</PInfoStyled>
                            <PInfoStyled><b>Força do sinal: </b>{forcaSinal}</PInfoStyled>
                        </DivDadosInfoStyled>
                    </DivInfoStyled>
                    <BtnRemoveDispStyled>Remover dispositivo</BtnRemoveDispStyled>
                </SectionDetalheStyled>
            </main>
        </ThemeProvider>
    );
};

BoxDetalhesDisp.propTypes = {
    nomeDisp: PropTypes.string.isRequired,
    tipoDisp: PropTypes.string.isRequired,
    imgDisp: PropTypes.string.isRequired,
    altImg: PropTypes.string.isRequired,
    dispOnOff: PropTypes.string.isRequired,
    btnOnOff: PropTypes.node.isRequired,
    marcaDisp: PropTypes.string.isRequired,
    idVirtual: PropTypes.string.isRequired,
    enderecoIp: PropTypes.string.isRequired,
    enderecoMAC: PropTypes.string.isRequired,
    fusoHorario: PropTypes.string.isRequired,
    forcaSinal: PropTypes.string.isRequired,
};