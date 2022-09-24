import { CardDispositivo } from "../components/CardDispositivo/CardDispositivo";
import { BtnOffStyled, BtnOnStyled, ImgOnOffStyled, SectionDispositivosStyled } from "../components/CardDispositivo/CardDispositivo.styles";
import { FiltroDispositivos } from "../components/FiltrosDispositivos/FiltrosDispositivos";
import { HeaderbarInicio } from "../components/HeaderbarInicio/HeaderbarInicio";
import { PrevisaoTempo } from "../components/PrevisaoTempo/PrevisaoTempo"
import { buscarDispUsu } from "../service/api/axios";

export const TelaInicio = () => {
    buscarDispUsu();
    const dispositivosDoUsuario = JSON.parse(localStorage.getItem("dispositivosDoUsuario"));
    dispositivosDoUsuario.map((value)=> (
        console.log(value._id)
    ))
    console.log(dispositivosDoUsuario.is_on)
    
    return(
        <>
            <HeaderbarInicio />
            <PrevisaoTempo />
            <FiltroDispositivos />
            <SectionDispositivosStyled>
                {dispositivosDoUsuario.map((value, key) => (
                    <CardDispositivo 
                        key={key}
                        img={value.device.photoUrl}
                        descriImg={value.device.name}
                        nomeDisp={value.device.name}
                        localDisp={value.room}
                        POnOff={value.is_on}
                        BtnOnOff={value.device.is_on ? (
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