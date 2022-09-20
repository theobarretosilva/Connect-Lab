import { CardAddDisp } from "../components/CardAddDisp/CardAddDisp";
import { HeaderbarDisp } from "../components/HeaderbarDisp/HeaderbarDisp";
import { SearchBarDisp } from "../components/SearchBarDisp/SearchBarDisp";
import { TituloTelaDisp } from "../components/TituloTelaDisp/TituloTelaDisp";

export const TelaDispositivos = () => {
    return(
        <>
            <HeaderbarDisp />
            <TituloTelaDisp />
            <SearchBarDisp />
            <CardAddDisp />
        </>
    )
}

export default TelaDispositivos;