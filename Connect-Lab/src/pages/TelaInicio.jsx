import { useEffect, useState } from "react";
import { CardDispositivo } from "../components/CardDispositivo/CardDispositivo";
import { BtnOffStyled, BtnOnStyled, ImgOnOffStyled, SectionDispositivosStyled } from "../components/CardDispositivo/CardDispositivo.styles";
import { FiltroDispositivos } from "../components/FiltrosDispositivos/FiltrosDispositivos";
import { HeaderbarInicio } from "../components/HeaderbarInicio/HeaderbarInicio";
import { PrevisaoTempo } from "../components/PrevisaoTempo/PrevisaoTempo"
import { buscarDispUsu } from "../service/api/axios";

export const TelaInicio = () => {

    useEffect(()=> {
        buscarDispUsu();
    }, [])

    const dispositivosDoUsuario = JSON.parse(localStorage.getItem("dispositivosDoUsuario"));
    
    const [valorFiltrado, setValorFiltrado] = useState(dispositivosDoUsuario);
    
    function handleFilter(event){
        const busca = event.target.value;
        console.log(busca)
        if(busca === "Todos"){
            const filtroNovo = dispositivosDoUsuario.filter((value) => {
                return (value.room !== busca ? (value.room) : (undefined));
            });
            setValorFiltrado(filtroNovo)
        }else{
            const filtroNovo = dispositivosDoUsuario.filter((value) => {
                return (value.room === busca ? (value.room) : (undefined));
            });
            setValorFiltrado(filtroNovo)
        }
    }

    const teste = (e) => {
        const valor = e.target.value;
        localStorage.setItem("idDispUsuSelected", JSON.stringify(valor))
    }

    return(
        <>
            <HeaderbarInicio />
            <PrevisaoTempo />
            <FiltroDispositivos funcao={handleFilter} />
            <SectionDispositivosStyled>
                {valorFiltrado.map((value) => (
                    <CardDispositivo
                        key={value._id}
                        idDisp={value._id}
                        clickDetails={teste}
                        img={value.device.photoUrl}
                        descriImg={value.device.name}
                        nomeDisp={value.device.name}
                        localDisp={value.room}
                        POnOff={value.is_on ? ("ON") : ("OFF")}
                        BtnOnOff={value.is_on ? (
                            <BtnOnStyled onClick={() => console.log("sgdgagd25")}><ImgOnOffStyled src="../../../src/assets/imgs/On.png"/></BtnOnStyled>
                            ) : (<BtnOffStyled><ImgOnOffStyled src="../../../src/assets/imgs/Off.png"/></BtnOffStyled>)
                        }
                    />
                ))}
            </SectionDispositivosStyled>
        </>
    )
}

export default TelaInicio;