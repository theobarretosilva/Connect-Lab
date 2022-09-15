import { ConjuntoCards } from "../components/ConjuntoCards/ConjuntoCards";
import { FiltroDispositivos } from "../components/FiltrosDispositivos/FiltrosDispositivos";
import { HeaderInicio } from "../components/HeaderInicio/HeaderInicio";
import { PrevisaoTempo } from "../components/PrevisaoTempo/PrevisaoTempo"

export const TelaInicio = () => {
    return(
        <>
            <HeaderInicio />
            <PrevisaoTempo />
            <FiltroDispositivos />
            <ConjuntoCards />
        </>
    )
}

export default TelaInicio;