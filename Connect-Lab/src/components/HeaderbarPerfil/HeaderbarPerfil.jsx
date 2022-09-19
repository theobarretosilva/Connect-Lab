import { Link } from "react-router-dom"
import { DivLogoStyled, HeaderbarStyled, ImgStyled, PLogoStyled } from "../Headerbar/Headerbar.styles"
import { DivNavStyled, LinkDispPerfStyled, LinkInicioStyled} from "../HeaderbarInicio/HeaderbarInicio.styles"

export const HeaderbarPerfil = () => {
    return(
        <HeaderbarStyled>
            <DivLogoStyled>
                <ImgStyled src='../src/assets/imgs/ConnectLab - Logo.png' alt='Logo do Connect Lab'/>
                <PLogoStyled>Connect Lab</PLogoStyled>
            </DivLogoStyled>
            <DivNavStyled>
                <Link to={"/"}><LinkDispPerfStyled>Início</LinkDispPerfStyled></Link>
                <Link to={"/dispositivos"}><LinkDispPerfStyled>Dispositivos</LinkDispPerfStyled></Link>
                <LinkInicioStyled>Perfil</LinkInicioStyled>
            </DivNavStyled>
        </HeaderbarStyled> 
    )
}