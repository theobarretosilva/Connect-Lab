import { FiltroStyled, PFiltro, PFiltroSelecionado } from "./FiltrosDispositivos.styles"

export const FiltroDispositivos = () => {

    return(
        <FiltroStyled>
            <PFiltroSelecionado>Todos</PFiltroSelecionado>
            <PFiltro>Quarto</PFiltro>
            <PFiltro>Sala</PFiltro>
            <PFiltro>Cozinha</PFiltro>
        </FiltroStyled>
    )
}