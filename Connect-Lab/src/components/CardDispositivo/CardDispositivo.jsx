import { BtnOnOffStyled, DivDispositivoStyled, IcoOnOffStyled, ImgProdutoStyled } from "./CardDispositivo.styles"

export const CardDispositivo = (img, descriImg, nomeDisp, localDisp ,onOff) => {
    return(
        <DivDispositivoStyled>
            <ImgProdutoStyled src="https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"/>
            <div>
                <p>Lâmpada</p>
                <p>Quarto | ON</p>
            </div>
            <BtnOnOffStyled><IcoOnOffStyled src="../src/assets/imgs/OnOff.png"/></BtnOnOffStyled>
        </DivDispositivoStyled>
    )
}