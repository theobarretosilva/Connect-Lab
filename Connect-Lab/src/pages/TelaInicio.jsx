import {useState } from "react";
import { ThemeProvider } from "styled-components";
import { CardDispositivo } from "../components/CardDispositivo/CardDispositivo";
import { BtnOffStyled, BtnOnStyled, ImgOnOffStyled, SectionDispositivosStyled } from "../components/CardDispositivo/CardDispositivo.styles";
import { FiltroDispositivos } from "../components/FiltrosDispositivos/FiltrosDispositivos";
import { HeaderbarInicio } from "../components/HeaderbarInicio/HeaderbarInicio";
import { PrevisaoTempo } from "../components/PrevisaoTempo/PrevisaoTempo"
import { buscarDispUsu, dispOnOff } from "../service/api/axios";
import { myTheme } from "../styles/defaultThemes";
import { GlobalStyle } from "../styles/globalStyle";

export const TelaInicio = () => {

    buscarDispUsu();

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

    const setaDetails = (e) => {
        const valor = e.target.value;
        localStorage.setItem("idDispUsuSelected", JSON.stringify(valor))
    }

    return(
        <ThemeProvider theme={myTheme}>
            <GlobalStyle />
            <HeaderbarInicio />
            <PrevisaoTempo />
            <FiltroDispositivos funcao={handleFilter} />
            <SectionDispositivosStyled>
                {valorFiltrado.map((value) => (
                    <CardDispositivo
                        key={value._id}
                        idDisp={value._id}
                        clickDetails={setaDetails}
                        img={value.device.photoUrl}
                        descriImg={value.device.name}
                        nomeDisp={value.device.name}
                        localDisp={value.room}
                        POnOff={value.is_on ? ("ON") : ("OFF")}
                        BtnOnOff={value.is_on ? (
                            <BtnOnStyled value={value._id} onClick={()=> value.is_on ? (dispOnOff(value._id, false).then((res)=> console.log(res))) : (dispOnOff(value._id, true).then((res)=> console.log(res)))}><ImgOnOffStyled src="../../../src/assets/imgs/On.png"/></BtnOnStyled>
                            ) : (<BtnOffStyled value={value._id} onClick={()=> value.is_on ? (dispOnOff(value._id, false).then((res)=> console.log(res))) : (dispOnOff(value._id, true).then((res)=> console.log(res)))}><ImgOnOffStyled src="../../../src/assets/imgs/Off.png"/></BtnOffStyled>)
                        }
                    />
                ))}
            </SectionDispositivosStyled>
        </ThemeProvider>
    );
};

export default TelaInicio;