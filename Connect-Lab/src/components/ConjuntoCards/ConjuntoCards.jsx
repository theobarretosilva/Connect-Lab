import { SectionDispositivosStyled } from "./ConjuntoCards.styles"
import { CardDispositivo } from "../CardDispositivo/CardDispositivo"
import { BtnOffStyled, BtnOnStyled, ImgOnOffStyled } from "../CardDispositivo/CardDispositivo.styles";

export const ConjuntoCards = () => {
    const dispositivosDoUsuario = JSON.parse(localStorage.getItem("dispositivosDoUsuario"));
    return(
        <SectionDispositivosStyled>
            {dispositivosDoUsuario.map((value, key) => (
                <CardDispositivo 
                    key={key}
                    img={value.device.photoUrl}
                    descriImg={value.device.name}
                    nomeDisp={value.device.name}
                    localDisp={value.room}
                    POnOff={value.device.is_on ? ("ON") : ("OFF")}
                    BtnOnOff={value.device.is_on ? (<BtnOnStyled><ImgOnOffStyled src="../../../src/assets/imgs/On.png"/></BtnOnStyled>) : (<BtnOffStyled><ImgOnOffStyled src="../../../src/assets/imgs/Off.png"/></BtnOffStyled>)
                }
                />
            ))}
        </SectionDispositivosStyled>
    )
}