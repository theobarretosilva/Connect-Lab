import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { DivLoadingStyled, ImgLoadingStyled, PLoadingStyled } from "./Loading.styles"

export const Loading = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <DivLoadingStyled>
                <PLoadingStyled>Adicionando dispositivo...</PLoadingStyled>
                <ImgLoadingStyled src="../../src/assets/imgs/loading.svg" alt="Loading"/>
            </DivLoadingStyled>
        </ThemeProvider>
        
        
    )
}