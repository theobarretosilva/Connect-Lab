import { BtnRemoveDispStyled, DivDadosInfoStyled, DivInfoStyled, DivOnOffStyled, H3InfoStyled, ImgDetalhesStyled, LinhaStyled, PInfoStyled, TipoDispStyled, SectionDetalheStyled, PStyled } from "./BoxDetalhesDisp.styles"
import { H1Styled } from "../BoxPerfil/BoxPerfil.styles";
import { BtnOffStyled, BtnOnStyled, ImgOnOffStyled } from "../CardDispositivo/CardDispositivo.styles";
import { deletDispUsu, dispOnOff } from "../../service/api/axios";
import { Link } from "react-router-dom";

export const BoxDetalhesDisp = () => {
    const disp = JSON.parse(localStorage.getItem("dispositivosDoUsuario"));
    const idDisp = JSON.parse(localStorage.getItem("idDispUsuSelected"));
    const dados = disp.filter((e)=> e._id === idDisp)

    const deletaDisp = (e) => {
        const id = e.target.value;
        deletDispUsu(id);
    }

    return(
        <main>
            {dados.map((value, key)=> (
                <SectionDetalheStyled key={key}>
                    <H1Styled>{value.device.name}</H1Styled>
                    <TipoDispStyled>{value.device.type}</TipoDispStyled>
                    <ImgDetalhesStyled src={value.device.photoUrl} alt={value.device.name}/>
                    <DivOnOffStyled>
                        <PStyled>Dispositivo {value.is_on ? ("ligado") : ("desligado")}</PStyled>
                        {value.is_on ? (
                            <BtnOnStyled value={value._id} onClick={()=> value.is_on ? (dispOnOff(value._id, false)) : (dispOnOff(value._id, true))}><ImgOnOffStyled src="../../../src/assets/imgs/On.png"/></BtnOnStyled>
                            ) : (<BtnOffStyled value={value._id} onClick={()=> value.is_on ? (dispOnOff(value._id, false)) : (dispOnOff(value._id, true))}><ImgOnOffStyled src="../../../src/assets/imgs/Off.png"/></BtnOffStyled>)}
                    </DivOnOffStyled>
                    <DivInfoStyled>
                        <H3InfoStyled>Informações do dispositivo</H3InfoStyled>
                        <LinhaStyled />
                        <DivDadosInfoStyled>
                            <PInfoStyled><b>Fabricante: </b>{value.device.madeBy}</PInfoStyled>
                            <PInfoStyled><b>ID virtual: </b>{value.device.info.virtual_id}</PInfoStyled>
                            <PInfoStyled><b>Endereço IP: </b>{value.device.info.ip_address}</PInfoStyled>
                            <PInfoStyled><b>Endereço MAC: </b>{value.device.info.mac_address}</PInfoStyled>
                            <PInfoStyled><b>Força do sinal: </b>{value.device.info.signal}</PInfoStyled>
                        </DivDadosInfoStyled>
                    </DivInfoStyled>
                    <Link to="/inicio" replace={true}><BtnRemoveDispStyled onClick={deletaDisp} value={value._id}>Remover dispositivo</BtnRemoveDispStyled></Link>
                </SectionDetalheStyled>
            ))};
        </main>
    );
};