import { ConjuntoCards } from "../components/ConjuntoCards/ConjuntoCards";
import { FiltroDispositivos } from "../components/FiltrosDispositivos/FiltrosDispositivos";
import { HeaderbarInicio } from "../components/HeaderbarInicio/HeaderbarInicio";
import { PrevisaoTempo } from "../components/PrevisaoTempo/PrevisaoTempo"

export const TelaInicio = () => {
    return(
        <>
            <HeaderbarInicio />
            <PrevisaoTempo />
            <FiltroDispositivos />
            <ConjuntoCards />
        </>
    )
}

export default TelaInicio;