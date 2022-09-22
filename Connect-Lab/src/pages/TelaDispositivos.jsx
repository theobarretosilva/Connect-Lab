import { useState } from "react";
import { CardAddDisp } from "../components/CardAddDisp/CardAddDisp";
import { GroupDispAddStyled } from "../components/CardAddDisp/CardAddDisp.styles";
import { HeaderbarDisp } from "../components/HeaderbarDisp/HeaderbarDisp";
import { SearchBarDisp } from "../components/SearchBarDisp/SearchBarDisp";
import { TituloTelaDisp } from "../components/TituloTelaDisp/TituloTelaDisp";
import { buscarListaDispositivos } from "../service/api/axios"

export const TelaDispositivos = () => {
    const json = JSON.parse(localStorage.getItem("Dispositivos"));
    const [filteredData, setFilteredData] = useState(json);

    const achaDisp = (event) => {
        const idDispositivo = event.target.value;
        const dados = json.filter((e) => e._id === idDispositivo)
        localStorage.setItem("dadosDispSelected", JSON.stringify(dados))
        console.log(dados)
    }
    
    buscarListaDispositivos()
    .then((response) => {
        const dispositivos = response;
        localStorage.setItem("Dispositivos", JSON.stringify(dispositivos))
    })

    function handleFilter(event){
        const searchWord = event.target.value;
        const newFilter = json.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        setFilteredData(newFilter)
    }

    return(
        <>
            <HeaderbarDisp />
            <TituloTelaDisp />
            <SearchBarDisp func={handleFilter}/>
            <GroupDispAddStyled>
                {filteredData.map((value, key) => (
                    <CardAddDisp
                        key={key}
                        linkFotoDispositivo={value.photoUrl}
                        nomeDisposivito={value.name}
                        idDispositivo={value._id}
                        noClique={achaDisp}
                    />
                ))}
            </GroupDispAddStyled>
        </>
    )
}

export default TelaDispositivos;