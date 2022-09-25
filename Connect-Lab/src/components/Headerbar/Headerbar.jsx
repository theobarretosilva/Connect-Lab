import { DivLogoStyled, HeaderbarStyled, ImgStyled, PLogoStyled } from './Headerbar.styles.jsx'

export const Headerbar = () => {
    return(
        <HeaderbarStyled>
            <DivLogoStyled>
                <ImgStyled src='../src/assets/imgs/ConnectLab - Logo.png' alt='Logo do Connect Lab'/>
                <PLogoStyled>Connect Lab</PLogoStyled>
            </DivLogoStyled>
        </HeaderbarStyled>
    )
}