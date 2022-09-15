import { DivDispositivosStyled, SectionDispositivosStyled } from "./ConjuntoCards.styles"
import { CardDispositivo } from "../CardDispositivo/CardDispositivo"

export const ConjuntoCards = () => {
    return(
        <SectionDispositivosStyled>
            <DivDispositivosStyled>
                <CardDispositivo />
            </DivDispositivosStyled>
        </SectionDispositivosStyled>
    )
}