import { Link } from "react-router-dom"
import { DivLogoStyled, HeaderbarStyled, ImgStyled, PLogoStyled } from "../Headerbar/Headerbar.styles"
import { DivNavStyled, LinkDispPerfStyled, LinkInicioStyled} from "./HeaderbarInicio.styles"

export const HeaderbarInicio = () => {
    return(
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
    );
};