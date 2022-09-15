import { Link } from "react-router-dom"
import { DivLogoStyled, HeaderStyled, ImgStyled, PLogoStyled } from "../Header/Header.styles"
import { DivNavStyled, LinkDispPerfStyled, LinkInicioStyled} from "./HeaderInicio.styles"

export const HeaderInicio = () => {
    // const urlAtual = window.location.href;
    // const location = useLocation();

    return(
        <HeaderStyled>
            <DivLogoStyled>
                <ImgStyled src='../src/assets/imgs/ConnectLab - Logo.png' alt='Logo do Connect Lab'/>
                <PLogoStyled>Connect Lab</PLogoStyled>
            </DivLogoStyled>
            <DivNavStyled>
                <LinkInicioStyled>Início</LinkInicioStyled>
                <LinkDispPerfStyled>Dispositivos</LinkDispPerfStyled>
                <LinkDispPerfStyled><Link to={"/perfil"}>Perfil</Link></LinkDispPerfStyled>
            </DivNavStyled>
        </HeaderStyled>
    )
}