import { ThemeProvider } from "styled-components"
import { myTheme } from "../../styles/defaultThemes"
import { GlobalStyle } from "../../styles/globalStyle"
import { BtnAddStyled, CardStyled, GroupDispAddStyled, ImgDispStyled, TipoDispStyled } from "./CardAddDisp.styles"

export const CardAddDisp = () => {
    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <GroupDispAddStyled>
                <CardStyled>
                    <ImgDispStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <BtnAddStyled>Adicionar</BtnAddStyled>
                </CardStyled>
                <CardStyled>
                    <ImgDispStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <BtnAddStyled>Adicionar</BtnAddStyled>
                </CardStyled>
                <CardStyled>
                    <ImgDispStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <BtnAddStyled>Adicionar</BtnAddStyled>
                </CardStyled>
            </GroupDispAddStyled>
            <GroupDispAddStyled>
                <CardStyled>
                    <ImgDispStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <BtnAddStyled>Adicionar</BtnAddStyled>
                </CardStyled>
                <CardStyled>
                    <ImgDispStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <BtnAddStyled>Adicionar</BtnAddStyled>
                </CardStyled>
                <CardStyled>
                    <ImgDispStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <BtnAddStyled>Adicionar</BtnAddStyled>
                </CardStyled>
            </GroupDispAddStyled>
            <GroupDispAddStyled>
                <CardStyled>
                    <ImgDispStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <BtnAddStyled>Adicionar</BtnAddStyled>
                </CardStyled>
                <CardStyled>
                    <ImgDispStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <BtnAddStyled>Adicionar</BtnAddStyled>
                </CardStyled>
                <CardStyled>
                    <ImgDispStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
                    <TipoDispStyled>Lâmpada inteligente</TipoDispStyled>
                    <BtnAddStyled>Adicionar</BtnAddStyled>
                </CardStyled>
            </GroupDispAddStyled>
        </ThemeProvider>
    )
}