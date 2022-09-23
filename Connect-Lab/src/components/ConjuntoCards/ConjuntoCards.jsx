import { DivDispositivosStyled, SectionDispositivosStyled } from "./ConjuntoCards.styles"
import { CardDispositivo } from "../CardDispositivo/CardDispositivo"

export const ConjuntoCards = () => {
    return(
        <SectionDispositivosStyled>
            <DivDispositivosStyled>
                <CardDispositivo />
                <CardDispositivo />
                <CardDispositivo />
                <CardDispositivo />
            </DivDispositivosStyled>
            <DivDispositivosStyled>
                <CardDispositivo />
                <CardDispositivo />
                <CardDispositivo />
                <CardDispositivo />
            </DivDispositivosStyled>
            <DivDispositivosStyled>
                <CardDispositivo />
                <CardDispositivo />
                <CardDispositivo />
                <CardDispositivo />
            </DivDispositivosStyled>
        </SectionDispositivosStyled>
    )
}