// eslint-disable-next-line no-unused-vars
import { CardAddDisp } from "../components/CardAddDisp/CardAddDisp";
import { HeaderbarDisp } from "../components/HeaderbarDisp/HeaderbarDisp";
import { SearchBarDisp } from "../components/SearchBarDisp/SearchBarDisp";
import { TituloTelaDisp } from "../components/TituloTelaDisp/TituloTelaDisp";
import { buscarListaDispositivos } from "../service/api/axios"

export const TelaDispositivos = () => {
    // eslint-disable-next-line no-unused-vars
    const json = JSON.stringify(localStorage.getItem("Dispositivos"));
    buscarListaDispositivos()
                .then((response) => {
                    const dispositivos = response;
                    localStorage.setItem("Dispositivos", JSON.stringify(dispositivos))
                })
    return(
        <>
            <HeaderbarDisp />
            <TituloTelaDisp />
            <SearchBarDisp />
            {/* {json.map((dispositivos) => (
                <CardAddDisp
                    key={dispositivos.index}
                    linkFotoDispositivo={dispositivos.photoUrl}
                    nomeDisposivito={dispositivos.name}
                    idDispositivo={dispositivos._id}
                />
            ))} */}
        </>
    )
}

export default TelaDispositivos;