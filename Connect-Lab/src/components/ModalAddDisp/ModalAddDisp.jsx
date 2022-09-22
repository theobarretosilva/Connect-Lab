import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { BoxModalStyled, BtnAddStyled, BtnCancelarStyled, DivBtnsStyled, DivSelectStyled, FundoTotalModalStyled, LabelModalStyled, SelectModalStyled, TituloModalStyled } from "./ModalAddDisp.style"
import PropTypes from "prop-types"

export const ModalAddDisp = ({ nomeDispositivo, closeModal }) => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <FundoTotalModalStyled>
                <BoxModalStyled>
                    <TituloModalStyled>{nomeDispositivo}</TituloModalStyled>
                    <DivSelectStyled>
                        <LabelModalStyled>Local *</LabelModalStyled>
                        <SelectModalStyled required>
                            <option selected disabled value="">Selecione o local</option>
                            <option value="casa">Casa</option>
                            <option value="escritorio">Escritório</option>
                        </SelectModalStyled>
                    </DivSelectStyled>
                    <DivSelectStyled>
                        <LabelModalStyled>Cômodo *</LabelModalStyled>
                        <SelectModalStyled required>
                            <option selected disabled value="">Selecione o cômodo</option>
                            <option value="quarto">Quarto</option>
                            <option value="cozinha">Cozinha</option>
                            <option value="salaDeEstar">Sala de estar</option>
                            <option value="salaDeJantar">Sala de jantar</option>
                            <option value="areaDeServico">Área de serviço</option>
                        </SelectModalStyled>
                    </DivSelectStyled>
                    <DivBtnsStyled>
                        <BtnCancelarStyled onClick={()=> closeModal(false)}>Cancelar</BtnCancelarStyled>
                        <BtnAddStyled>Adicionar</BtnAddStyled>
                    </DivBtnsStyled>
                </BoxModalStyled>
            </FundoTotalModalStyled>
            
        </ThemeProvider>
    );
};

ModalAddDisp.propTypes = {
    nomeDispositivo: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};