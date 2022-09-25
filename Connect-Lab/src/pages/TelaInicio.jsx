import { useState } from "react";
import { CardDispositivo } from "../components/CardDispositivo/CardDispositivo";
import { BtnOffStyled, BtnOnStyled, ImgOnOffStyled, SectionDispositivosStyled } from "../components/CardDispositivo/CardDispositivo.styles";
import { FiltroDispositivos } from "../components/FiltrosDispositivos/FiltrosDispositivos";
import { HeaderbarInicio } from "../components/HeaderbarInicio/HeaderbarInicio";
import { PrevisaoTempo } from "../components/PrevisaoTempo/PrevisaoTempo"

export const TelaInicio = () => {

    const dispositivosDoUsuario = JSON.parse(localStorage.getItem("dispositivosDoUsuario"));
    const [valorFiltrado, setValorFiltrado] = useState(dispositivosDoUsuario);
    
    function handleFilter(event){
        const busca = event.target.value;
        console.log(busca)
        const filtroNovo = dispositivosDoUsuario.filter((value) => {
            console.log(value.room)
            return (value.room === busca ? (value.room) : (undefined));
        });
        setValorFiltrado(filtroNovo)
        console.log(filtroNovo)
    }

    const teste = (e) => {
        console.log(e.target.value)
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
                        clickDetails={teste}
                        img={value.device.photoUrl}
                        descriImg={value.device.name}
                        nomeDisp={value.device.name}
                        localDisp={value.room}
                        POnOff={value.is_on ? ("ON") : ("OFF")}
                        BtnOnOff={value.is_on ? (
                            <BtnOnStyled><ImgOnOffStyled src="../../../src/assets/imgs/On.png"/></BtnOnStyled>
                            ) : (<BtnOffStyled><ImgOnOffStyled src="../../../src/assets/imgs/Off.png"/></BtnOffStyled>)
                        }
                    />
                ))}
            </SectionDispositivosStyled>
        </>
    )
}

export default TelaInicio;