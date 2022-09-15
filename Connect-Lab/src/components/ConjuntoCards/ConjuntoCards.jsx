import { DivDispositivosStyled, SectionDispositivosStyled } from "./ConjuntoCards.styles"
import { CardDispositivo } from "../CardDispositivo/CardDispositivo"

export const ConjuntoCards = () => {
    // const infoCard = {
    //     "_id": "631b2f046f2d2f24a7c0c948",
    //     "name": "Lâmpada LED",
    //     "type": "Energia",
    //     "madeBy": "Intelbras",
    //     "infoImg": "Imagem de uma lâmpada LED Intelbras",
    //     "photoUrl": "https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"
    // };

    return(
        <SectionDispositivosStyled>
            <DivDispositivosStyled>
                <CardDispositivo />
                <CardDispositivo />
                <CardDispositivo />
            </DivDispositivosStyled>
            <DivDispositivosStyled>
                <CardDispositivo />
                <CardDispositivo />
                <CardDispositivo />
            </DivDispositivosStyled>
        </SectionDispositivosStyled>
    )
}