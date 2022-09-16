import { Link } from 'react-router-dom'
import { BtnLogin, DivLogoStyled, HeaderStyled, ImgStyled, PBtnStyled, PLogoStyled } from './Header.styles.jsx'

export const Header = () => {
    return(
        <HeaderStyled>
            <DivLogoStyled>
                <ImgStyled src='../src/assets/imgs/ConnectLab - Logo.png' alt='Logo do Connect Lab'/>
                <PLogoStyled>Connect Lab</PLogoStyled>
            </DivLogoStyled>
            <BtnLogin><Link to={"/login"}><PBtnStyled>Login</PBtnStyled></Link></BtnLogin>
        </HeaderStyled>
    )
}