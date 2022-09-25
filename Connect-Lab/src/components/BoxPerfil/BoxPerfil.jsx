import { ThemeProvider } from "styled-components"
import { BtnAteraDadosStyled, CepStyled, DadosUsuStyled, Div1Styled, DivEnderecoStyled, DivNomeDadosSyled, EnderecoStyled, H1Styled, ImgRedondaStyled, LinhaStyled, MainPerfilStyled, NomeUsuStyled, PEnderecoStyled, SairStyled } from "./BoxPerfil.styles"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle";
import { Link } from "react-router-dom";

export const BoxPerfil = () => {
    const dadosLS = JSON.parse(localStorage.getItem("dadosUsuario"));
    const linkFotoUsu = dadosLS.user.photoUrl;
    const nomeUsu = dadosLS.user.fullName;
    const emailUsu = dadosLS.user.email;
    const foneUsu = " - " + dadosLS.user.phone;
    const cepUsu = dadosLS.user.userAddress.zipCode;
    const ruaUsu = dadosLS.user.userAddress.street;
    const complementoUsu = ", " + dadosLS.user.userAddress.complement;
    const bairroUsu = " - " + dadosLS.user.userAddress.neighborhood;
    const cidadeUsu = dadosLS.user.userAddress.city;
    const estadoUsu = dadosLS.user.userAddress.state;
    
    const limpaLS = () => {
        localStorage.clear();
    }

    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <MainPerfilStyled>
                <H1Styled>Meu perfil</H1Styled>
                <Div1Styled>
                    {dadosLS ? (<ImgRedondaStyled src={linkFotoUsu} alt="Foto escolhida pelo usuário"/>) : (<ImgRedondaStyled src="../src/assets/imgs/userGenerico.png" alt="Foto genérica"/>)}
                    <DivNomeDadosSyled>
                        <NomeUsuStyled>{nomeUsu}</NomeUsuStyled>
                        <DadosUsuStyled>{emailUsu}{foneUsu}</DadosUsuStyled>
                    </DivNomeDadosSyled>
                </Div1Styled>
                <DivEnderecoStyled>
                    <PEnderecoStyled>Endereço</PEnderecoStyled>
                    <LinhaStyled />
                    <CepStyled>{cepUsu}</CepStyled>
                    <EnderecoStyled>{ruaUsu}{complementoUsu}{bairroUsu}</EnderecoStyled>
                    <EnderecoStyled>{cidadeUsu} - {estadoUsu}</EnderecoStyled>
                </DivEnderecoStyled>
                <Link to="/editarDadosUsu"><BtnAteraDadosStyled>Alterar meus dados</BtnAteraDadosStyled></Link>
                <Link to="/login"><SairStyled onClick={limpaLS}>Sair</SairStyled></Link>
            </MainPerfilStyled>
        </ThemeProvider>
        
    )
}