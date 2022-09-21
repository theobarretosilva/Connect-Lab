// eslint-disable-next-line no-unused-vars
import { CardAddDisp } from "../components/CardAddDisp/CardAddDisp";
import { GroupDispAddStyled } from "../components/CardAddDisp/CardAddDisp.styles";
import { HeaderbarDisp } from "../components/HeaderbarDisp/HeaderbarDisp";
import { SearchBarDisp } from "../components/SearchBarDisp/SearchBarDisp";
import { TituloTelaDisp } from "../components/TituloTelaDisp/TituloTelaDisp";
import { buscarListaDispositivos } from "../service/api/axios"

export const TelaDispositivos = () => {
    const json = JSON.parse(localStorage.getItem("Dispositivos"));

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
            <GroupDispAddStyled>
                {json.map((dispositivos) => (
                    <CardAddDisp
                        key={dispositivos._id}
                        linkFotoDispositivo={dispositivos.photoUrl}
                        nomeDisposivito={dispositivos.name}
                        idDispositivo={dispositivos._id}
                    />
                ))}
            </GroupDispAddStyled>
        </>
    )
}

export default TelaDispositivos;