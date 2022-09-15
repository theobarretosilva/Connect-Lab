import { DivDispositivoStyled, ImgProdutoStyled } from "./CardDispositivo.styles"

export const CardDispositivo = (img, descriImg, nomeDisp, localDisp ,onOff) => {
    return(
        <DivDispositivoStyled>
            <ImgProdutoStyled src={img} alt={descriImg}/>
            <div>
                
            </div>
        </DivDispositivoStyled>
    )
}