import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { SpanErrorStyled } from "./InputError.styles"
import PropTypes from 'prop-types'
import errors from '../../utils/errors.json'

export const InputError = ({type, field}) => {
    return(
        <>
            <GlobalStyle />
            <ThemeProvider theme={myTheme}>
                <SpanErrorStyled>{errors[field][type]}</SpanErrorStyled>
            </ThemeProvider>
        </>
    )
}

InputError.propTypes = {
    type: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired
}