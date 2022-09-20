import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { BtnDetailsDispStyled, BtnRemoveDispStyled, DivDadosInfoStyled, DivInfoStyled, DivOnOffStyled, H3InfoStyled, ImgDetalhesStyled, LinhaStyled, PInfoStyled, TipoDispStyled, SectionDetalheStyled, PStyled } from "./BoxDetalhesDisp.styles"
import { H1Styled } from "../BoxPerfil/BoxPerfil.styles"

export const BoxDetalhesDisp = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <main>
                <SectionDetalheStyled>
                    <H1Styled>Lâmpada sala de jantar</H1Styled>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <ImgDetalhesStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <DivOnOffStyled>
                        <PStyled>Dispositivo ligado</PStyled>
                        <BtnDetailsDispStyled><img src="../../../src/assets/imgs/OnOff.png" alt="Imagem on ou off" /></BtnDetailsDispStyled>
                    </DivOnOffStyled>
                    <DivInfoStyled>
                        <H3InfoStyled>Informações do dispositivo</H3InfoStyled>
                        <LinhaStyled />
                        <DivDadosInfoStyled>
                            <PInfoStyled><b>Marca: </b>Intelbras</PInfoStyled>
                            <PInfoStyled><b>ID virtual: </b>1ea71523f6f296c29711</PInfoStyled>
                            <PInfoStyled><b>Endereço IP: </b>138.204.21.221</PInfoStyled>
                            <PInfoStyled><b>Endereço MAC: </b>87:e3:34:ff:ed:34</PInfoStyled>
                            <PInfoStyled><b>Fuso horário: </b>América/Sao_Paulo</PInfoStyled>
                            <PInfoStyled><b>Força do sinal: </b>-70dBm</PInfoStyled>
                        </DivDadosInfoStyled>
                    </DivInfoStyled>
                    <BtnRemoveDispStyled>Remover dispositivo</BtnRemoveDispStyled>
                </SectionDetalheStyled>
            </main>
        </ThemeProvider>
    )
}