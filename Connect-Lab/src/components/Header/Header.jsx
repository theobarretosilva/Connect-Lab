import './Header.styles.jsx'
import { BtnLogin, DivLogoStyled, HeaderStyled, ImgStyled, PLogoStyled } from './Header.styles.jsx'
export const Header = () => {
    return(
        <HeaderStyled>
            <DivLogoStyled>
                <ImgStyled src='../src/assets/imgs/ConnectLab - Logo.png' alt='Logo do Connect Lab'/>
                <PLogoStyled>Connect Lab</PLogoStyled>
            </DivLogoStyled>
            <BtnLogin>Login</BtnLogin>
        </HeaderStyled>
    )
}