import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { InputSearchStyled, PNomeDispStyled, SectionSearchbarStyled } from "./SearchBarDisp.styles"
import PropTypes from 'prop-types'

export const SearchBarDisp = ({ func }) => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <SectionSearchbarStyled>
                <PNomeDispStyled>Pesquise um dispositivo:</PNomeDispStyled>
                <InputSearchStyled onChange={func} type="text" placeholder="Ex: Lâmpada inteligente, fechadura eletrônica..."/>
            </SectionSearchbarStyled>
        </ThemeProvider>
    )
}

SearchBarDisp.propTypes = {
    func: PropTypes.func.isRequired,
};