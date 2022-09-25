import { Link } from 'react-router-dom'
import { BtnLogin, DivLogoStyled, HeaderbarStyled, ImgStyled, PBtnStyled, PLogoStyled } from './Headerbar.styles.jsx'

export const Headerbar = () => {
    return(
        <HeaderbarStyled>
            <DivLogoStyled>
                <ImgStyled src='../src/assets/imgs/ConnectLab - Logo.png' alt='Logo do Connect Lab'/>
                <PLogoStyled>Connect Lab</PLogoStyled>
            </DivLogoStyled>
            <BtnLogin><Link to={"/login"}><PBtnStyled>Login</PBtnStyled></Link></BtnLogin>
        </HeaderbarStyled>
    )
}