import { ThemeProvider } from "styled-components"
import { DadosUsuStyled, Div1Styled, DivEnderecoStyled, DivNomeDadosSyled, H1Styled, ImgRedondaStyled, MainPerfilStyled, NomeUsuStyled, SpanImgStyled } from "./BoxPerfil.styles"
import { myTheme } from "../../styles/defaultThemes"

export const BoxPerfil = () => {
    const dadosLS = JSON.parse(localStorage.getItem("Dados usuario"));
    const linkFotoUsu = () => {
       return dadosLS.user.photoUrl
    };

    return(
        <ThemeProvider theme={myTheme}>
            <MainPerfilStyled>
                <H1Styled>Meu perfil</H1Styled>
                <Div1Styled>
                    <SpanImgStyled>{dadosLS ? (<ImgRedondaStyled src={linkFotoUsu} alt="Foto escolhida pelo usuário"/>) : (<ImgRedondaStyled src="../src/assets/imgs/userGenerico.png" alt="Foto genérica"/>)}</SpanImgStyled>
                    <DivNomeDadosSyled>
                        <NomeUsuStyled>Nome completo</NomeUsuStyled>
                        <DadosUsuStyled>email@email.com - (12) 34567-8910</DadosUsuStyled>
                    </DivNomeDadosSyled>
                </Div1Styled>
                <DivEnderecoStyled>
                    
                </DivEnderecoStyled>
            </MainPerfilStyled>
        </ThemeProvider>
        
    )
}