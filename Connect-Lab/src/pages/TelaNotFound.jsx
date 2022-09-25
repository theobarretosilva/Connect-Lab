import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle"

export const TelaNotFound = () => {
    return(
        <ThemeProvider>
            <GlobalStyle />
            <h1>Not found</h1>
        </ThemeProvider>
    )
}

export default TelaNotFound;