import { useState, useEffect } from "react";
import { CardAddDisp } from "../components/CardAddDisp/CardAddDisp";
import { GroupDispAddStyled } from "../components/CardAddDisp/CardAddDisp.styles";
import { HeaderbarDisp } from "../components/HeaderbarDisp/HeaderbarDisp";
import { SearchBarDisp } from "../components/SearchBarDisp/SearchBarDisp";
import { TituloTelaDisp } from "../components/TituloTelaDisp/TituloTelaDisp";
import { buscarDispUsu, buscarListaDispositivos, buscarListaLocais } from "../service/api/axios"
import { ModalAddDisp } from "../components/ModalAddDisp/ModalAddDisp"

export const TelaDispositivos = () => {
    
    const [openModal, setOpenModal] = useState(false)

    const achaDisp = (event) => {
        const idDispositivo = event.target.value;
        const dados = json.filter((e) => e._id === idDispositivo)
        localStorage.setItem("dadosDispSelected", JSON.stringify(dados))
        console.log(dados)
        setOpenModal(true)
    }
    
    buscarListaDispositivos()
    .then((response) => {
        const dispositivos = response;
        localStorage.setItem("dispositivosSistema", JSON.stringify(dispositivos))
    })
    const json = JSON.parse(localStorage.getItem("dispositivosSistema"));
    const [filteredData, setFilteredData] = useState(json);

    function handleFilter(event){
        const searchWord = event.target.value;
        const newFilter = json.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        setFilteredData(newFilter)
    }

    const dadosDispositivo = JSON.parse(localStorage.getItem("dadosDispSelected"));

    const carregaLocais = () => {
        buscarListaLocais()
        .then((value) => {
            localStorage.setItem("locaisAddDisp", JSON.stringify(value))
            value.map((valor)=> console.log(valor.description))
        });
    };

    useEffect(()=> {
        carregaLocais();
        buscarDispUsu();
    }, []);

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
            {openModal && dadosDispositivo.map((value, key) => (
                <ModalAddDisp 
                    nomeDispositivo={value.name}
                    closeModal={setOpenModal}
                    key={key}    
                />
            ))}
        </>
    )
}

export default TelaDispositivos;