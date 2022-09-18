import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { myTheme } from '../../styles/defaultThemes.jsx'
import { GlobalStyle } from '../../styles/globalStyle.jsx'
import { BtnLogin, DivLogoStyled, HeaderbarStyled, ImgStyled, PBtnStyled, PLogoStyled } from './Headerbar.styles.jsx'

export const Headerbar = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <HeaderbarStyled>
                <DivLogoStyled>
                    <ImgStyled src='../src/assets/imgs/ConnectLab - Logo.png' alt='Logo do Connect Lab'/>
                    <PLogoStyled>Connect Lab</PLogoStyled>
                </DivLogoStyled>
                <BtnLogin><Link to={"/login"}><PBtnStyled>Login</PBtnStyled></Link></BtnLogin>
            </HeaderbarStyled>
        </ThemeProvider>
        
    )
}