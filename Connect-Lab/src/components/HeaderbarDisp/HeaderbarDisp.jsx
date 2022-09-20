import { Link } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { DivLogoStyled, HeaderbarStyled, ImgStyled, PLogoStyled } from "../Headerbar/Headerbar.styles"
import { DivNavStyled, LinkDispPerfStyled, LinkInicioStyled } from "../HeaderbarInicio/HeaderbarInicio.styles"

export const HeaderbarDisp = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <HeaderbarStyled>
                <DivLogoStyled>
                    <ImgStyled src='../src/assets/imgs/ConnectLab - Logo.png' alt='Logo do Connect Lab'/>
                    <PLogoStyled>Connect Lab</PLogoStyled>
                </DivLogoStyled>
                <DivNavStyled>
                    <Link to={"/"}><LinkDispPerfStyled>Início</LinkDispPerfStyled></Link>
                    <LinkInicioStyled>Dispositivos</LinkInicioStyled>
                    <Link to={"/perfil"}><LinkDispPerfStyled>Perfil</LinkDispPerfStyled></Link>
                </DivNavStyled>
            </HeaderbarStyled>
        </ThemeProvider>
    )
}