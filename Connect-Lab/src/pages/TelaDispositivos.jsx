import { HeaderbarDisp } from "../components/HeaderbarDisp/HeaderbarDisp";
import { SearchBarDisp } from "../components/SearchBarDisp/SearchBarDisp";
import { TituloTelaDisp } from "../components/TituloTelaDisp/TituloTelaDisp";

export const TelaDispositivos = () => {
    return(
        <>
            <HeaderbarDisp />
            <TituloTelaDisp />
            <SearchBarDisp />
        </>
    )
}

export default TelaDispositivos;