import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { BoxModalStyled, DivSelectStyled, LabelModalStyled, SelectModalStyled, TituloModalStyled } from "./ModalAddDisp.style"

export const ModalAddDisp = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <BoxModalStyled>
                <TituloModalStyled>Lâmpada inteligente</TituloModalStyled>
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
            </BoxModalStyled>
        </ThemeProvider>
    )
}