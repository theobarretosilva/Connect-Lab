import { Link } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { DivLogoStyled, HeaderbarStyled, ImgStyled, PLogoStyled } from "../Headerbar/Headerbar.styles"
import { DivNavStyled, LinkDispPerfStyled, LinkInicioStyled} from "./HeaderbarInicio.styles"

export const HeaderbarInicio = () => {
    // const urlAtual = window.location.href;
    // const location = useLocation();

    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <HeaderbarStyled>
                <DivLogoStyled>
                    <ImgStyled src='../src/assets/imgs/ConnectLab - Logo.png' alt='Logo do Connect Lab'/>
                    <PLogoStyled>Connect Lab</PLogoStyled>
                </DivLogoStyled>
                <DivNavStyled>
                    <LinkInicioStyled>Início</LinkInicioStyled>
                    <Link to={"/dispositivos"}><LinkDispPerfStyled>Dispositivos</LinkDispPerfStyled></Link>
                    <Link to={"/perfil"}><LinkDispPerfStyled>Perfil</LinkDispPerfStyled></Link>
                </DivNavStyled>
            </HeaderbarStyled>
        </ThemeProvider>
    )
}